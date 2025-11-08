# 9DEV - 개발자 스터디 그룹

> 함께 성장하는 개발자들의 모임

## 🚀 프로젝트 소개

9DEV는 개발자들이 함께 성장할 수 있는 스터디 그룹입니다. 특정 기술이나 주제에 얽매이지 않고 각자의 관심사에 따라 자유롭게 스터디하며, 부담없는 분위기에서 서로 도움을 주고받으며 발전해 나갑니다.

## ✨ 주요 기능

- **현대적인 UI/UX 리뉴얼**: Tailwind CSS 기반의 세련된 디자인
- **대시보드**: 최신 활동, 통계, 리포지토리 현황을 한눈에 확인
- **리포지토리 관리**: 카드형 UI로 프로젝트를 직관적으로 탐색
- **설정 페이지**: 프로필, 테마, 알림 등 개인화 설정
- **다크/라이트 모드**: localStorage 기반 테마 영속성 지원
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 대응
- **좌측 사이드바 네비게이션**: 직관적인 페이지 이동
- **검색 및 알림**: 상단 네비게이션바의 편리한 기능

## 🛠 기술 스택

### Frontend
- **Framework**: Vue.js 3.x (Composition API with `<script setup>`)
- **Styling**: Tailwind CSS 3.x
- **Build Tool**: Vite 5.x
- **Router**: Vue Router 4.x
- **State Management**: Pinia
- **Fonts**: Inter, Poppins, Noto Sans KR (Google Fonts)

### Design System
- **Primary Color**: Indigo (#4F46E5)
- **Secondary Color**: Emerald (#10B981)
- **Design Pattern**: Card-based layout with hover effects
- **Typography**: Inter for UI, Poppins for display

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: Netlify

## 🎯 기술 분야

### Frontend Development
- **JavaScript** - ES6+ 모던 자바스크립트
- **TypeScript** - 타입 안전성과 개발 생산성
- **Vue.js** - 반응형 프론트엔드 프레임워크
- **CSS3** - 모던 CSS 기술과 애니메이션

### Backend Development
- **Kotlin** - JVM 기반 현대적인 백엔드 언어
- **Spring** - 엔터프라이즈급 백엔드 프레임워크
- **Node.js** - 서버사이드 자바스크립트 런타임
- **Python** - 데이터 처리 및 백엔드 개발

### Mobile Development
- **Dart** - 크로스 플랫폼 모바일 개발 언어
- **Flutter** - 구글의 크로스 플랫폼 UI 프레임워크
- **Android** - 안드로이드 네이티브 개발
- **iOS** - iOS 네이티브 개발

### DevOps & Tools
- **Kubernetes** - 컨테이너 오케스트레이션
- **Docker** - 컨테이너화 기술
- **Git** - 버전 관리 시스템

## 📦 설치 및 실행

```bash
# 저장소 클론
git clone git@github.com:9dev-group/9dev.git
cd 9dev

# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 코드 린트
npm run lint

# 코드 포맷팅
npm run format
```

## 🎯 페이지 구성

### Dashboard (대시보드)
- 실시간 통계 카드 (멤버 수, 프로젝트, 커밋, 스터디 시간)
- 최근 활동 타임라인
- 빠른 링크 (GitHub, 스터디 가이드, 프로젝트 보드)
- 최근 리포지토리 카드 그리드

### Repositories (리포지토리)
- 카드 기반 그리드 레이아웃 (반응형: 모바일 1열, 태블릿 2열, 데스크톱 3열)
- 필터링 (언어별: Kotlin, Java, Vue)
- 정렬 (최근 업데이트, 스타 수, 이름 순)
- 각 카드: 이름, 설명, 스타, 포크, 언어, 태그, 최근 업데이트

### Settings (설정)
- **프로필 설정**: 사진, 이름, 이메일, 소개, GitHub 사용자명
- **테마 설정**: 라이트/다크/시스템 모드, 액센트 컬러, 폰트 크기
- **알림 설정**: 이메일, 푸시, 주간 리포트, 멤버 활동 알림
- **계정 설정**: 비밀번호 변경, 계정 삭제

## 🎨 디자인 특징

- **Tailwind CSS 유틸리티**: 빠르고 일관된 스타일링
- **카드 기반 레이아웃**: 깔끔하고 직관적인 정보 구조
- **호버 효과**: 카드에 마우스 오버 시 그림자 + 약간의 확대 (transform)
- **다크 모드 지원**: 완벽한 다크 테마 구현
- **반응형 그리드**: Tailwind의 그리드 시스템 활용
- **타이포그래피**: Inter, Poppins, Noto Sans KR 조합
- **접근성**: 색상 대비, 키보드 네비게이션 고려
- **커스텀 스크롤바**: 브랜드 컬러 적용

## 📱 반응형 브레이크포인트

- **모바일 (sm)**: 640px 이상
- **태블릿 (md)**: 768px 이상
- **데스크톱 (lg)**: 1024px 이상
- **대형 화면 (xl)**: 1280px 이상
- **초대형 (2xl)**: 1536px 이상

## 🎭 인터랙션 & 애니메이션

- **페이지 전환**: Vue Router 기반 부드러운 전환 효과
- **카드 호버**: Shadow + Transform 애니메이션
- **테마 전환**: 아이콘 회전 애니메이션
- **드롭다운**: Fade + Slide 효과
- **사이드바**: 모바일에서 슬라이드 인/아웃

## 🏗 프로젝트 구조

```
9dev/
├── src/
│   ├── components/
│   │   ├── common/              # 공통 컴포넌트
│   │   │   ├── AppCard.vue     # 재사용 가능한 카드 컴포넌트
│   │   │   ├── AppSidebar.vue  # 좌측 네비게이션 사이드바
│   │   │   ├── AppNavbar.vue   # 상단 네비게이션 바
│   │   │   └── ThemeSwitcher.vue # 테마 전환 스위치
│   │   └── (기존 컴포넌트들)     # 레거시 컴포넌트 유지
│   ├── pages/                   # 페이지 컴포넌트
│   │   ├── Dashboard.vue        # 대시보드 페이지
│   │   ├── Repositories.vue     # 리포지토리 목록 페이지
│   │   └── Settings.vue         # 설정 페이지
│   ├── layouts/
│   │   └── DefaultLayout.vue    # 기본 레이아웃 (Sidebar + Navbar)
│   ├── router/
│   │   └── index.js             # Vue Router 설정
│   ├── composables/
│   │   └── useTheme.js          # 테마 관리 Composable
│   ├── styles/
│   │   ├── tailwind.css         # Tailwind CSS 설정 및 커스텀 스타일
│   │   └── global.css           # 전역 CSS (레거시)
│   ├── assets/                  # 정적 자산
│   ├── App.vue                  # 루트 컴포넌트
│   └── main.js                  # 애플리케이션 진입점
├── public/                      # 정적 파일
├── index.html                   # HTML 진입점
├── tailwind.config.js           # Tailwind CSS 설정
├── postcss.config.js            # PostCSS 설정
├── vite.config.js               # Vite 번들러 설정
├── .eslintrc.cjs                # ESLint 설정
├── .prettierrc                  # Prettier 설정
├── package.json                 # 프로젝트 의존성
└── README.md                    # 문서
```

## 🎨 Tailwind CSS 커스터마이징

### 색상 팔레트
```js
primary: {
  DEFAULT: '#4F46E5', // Indigo
  50-950: // 색상 스케일
}
secondary: {
  DEFAULT: '#10B981', // Emerald
  50-950: // 색상 스케일
}
```

### 커스텀 유틸리티 클래스
- `.card` - 기본 카드 스타일
- `.card-hover` - 호버 효과가 있는 카드
- `.sidebar-item` - 사이드바 아이템
- `.btn-primary` / `.btn-secondary` - 버튼 스타일
- `.input` - 입력 필드 스타일
- `.badge-primary` / `.badge-secondary` - 배지 스타일

## 🤝 기여하기

새로운 기능이나 개선사항이 있다면 언제든 환영합니다!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **이메일**: 9dev.study@gmail.com
- **GitHub**: [9dev-group](https://github.com/9dev-group)
- **모임 장소**: 사당역 근처 카페
- **모임 시간**: 매주 토·일요일 중 편한 시간에

## 🚀 배포

이 프로젝트는 Netlify를 통해 자동 배포됩니다.

- **프로덕션 URL**: [9dev.netlify.app](https://9dev.netlify.app)
- **브랜치**: `master` 브랜치에 푸시하면 자동 배포

---

Made with ❤️ by 9DEV Team
