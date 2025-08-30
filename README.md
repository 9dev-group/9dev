# 9DEV - 개발자 스터디 그룹

> 함께 성장하는 개발자들의 모임

## 🚀 프로젝트 소개

9DEV는 개발자들이 함께 성장할 수 있는 스터디 그룹입니다. 특정 기술이나 주제에 얽매이지 않고 각자의 관심사에 따라 자유롭게 스터디하며, 부담없는 분위기에서 서로 도움을 주고받으며 발전해 나갑니다.

## ✨ 주요 기능

- **현대적인 반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **인터랙티브 애니메이션**: GSAP를 활용한 부드러운 애니메이션과 호버 효과
- **멤버 프로필**: 스터디 멤버들의 정보와 GitHub 링크
- **모임 정보**: 장소, 일정, 연락처 정보 제공
- **소셜 링크**: GitHub, 이메일 등 다양한 연락 방법
- **다크/라이트 모드**: 사용자 선호에 따른 테마 전환
- **부드러운 스크롤 네비게이션**: 섹션별 자동 스크롤 기능

## 🛠 기술 스택

### Frontend
- **Framework**: Vue.js 3.x (Composition API)
- **UI Framework**: Vuetify 3.x
- **Build Tool**: Vite 5.x
- **State Management**: Pinia
- **Icons**: Material Design Icons (MDI)

### Animation & Styling
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS3 with modern features (Glassmorphism, Gradients)
- **Typography**: Noto Sans KR (Google Fonts)

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

# 개발 서버 실행 (localhost:8080)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🎨 디자인 특징

- **그라디언트 배경**: 현대적인 그라디언트 색상 조합
- **글래스모피즘**: 반투명 효과를 활용한 모던한 디자인
- **카드 기반 레이아웃**: 깔끔하고 직관적인 정보 구조
- **호버 애니메이션**: 사용자 상호작용을 위한 부드러운 애니메이션
- **반응형 그리드**: 모바일, 태블릿, 데스크톱 최적화
- **타이포그래피**: Noto Sans KR 폰트를 활용한 가독성
- **3D 효과**: 입체감을 위한 그림자와 변형 효과

## 📱 반응형 지원

- **모바일**: 320px 이상
- **태블릿**: 768px 이상  
- **데스크톱**: 1024px 이상
- **대형 화면**: 1440px 이상

## 🎭 애니메이션 기능

- **GSAP 애니메이션**: 부드러운 진입 애니메이션
- **스크롤 트리거**: 스크롤에 따른 요소 등장 효과
- **호버 인터랙션**: 마우스 오버 시 부드러운 변형
- **플로팅 요소**: 배경의 움직이는 기술 아이콘들
- **스크롤 인디케이터**: 페이지 하단으로 안내하는 애니메이션

## 🏗 프로젝트 구조

```
9dev/
├── src/
│   ├── components/          # Vue 컴포넌트들
│   │   ├── App.vue         # 메인 앱 컴포넌트
│   │   ├── Front.vue       # 홈페이지 히어로 섹션
│   │   ├── Introduce.vue   # 소개 섹션
│   │   ├── Profile.vue     # 멤버 프로필 섹션
│   │   ├── Card.vue        # 프로필 카드 컴포넌트
│   │   ├── Information.vue # 모임 정보 섹션
│   │   ├── Location.vue    # 위치 정보 컴포넌트
│   │   ├── Contact.vue     # 연락처 컴포넌트
│   │   └── Footer.vue      # 푸터 컴포넌트
│   ├── assets/             # 정적 자산들
│   │   ├── images/         # 이미지 파일들
│   │   └── favicon.png     # 파비콘
│   ├── css/                # CSS 스타일 파일들
│   └── main.js             # 앱 진입점
├── public/                 # 공개 정적 파일들
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 설정 및 의존성
├── vite.config.js          # Vite 설정
└── README.md               # 프로젝트 문서
```

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
