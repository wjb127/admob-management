# AdMob 관리 시스템

Google AdMob 광고를 쉽게 관리하고 모니터링할 수 있는 Next.js 웹 애플리케이션입니다.

## 주요 기능

- 🎯 **AdMob 연동**: Google AdMob Publisher ID를 통한 간편한 연결
- 📊 **수익 분석**: 실시간 광고 수익과 성과 모니터링
- ⚙️ **광고 설정**: 광고 단위와 배치 관리
- 📄 **app-ads.txt 자동 설정**: Google Play Console 요구사항 자동 충족
- 🌐 **Vercel 배포 지원**: 원클릭 배포로 즉시 사용 가능

## 설정 가이드

### 1. Google Play Console에서 웹사이트 등록
- Play Console → 앱 → 스토어 설정 → 스토어 등록정보
- 웹사이트 URL 필드에 배포된 도메인 입력

### 2. AdMob 계정 연결
- AdMob 계정에서 Publisher ID 확인 (pub-XXXXXXXXXXXXXXXX 형식)
- 웹사이트에서 Publisher ID 입력하여 연결

### 3. app-ads.txt 설정
- 자동으로 `/app-ads.txt` 경로에서 파일 제공
- Publisher ID 입력 시 자동으로 업데이트

### 4. Vercel 배포
```bash
# GitHub에 푸시
git add .
git commit -m "Initial commit"
git push origin main

# Vercel에서 프로젝트 연결 후 자동 배포
```

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 접속
```

## 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 파일 구조

```
admob-manage/
├── src/
│   └── app/
│       ├── app-ads.txt/
│       │   └── route.ts          # app-ads.txt API 라우트
│       ├── layout.tsx             # 레이아웃 컴포넌트
│       └── page.tsx               # 메인 대시보드
├── public/
│   └── app-ads.txt                # app-ads.txt 파일
└── README.md
```

## 환경 변수

필요한 경우 `.env.local` 파일에 다음 변수들을 설정하세요:

```env
# Google AdMob API (선택사항)
GOOGLE_ADMOB_API_KEY=your_api_key_here

# 기타 설정
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 배포

### Vercel 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 연결
3. 자동 배포 완료

### 기타 플랫폼

- **Netlify**: `npm run build` 후 `out` 폴더 배포
- **AWS**: S3 + CloudFront 또는 Amplify 사용
- **Google Cloud**: Cloud Run 또는 App Engine 사용

## 라이선스

MIT License

## 지원

문제가 있거나 기능 요청이 있으시면 GitHub Issues를 통해 알려주세요.
