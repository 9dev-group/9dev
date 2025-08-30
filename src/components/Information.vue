<template>
  <section id="information" class="information-section section-reveal">
    <v-container>
      <!-- Section Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <div class="section-header">
            <v-chip 
              color="info" 
              variant="elevated" 
              size="small"
              class="mb-4"
            >
              <v-icon start icon="mdi-information" />
              Information
            </v-chip>
            <h2 class="section-title">스터디 정보</h2>
            <p class="section-subtitle">
              모임 장소와 <span class="highlight">연락처</span> 안내
            </p>
          </div>
        </v-col>
      </v-row>
      
      <!-- Main Content Cards -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" lg="10">
          <v-row>
            <v-col cols="12" lg="6" class="mb-6">
              <Location />
            </v-col>
            <v-col cols="12" lg="6" class="mb-6">
              <Contact />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- Additional Info Cards -->
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-row>
            <v-col 
              cols="12" 
              md="4" 
              v-for="(info, index) in additionalInfo" 
              :key="index"
              class="info-col"
            >
              <v-card 
                class="info-card modern-card" 
                elevation="0"
                :class="`info-${index + 1}`"
              >
                <v-card-text class="text-center pa-8">
                  <div class="info-image-container d-flex justify-center">
                    <v-img
                      :src="info.image"
                      :alt="info.title"
                      width="200"
                      height="150"
                      cover
                      class="info-image rounded-lg elevation-4"
                    />
                  </div>
                  <h3 class="info-title">{{ info.title }}</h3>
                  <p class="info-description">{{ info.description }}</p>
                  
                  <v-btn
                    v-if="info.action"
                    variant="text"
                    color="primary"
                    size="small"
                    class="mt-4"
                    @click="info.action"
                  >
                    <v-icon start :icon="info.actionIcon" />
                    {{ info.actionText }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import Location from './Location.vue'
import Contact from './Contact.vue'

const additionalInfo = [
  {
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=300&fit=crop',
    title: '모임 일정',
    description: '매주 토·일요일 중 편한 시간에 정기적인 스터디 모임을 진행합니다.',
    color: 'primary',
    actionIcon: 'mdi-calendar-check',
    actionText: '일정 확인',
    action: () => {
      window.open('https://calendar.google.com', '_blank')
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    title: '모임 방식',
    description: '강남역 근처 카페에서 편안하고 자유로운 분위기로 스터디를 진행합니다.',
    color: 'success',
    actionIcon: 'mdi-map-marker-radius',
    actionText: '위치 보기',
    action: () => {
      const element = document.querySelector('.location-card')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    title: '신규 멤버',
    description: '개발에 관심 있는 분들은 언제든 환영합니다. 부담없이 연락주세요!',
    color: 'info',
    actionIcon: 'mdi-email-outline',
    actionText: '연락하기',
    action: () => {
      window.open('mailto:9dev.study@gmail.com', '_blank')
    }
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        
        gsap.fromTo('.info-card',
          { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotateX: 0,
            duration: 0.8, 
            stagger: 0.2, 
            ease: "power2.out",
            delay: 0.3
          }
        )
      }
    })
  }, { threshold: 0.2 })
  
  observer.observe(document.getElementById('information'))
})
</script>

<style scoped>

.information-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
}

.section-header {
  position: relative;
  z-index: 2;
  
  .section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 300;
    line-height: 1.6;
    
    .highlight {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }
  }
}

.info-col {
  perspective: 1000px;
}

.info-card {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  transition: all 0.4s ease;
  height: 100%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.95) !important;
    transform: translateY(-10px) rotateY(5deg);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
  
  .info-icon-container {
    margin-bottom: 2rem;
    
    .info-avatar {
      background: rgba(255, 255, 255, 0.2) !important;
      backdrop-filter: blur(10px);
      border: 3px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1) rotateY(15deg);
      }
    }
  }
  
  .info-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .info-description {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .information-section {
    padding: 4rem 0;
  }
}

</style>