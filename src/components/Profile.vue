<template>
  <section id="profile" class="profile-section section-reveal">
    <!-- Background Pattern -->
    <div class="section-background">
      <div class="pattern-overlay"></div>
    </div>
    
    <v-container class="section-container">
      <!-- Section Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <div class="section-header" ref="sectionHeader">
            <v-chip 
              color="accent" 
              variant="elevated" 
              size="small"
              class="mb-4"
            >
              <v-icon start icon="mdi-account-group" />
              Our Team
            </v-chip>
            <h2 class="section-title">스터디 멤버</h2>
            <p class="section-subtitle">
              다양한 <span class="highlight">전문성</span>을 가진 개발자들이 함께합니다
            </p>
          </div>
        </v-col>
      </v-row>
      
      <!-- Member Grid -->
      <v-row justify="center" class="members-grid">
        <v-col cols="12">
          <div class="profiles-container" ref="profilesContainer">
            <div 
              v-for="(profile, index) in shuffledProfiles" 
              :key="profile.name"
              class="profile-wrapper"
              :style="{ '--animation-delay': `${index * 0.1}s` }"
            >
              <Card :profile="profile" />
            </div>
          </div>
        </v-col>
      </v-row>
      
      <!-- Team Stats -->
      <v-row justify="center" class="mt-16">
        <v-col cols="12" lg="8">
          <v-card class="stats-card glass-card" elevation="0">
            <v-card-text class="pa-8">
              <h3 class="stats-title text-center mb-8">우리의 성과</h3>
              <v-row>
                <v-col 
                  cols="12" 
                  md="4" 
                  v-for="(stat, index) in stats" 
                  :key="index"
                  class="stat-col"
                >
                  <div class="stat-item" :class="`stat-${index + 1}`">
                    <div class="stat-icon-container">
                      <v-avatar 
                        size="64" 
                        :color="stat.color"
                        class="stat-avatar"
                      >
                        <v-icon :icon="stat.icon" color="white" size="32" />
                      </v-avatar>
                    </div>
                    <div class="stat-content">
                      <div class="stat-number" ref="statNumbers">{{ stat.number }}</div>
                      <div class="stat-label">{{ stat.label }}</div>
                      <div class="stat-description">{{ stat.description }}</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- Call to Action -->
      <v-row justify="center" class="mt-12">
        <v-col cols="12" class="text-center">
          <v-card class="join-cta glass-card" elevation="0">
            <v-card-text class="pa-8">
              <v-icon icon="mdi-hand-wave" size="48" color="accent" class="mb-4" />
              <h3 class="cta-title">우리와 함께하고 싶나요?</h3>
              <p class="cta-description">
                새로운 동료를 언제나 환영합니다
              </p>
              <v-btn
                size="large"
                color="accent"
                variant="elevated"
                @click="scrollToSection('information')"
                class="join-btn"
              >
                <v-icon start icon="mdi-plus" />
                참여하기
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import Card from './Card.vue'

const sectionHeader = ref(null)
const profilesContainer = ref(null)
const statNumbers = ref([])

const prodProfileImgPath = "https://raw.githubusercontent.com/9dev-group/9dev/master/src/assets/images/profiles/"

const profiles = [
  {
    name: "햇반a",
    profession: "웹 개발자",
    motto: "오늘도 취한드..",
    image: prodProfileImgPath + "hat.jpg"
  },
  {
    name: "여니",
    profession: "솔루션 개발자",
    motto: "딸기좋아❤️",
    image: prodProfileImgPath + "strawberry.jpg"
  },
  {
    name: "우저이",
    profession: "웹 개발자",
    motto: "오늘도 행복하게 :D",
    image: prodProfileImgPath + "woo.jpg"
  },
  {
    name: "강뚱",
    profession: "서버 개발자",
    motto: "뚱이를 좋아합니다",
    image: prodProfileImgPath + "patrick.jpg",
    link: "https://github.com/greatfarmer"
  },
  {
    name: "재연링",
    profession: "서버 개발자",
    motto: "한량 개발자가 되고 싶어요",
    image: prodProfileImgPath + "jaeyeonling.jpg",
    link: "https://github.com/jaeyeonling"
  },
  {
    name: "미노",
    profession: "프론트 개발자",
    motto: "네 그냥 상직적인거됴",
    image: prodProfileImgPath + "minho.jpg",
    link: "https://github.com/minhoyooDEV"
  },
  {
    name: "BEAN",
    profession: "안드로이드 개발자",
    motto: "파이팅~~",
    image: prodProfileImgPath + "bean.jpg",
    link: "https://github.com/sbean0215"
  },
  {
    name: "깡쏘",
    profession: "웹 개발자",
    motto: "blühen",
    image: prodProfileImgPath + "kangsso.jpg"
  },
  {
    name: "Hooni",
    profession: "웹 개발자",
    motto: "행복을 찾아서...",
    image: prodProfileImgPath + "hooni.jpg"
  },
  {
    name: "JY",
    profession: "군인",
    motto: "짱짱 멋있는 육군입니다",
    image: prodProfileImgPath + "army.jpg"
  },
  {
    name: "hongmo",
    profession: "웹 개발자",
    motto: "si 노예",
    image: prodProfileImgPath + "hongmo.jpg"
  },
  {
    name: "100song",
    profession: "웹 개발자",
    motto: "짱짱 멋있는 개발자입니다",
    image: prodProfileImgPath + "100song.jpg"
  }
]

const shuffledProfiles = computed(() => {
  return [...profiles].sort(() => Math.random() - 0.5)
})

const stats = [
  {
    icon: 'mdi-account-multiple',
    number: profiles.length,
    label: '활성 멤버',
    description: '함께하는 개발자',
    color: 'primary'
  },
  {
    icon: 'mdi-code-braces',
    number: '8+',
    label: '개발 분야',
    description: '다양한 전문성',
    color: 'success'
  },
  {
    icon: 'mdi-calendar-check',
    number: '5년+',
    label: '스터디 경험',
    description: '지속적인 성장',
    color: 'info'
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

onMounted(() => {
  // Section reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        
        // Animate profile cards
        gsap.fromTo('.profile-wrapper',
          { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotateY: 0,
            duration: 0.8, 
            stagger: 0.1, 
            ease: "power2.out" 
          }
        )
        
        // Animate stats with counter effect
        gsap.fromTo('.stat-item',
          { opacity: 0, y: 30, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.2, 
            ease: "back.out(1.7)",
            delay: 0.5
          }
        )
        
        // Number counting animation
        stats.forEach((stat, index) => {
          if (typeof stat.number === 'number') {
            gsap.fromTo(`.stat-${index + 1} .stat-number`, 
              { textContent: 0 },
              { 
                textContent: stat.number,
                duration: 2,
                delay: 1 + index * 0.2,
                ease: "power2.out",
                snap: { textContent: 1 }
              }
            )
          }
        })
      }
    })
  }, { threshold: 0.2 })
  
  observer.observe(document.getElementById('profile'))
})
</script>

<style scoped>

.profile-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  .pattern-overlay {
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z'/%3E%3C/g%3E%3C/svg%3E") repeat;
  }
}

.section-container {
  position: relative;
  z-index: 2;
}

.section-header {
  .section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    font-weight: 300;
    line-height: 1.6;
    
    .highlight {
      background: linear-gradient(45deg, #FFD700, #FFA500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }
  }
}

.profiles-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  .profile-wrapper {
    perspective: 1000px;
    opacity: 0;
    transform: translateY(50px) scale(0.8) rotateY(-15deg);
    animation: profileReveal 0.8s ease forwards var(--animation-delay);
  }
}

.stats-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: white;
  
  .stats-title {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .stat-col {
    perspective: 500px;
  }
  
  .stat-item {
    text-align: center;
    padding: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      
      .stat-avatar {
        transform: scale(1.1) rotateY(15deg);
      }
    }
    
    .stat-icon-container {
      margin-bottom: 1.5rem;
      
      .stat-avatar {
        background: rgba(255, 255, 255, 0.2) !important;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
      }
    }
    
    .stat-content {
      .stat-number {
        font-size: 2.5rem;
        font-weight: 900;
        color: #FFD700;
        margin-bottom: 0.5rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .stat-label {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        opacity: 0.95;
      }
      
      .stat-description {
        font-size: 0.9rem;
        opacity: 0.8;
        font-weight: 300;
      }
    }
  }
}

.join-cta {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: white;
  text-align: center;
  
  .cta-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .cta-description {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  
  .join-btn {
    font-weight: 600;
    text-transform: none;
    
    &:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes profileReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateY(0);
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profiles-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .stats-card .stat-item .stat-content .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .profiles-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stats-card {
    margin: 0 1rem;
  }
  
  .stats-card .stat-item .stat-content .stat-number {
    font-size: 1.8rem;
  }
}
</style>
