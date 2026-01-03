import pdf from 'pdf-parse'
import fs from 'fs'
import path from 'path'

let resumeCache: string | null = null

export async function parseResumePDF(): Promise<string> {
  // 캐시가 있으면 재사용
  if (resumeCache) {
    return resumeCache
  }

  try {
    const resumePath = path.join(process.cwd(), 'public', 'resume', 'justin-lee-resume.pdf')
    const dataBuffer = fs.readFileSync(resumePath)
    const data = await pdf(dataBuffer)
    
    // 캐시에 저장
    resumeCache = data.text
    return data.text
  } catch (error) {
    console.error('PDF parsing error:', error)
    return '' // PDF 파싱 실패 시 빈 문자열 반환
  }
}
