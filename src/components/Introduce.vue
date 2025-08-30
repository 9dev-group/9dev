<template>
  <section id="introduce" class="introduce-section section-reveal">
    <v-container>
      <!-- Section Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <div class="section-header" ref="sectionHeader">
            <v-chip 
              color="primary" 
              variant="elevated" 
              size="small"
              class="mb-4"
            >
              <v-icon start icon="mdi-information" />
              About Us
            </v-chip>
            <h2 class="section-title">스터디 소개</h2>
            <p class="section-subtitle">
              함께 성장하는 개발자들의 <span class="highlight">특별한</span> 모임
            </p>
          </div>
        </v-col>
      </v-row>
      
      <!-- Core Messages -->
      <v-row justify="center" class="mb-16">
        <v-col cols="12" lg="10">
          <div class="messages-container" ref="messagesContainer">
            <v-card
              v-for="(message, index) in messages"
              :key="index"
              class="message-card glass-card"
              elevation="0"
              :class="`message-${index + 1}`"
            >
              <v-card-text class="pa-8">
                <div class="message-content">
                  <div class="message-icon">
                    <v-avatar 
                      size="64" 
                      :color="message.color"
                      class="elevation-4"
                    >
                      <v-icon :icon="message.icon" color="white" size="32" />
                    </v-avatar>
                  </div>
                  <div class="message-text">
                    <h3 class="message-title">{{ message.title }}</h3>
                    <p class="message-description">{{ message.description }}</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      
      <!-- Feature Cards -->
      <v-row justify="center" class="feature-grid">
        <v-col cols="12" lg="10">
          <v-row>
            <v-col 
              cols="12" 
              md="4" 
              v-for="(feature, index) in features" 
              :key="index"
              class="feature-col"
            >
              <v-card 
                class="feature-card modern-card"
                elevation="0"
                :class="`feature-${index + 1}`"
                @mouseenter="onFeatureHover(index)"
                @mouseleave="onFeatureLeave(index)"
              >
                <v-card-text class="text-center pa-8">
                  <div class="feature-icon-container">
                    <div class="feature-background">
                      <v-icon 
                        :icon="feature.icon" 
                        size="48" 
                        :color="feature.iconColor"
                      />
                    </div>
                  </div>
                  <h3 class="feature-title">{{ feature.title }}</h3>
                  <p class="feature-description">{{ feature.description }}</p>
                  
                  <v-btn
                    variant="text"
                    color="primary"
                    size="small"
                    class="mt-4"
                  >
                    더 알아보기
                    <v-icon end icon="mdi-arrow-right" />
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- Call to Action -->
      <v-row justify="center" class="mt-16">
        <v-col cols="12" class="text-center">
          <v-card class="cta-card glass-card" elevation="0">
            <v-card-text class="pa-12">
              <h3 class="cta-title">함께 성장하고 싶다면?</h3>
              <p class="cta-description">
                9DEV와 함께 개발자로서의 여정을 시작해보세요
              </p>
              <div class="cta-actions">
                <v-btn
                  size="large"
                  color="primary"
                  variant="elevated"
                  class="mr-4"
                  @click="scrollToSection('profile')"
                >
                  <v-icon start icon="mdi-account-plus" />
                  멤버 되기
                </v-btn>
                <v-btn
                  size="large"
                  variant="outlined"
                  color="primary"
                  @click="scrollToSection('information')"
                >
                  <v-icon start icon="mdi-map-marker" />
                  모임 정보
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionHeader = ref(null)
const messagesContainer = ref(null)

const messages = [
  {
    title: '자유로운 학습',
    description: '스터디의 공통 주제는 없습니다. 각자의 관심사와 필요에 따라 자유롭게 학습합니다.',
    icon: 'mdi-lightbulb-on',
    color: 'primary'
  },
  {
    title: '성장 지향',
    description: '중요한 것은 개발자로서 성장하고 싶은 욕심입니다. 함께 배우고 발전해 나갑니다.',
    icon: 'mdi-trending-up',
    color: 'success'
  },
  {
    title: '편안한 분위기',
    description: '퇴근 후 혹은 주말에 부담없이 같이 스터디할 수 있는 따뜻한 모임을 지향합니다.',
    icon: 'mdi-coffee',
    color: 'accent'
  }
]

const features = [
  {
    icon: 'mdi-code-tags',
    iconColor: 'primary',
    title: '다양한 기술',
    description: '프론트엔드부터 백엔드, 모바일까지 다양한 기술 스택을 함께 탐구합니다.'
  },
  {
    icon: 'mdi-lightbulb-on',
    iconColor: 'warning',
    title: '아이디어 공유',
    description: '개발 아이디어와 프로젝트를 자유롭게 공유하며 서로에게 영감을 주고받습니다.'
  },
  {
    icon: 'mdi-calendar-check',
    iconColor: 'info',
    title: '정기 모임',
    description: '매주 정기적인 모임을 통해 지속적인 학습 동기를 유지합니다.'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const onFeatureHover = (index) => {
  gsap.to(`.feature-${index + 1}`, {
    scale: 1.05,
    rotateY: 5,
    duration: 0.3,
    ease: "power2.out"
  })
}

const onFeatureLeave = (index) => {
  gsap.to(`.feature-${index + 1}`, {
    scale: 1,
    rotateY: 0,
    duration: 0.3,
    ease: "power2.out"
  })
}

onMounted(() => {
  // Section reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        
        // Animate messages
        gsap.fromTo('.message-card',
          { opacity: 0, y: 50, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.2, 
            ease: "power2.out" 
          }
        )
        
        // Animate features with delay
        gsap.fromTo('.feature-card',
          { opacity: 0, y: 30, rotateX: -15 },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: "power2.out",
            delay: 0.5
          }
        )
      }
    })
  }, { threshold: 0.2 })
  
  observer.observe(document.getElementById('introduce'))
})
</script>

<style scoped>
.introduce-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.introduce-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.5;
}

.section-header {
  position: relative;
  z-index: 2;
}

.section-header .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header .section-subtitle {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 300;
  line-height: 1.6;
}

.section-header .section-subtitle .highlight {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.messages-container .message-card {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  transition: all 0.4s ease;
}

.messages-container .message-card:hover {
  background: rgba(255, 255, 255, 0.9) !important;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.messages-container .message-card .message-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.messages-container .message-card .message-icon {
  flex-shrink: 0;
}

.messages-container .message-card .message-text {
  flex: 1;
}

.messages-container .message-card .message-text .message-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.messages-container .message-card .message-text .message-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  font-weight: 400;
}

.feature-grid {
  position: relative;
  z-index: 2;
}

.feature-grid .feature-col {
  perspective: 1000px;
}

.feature-grid .feature-card {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  transition: all 0.4s ease;
  height: 100%;
  transform-style: preserve-3d;
}

.feature-grid .feature-card:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.feature-grid .feature-card .feature-icon-container {
  margin-bottom: 2rem;
}

.feature-grid .feature-card .feature-icon-container .feature-background {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.feature-grid .feature-card .feature-icon-container .feature-background:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  transform: scale(1.1);
}

.feature-grid .feature-card .feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-grid .feature-card .feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.cta-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

.cta-card .cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-card .cta-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  font-weight: 300;
}

.cta-card .cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-card .cta-actions .v-btn {
  font-weight: 600;
  text-transform: none;
}

.cta-card .cta-actions .v-btn:hover {
  transform: translateY(-2px);
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.glass-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .introduce-section {
    padding: 4rem 0;
  }
  
  .messages-container .message-card .message-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-actions .mr-4 {
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
}
</style>