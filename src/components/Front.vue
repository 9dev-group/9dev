<template>
  <section class="hero-section">
    <v-container fluid class="hero-container">
      <v-row align="center" justify="center" class="hero-row">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="gradient-text">9DEV</span>
              <br>
              <span class="hero-subtitle">개발스터디</span>
            </h1>
            <p class="hero-description">
              개발자로서 함께 성장하는 공간
              <br>
              부담없이 스터디할 수 있는 모임
            </p>
            <div class="hero-buttons">
              <v-btn
                large
                color="primary"
                class="mr-4 mb-4"
                @click="scrollToSection('introduce')"
              >
                <v-icon left>mdi-information</v-icon>
                스터디 소개
              </v-btn>
              <v-btn
                large
                outlined
                color="primary"
                class="mb-4"
                @click="scrollToSection('profile')"
              >
                <v-icon left>mdi-account-group</v-icon>
                멤버 보기
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <div class="hero-image-container">
            <img 
              :src="image" 
              alt="9DEV Logo" 
              class="hero-image"
              @load="imageLoaded = true"
            />
            <div class="floating-elements">
              <div class="floating-element" v-for="i in 6" :key="i" :style="{ animationDelay: `${i * 0.5}s` }">
                <v-icon color="primary" size="24">mdi-code-braces</v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- 스크롤 인디케이터 -->
    <div class="scroll-indicator" @click="scrollToSection('introduce')">
      <v-icon color="white" size="24">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script>
const prodLogoImgPath = "https://raw.githubusercontent.com/9dev-group/9dev/master/src/assets/images/logo/";
const devLogoImgPath = "src/assets/images/logo/";

export default {
  data() {
    return {
      image: prodLogoImgPath + 'Logo_01.png',
      imageLoaded: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-row {
  min-height: 80vh;
}

.hero-content {
  padding: 2rem 0;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
}

.gradient-text {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 300;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
}

.hero-buttons {
  margin-top: 2rem;
}

.hero-image-container {
  position: relative;
  display: inline-block;
}

.hero-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: translateY(-10px);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  animation: float 6s ease-in-out infinite;
  opacity: 0.6;
}

.floating-element:nth-child(1) { top: 10%; left: 10%; }
.floating-element:nth-child(2) { top: 20%; right: 15%; }
.floating-element:nth-child(3) { top: 60%; left: 5%; }
.floating-element:nth-child(4) { top: 70%; right: 10%; }
.floating-element:nth-child(5) { bottom: 20%; left: 20%; }
.floating-element:nth-child(6) { bottom: 10%; right: 5%; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 3;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* 반응형 디자인 */
@media (max-width: 960px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    text-align: center;
  }
  
  .hero-image {
    max-width: 300px;
  }
}
</style>
