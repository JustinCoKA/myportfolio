import fs from 'fs'
import path from 'path'

/**
 * public/documents/ 폴더의 모든 문서를 읽어서 텍스트로 반환
 * 지원 형식: .txt, .md
 */
export function loadDocuments(): string {
  const documentsPath = path.join(process.cwd(), 'public', 'documents')
  
  // 폴더가 없으면 빈 문자열 반환
  if (!fs.existsSync(documentsPath)) {
    return ''
  }

  const files = fs.readdirSync(documentsPath)
  const supportedExtensions = ['.txt', '.md']
  
  const documentTexts = files
    .filter(file => supportedExtensions.some(ext => file.endsWith(ext)))
    .map(file => {
      const filePath = path.join(documentsPath, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const fileName = file.replace(/\.[^/.]+$/, '') // 확장자 제거
      
      return `## Document: ${fileName}\n\n${content}`
    })
    .join('\n\n---\n\n')

  return documentTexts
}
