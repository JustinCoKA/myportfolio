import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Users, Briefcase, Code, Heart, GraduationCap, FileText, Target, Bot } from "lucide-react"

interface ExampleQuestion {
  id: string
  question: string
  category: "projects" | "experience" | "skills" | "volunteer" | "general" | "education"
  icon: React.ComponentType<any>
}

interface ExampleQuestionsProps {
  onQuestionSelect: (question: string) => void
  maxQuestions?: number
}

export function ExampleQuestions({ onQuestionSelect, maxQuestions }: ExampleQuestionsProps) {
  const questions: ExampleQuestion[] = [
    {
      id: "1",
      question: "What programming languages does Justin specialize in?",
      category: "skills",
      icon: Code,
    },
    {
      id: "2", 
      question: "Tell me about Justin's most impactful project",
      category: "projects",
      icon: Target,
    },
    {
      id: "3",
      question: "What kind of volunteer work has Justin done?",
      category: "volunteer", 
      icon: Heart,
    },
    {
      id: "4",
      question: "Does Justin have experience with data engineering?",
      category: "experience",
      icon: Briefcase,
    },
    {
      id: "5",
      question: "What was Justin's role at his previous positions?",
      category: "experience",
      icon: Users,
    },
    {
      id: "6",
      question: "How many years of experience does Justin have in software development?",
      category: "general",
      icon: MessageCircle,
    },
    {
      id: "7",
      question: "What makes Justin different from other developers?",
      category: "general",
      icon: Sparkles,
    },
    {
      id: "8",
      question: "Can you summarize Justin's educational background?",
      category: "education",
      icon: GraduationCap,
    },
    {
      id: "9",
      question: "What are Justin's career goals and interests?",
      category: "general",
      icon: FileText,
    },
    {
      id: "10",
      question: "Has Justin worked with AWS and cloud technologies?",
      category: "skills",
      icon: Bot,
    },

    {
  id: "11",
  question: "What kind of person is Justin beyond his technical skills?",
  category: "general",
  icon: Heart,
},
{
  id: "12",
  question: "What experiences shaped how Justin approaches work and personal growth?",
  category: "general",
  icon: Sparkles,
},
{
  id: "13",
  question: "What values does Justin look for in people he works or connects with?",
  category: "general",
  icon: Users,
},

  ]

  const categoryColors = {
    projects: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    experience: "bg-green-500/10 text-green-600 border-green-500/20", 
    skills: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    volunteer: "bg-red-500/10 text-red-600 border-red-500/20",
    education: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    general: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Example Questions</h3>
        <p className="text-sm text-muted-foreground">
          Click any question below to ask the AI about Justin's background
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {questions.slice(0, maxQuestions || questions.length).map((q) => {
          const IconComponent = q.icon
          return (
            <Card
              key={q.id}
              className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              onClick={() => onQuestionSelect(q.question)}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${categoryColors[q.category]}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-5 hover:text-primary transition-colors">
                    {q.question}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Or type your own question in the chat below
        </p>
      </div>
    </div>
  )
}