# 추가 문서 업로드 가이드

AI 챗봇에 추가 정보를 제공하기 위해 `public/documents/` 폴더에 문서를 저장하세요.

## 지원 형식
- `.txt` - 일반 텍스트 파일
- `.md` - 마크다운 파일

## 사용 방법

1. **문서 추가**
   ```bash
   # public/documents/ 폴더에 파일 복사
   cp your-document.txt public/documents/
   ```

2. **예시 파일 생성**
   ```bash
   # 이력서 정보
   echo "Justin Lee - Full Resume
   
   Professional Summary: 
   Trilingual IT student specializing in data engineering..." > public/documents/resume.txt
   
   # 프로젝트 상세 정보
   echo "# Ursaviour Project Details
   
   Technical Architecture:
   - Frontend: Next.js with TypeScript
   - Backend: Node.js API routes..." > public/documents/ursaviour-details.md
   ```

3. **서버 재시작**
   - 문서 추가 후 개발 서버를 재시작하면 AI가 자동으로 문서 내용을 학습합니다.

## 현재 AI가 사용하는 데이터

1. **포트폴리오 데이터** (자동 로드)
   - 프로젝트 (data/projects.ts)
   - 경력 (data/experience.ts)
   - 자원봉사 (data/volunteer.ts)
   - 학력 (data/education.ts)
   - 기술 스택 (data/skills.ts)

2. **추가 문서** (public/documents/)
   - 업로드한 모든 .txt, .md 파일

## 주의사항

- 파일명에 공백이나 특수문자를 피하세요
- 한 파일당 최대 50KB 권장
- 민감한 정보는 업로드하지 마세요 (API를 통해 외부에 노출됨)
