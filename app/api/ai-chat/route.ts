import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from '@google/generative-ai'
import { supabase } from '@/lib/supabase'
import { getPortfolioContext } from '@/lib/portfolio-context'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

console.log('API Key loaded:', process.env.GOOGLE_API_KEY ? 'Yes' : 'No')
console.log('API Key first 20 chars:', process.env.GOOGLE_API_KEY?.substring(0, 20))

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"
  return `rate_limit:${ip}`
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 10

  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count += 1
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { message, conversationId, messages = [] } = body

    // Input validation
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      )
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message too long. Please keep it under 500 characters." },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedMessage = message.trim().slice(0, 500)
    const sessionId = conversationId || `conv_${Date.now()}`

    // 1. 포트폴리오 컨텍스트 생성
    const portfolioContext = getPortfolioContext()

    // 2. 전체 컨텍스트 (이력서는 향후 추가 예정)
    const fullContext = portfolioContext

    // 3. Google Gemini API 호출 (무료 티어)
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" })
    
    const systemPrompt = `You are Justin Lee's portfolio assistant. Answer questions ONLY based on the following information about Justin's portfolio, projects, experience, and qualifications.

${fullContext}

Guidelines:
- Be professional, friendly, and concise
- Provide specific examples from Justin's projects and experience
- If asked about something not in the context, politely say "I don't have that information in Justin's portfolio, but I'd be happy to answer questions about his projects, experience, or skills."
- When discussing technical projects, mention specific technologies and outcomes
- Keep responses under 150 words unless asked for detailed explanations
- Use a warm, professional tone that reflects Justin's personality`

    const prompt = `${systemPrompt}\n\nUser Question: ${sanitizedMessage}\n\nAssistant:`
    
    const result = await model.generateContent(prompt)
    const response = await result.response
    const aiResponse = response.text()

    // 5. 대화 로그 저장
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 'Unknown'

    await supabase.from('chat_logs').insert({
      session_id: sessionId,
      user_message: sanitizedMessage,
      ai_response: aiResponse,
      context_used: fullContext.substring(0, 1000),
      user_agent: userAgent,
      ip_address: ipAddress,
    })

    return NextResponse.json({
      response: aiResponse,
      conversationId: sessionId,
    })

  } catch (error: any) {
    console.error("AI Chat API Error:", error)
    
    // Google Gemini API 오류 처리
    if (error?.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'AI service configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

// 아래 목업 함수는 더 이상 사용되지 않음 (실제 AI API 사용)
function generateMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Programming languages and skills
  if (lowerMessage.includes("programming language") || lowerMessage.includes("languages")) {
    return "Justin specializes in **Python** and **SQL** for data engineering tasks, and **JavaScript/TypeScript** for web development. He's particularly strong with Python for data analysis, ETL pipelines, and backend APIs. He also uses SQL extensively for database operations and data modeling."
  }

  // Projects
  if (lowerMessage.includes("project") && (lowerMessage.includes("impactful") || lowerMessage.includes("best") || lowerMessage.includes("most"))) {
    return "Justin's most impactful project is **UrSaviour**, a full-stack grocery deals tracker. He architected a serverless ETL pipeline on AWS using Lambda, S3, and RDS to process unstructured PDF data from supermarkets. The application helps users save money by tracking weekly discounts and includes features like watchlists and alerts. It demonstrates his skills in both data engineering and full-stack development."
  }

  if (lowerMessage.includes("ursaviour")) {
    return "**UrSaviour** is Justin's flagship project - a comprehensive grocery deals tracking application. He built a serverless ETL pipeline on AWS to process supermarket discount PDFs, created a React frontend with watchlist functionality, and implemented user authentication. The project showcases his expertise in data engineering, cloud architecture, and full-stack development. You can check it out at ursaviour.com."
  }

  if (lowerMessage.includes("cancer data") || lowerMessage.includes("healthcare")) {
    return "Justin worked on a **Cancer Data ETL project** where he analyzed 1.7 million cancer records using Python and SQL. He built an ETL pipeline to normalize public cancer datasets into PostgreSQL with proper schema constraints, identifying tumor patterns and survival rates. This project demonstrates his ability to work with large datasets and extract meaningful insights from healthcare data."
  }

  // Data engineering
  if (lowerMessage.includes("data engineering") || lowerMessage.includes("etl")) {
    return "Yes! Justin has extensive experience in **data engineering**. He's built multiple ETL pipelines, including a serverless architecture on AWS for processing unstructured PDF data and a healthcare data pipeline handling 1.7M+ records. He specializes in Python, SQL, PostgreSQL, and AWS services for data processing and analysis."
  }

  // AWS and cloud
  if (lowerMessage.includes("aws") || lowerMessage.includes("cloud")) {
    return "Justin has hands-on experience with **AWS cloud services** including S3 for storage, Lambda for serverless functions, and RDS for managed databases. He's implemented serverless ETL architectures and understands how to build scalable, cost-effective cloud solutions for data processing applications."
  }

  // Experience and background
  if (lowerMessage.includes("experience") && lowerMessage.includes("years")) {
    return "Justin has about **2 years of experience** in software development, with a focus on data engineering and full-stack development. During this time, he's worked on multiple production projects, processed millions of records, and built scalable web applications using modern technologies."
  }

  if (lowerMessage.includes("role") || lowerMessage.includes("position")) {
    return "Justin works as a **Data Engineer and Full-stack Developer**. His responsibilities include designing ETL pipelines, building web applications with React and Node.js, working with AWS cloud services, and analyzing large datasets. He's successfully processed 1.7M+ healthcare records and built production applications with user authentication."
  }

  // Skills and technologies
  if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
    return "Justin's core skills include **Python** for data processing, **SQL** for database operations, **React/Next.js** for frontend development, and **AWS** for cloud infrastructure. He specializes in ETL pipelines, REST APIs, data modeling, and building responsive web applications. He's also experienced with Docker, PostgreSQL, and modern JavaScript/TypeScript development."
  }

  // What makes him different
  if (lowerMessage.includes("different") || lowerMessage.includes("unique")) {
    return "What makes Justin unique is his **combination of data engineering expertise and full-stack development skills**. He can build complete solutions from data pipeline to user interface. His experience processing millions of healthcare records while also creating user-friendly web applications demonstrates his ability to handle both technical depth and user experience. Plus, his volunteer work shows strong community engagement and soft skills."
  }

  // Education
  if (lowerMessage.includes("education") || lowerMessage.includes("degree") || lowerMessage.includes("study")) {
    return "Justin is currently studying **Information Technology** and expects to graduate in 2025-2026. His coursework includes data structures, database systems, software engineering, and web development. He's been applying his academic knowledge through hands-on projects and real-world applications."
  }

  // Career goals
  if (lowerMessage.includes("career") || lowerMessage.includes("goals") || lowerMessage.includes("interests")) {
    return "Justin is passionate about **data engineering and backend systems**. He's interested in building scalable data pipelines, working with large datasets, and creating efficient ETL processes. He enjoys the challenge of turning raw data into meaningful insights and building the infrastructure that powers data-driven applications."
  }

  // Volunteer work
  if (lowerMessage.includes("volunteer")) {
    return "Justin volunteered at the **LBW Trust Gala Dinner** at Sydney Cricket Ground in October 2024. He assisted with guest registration, event coordination, and fundraising auctions for international education initiatives. This experience developed his event coordination and hospitality skills while contributing to a meaningful cause."
  }

  // AI/ML
  if (lowerMessage.includes("ai") || lowerMessage.includes("machine learning") || lowerMessage.includes("ml")) {
    return "While Justin's primary focus is on data engineering and web development, he has experience working with data analysis tools like **Pandas, NumPy, Matplotlib, and Scikit-learn**. His work processing large datasets and building this AI assistant demonstrates his interest in AI applications, though his main expertise lies in the data infrastructure that powers AI systems."
  }

  // Frameworks
  if (lowerMessage.includes("react") || lowerMessage.includes("framework") || lowerMessage.includes("frontend")) {
    return "Justin is experienced with modern **React and Next.js** development. He builds responsive, accessible user interfaces using **TailwindCSS** for styling and **TypeScript** for type safety. His projects demonstrate clean component architecture and good user experience design principles."
  }

  // Default response
  return `Thanks for your question! Based on Justin's portfolio, he's a **data engineer and full-stack developer** with expertise in Python, SQL, React, and AWS. He's built impressive projects like UrSaviour (grocery deals tracker) and worked with large healthcare datasets. 

Some specific areas I can help you learn about:
• His **technical skills** (Python, SQL, React, AWS)
• **Project details** (UrSaviour, Cancer Data ETL, SiteSync Solutions)  
• **Data engineering experience** (ETL pipelines, large dataset processing)
• **Education and career goals**
• **Volunteer work and community involvement**

Feel free to ask about any of these topics or anything else you'd like to know about Justin's background!`
}