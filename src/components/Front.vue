<template>
  <section id="hero" class="hero-section section-reveal">
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="animated-shapes">
        <div 
          v-for="i in 8" 
          :key="i"
          class="shape"
          :class="`shape-${i}`"
        />
      </div>
      <div class="gradient-overlay" />
    </div>
    
    <v-container fluid class="hero-container">
      <v-row align="center" justify="center" class="hero-row">
        <!-- Hero Content -->
        <v-col cols="12" lg="6" class="hero-content-col">
          <div class="hero-content" ref="heroContent">
            <!-- Main Title with Typing Effect -->
            <div class="hero-title-container">
              <h1 class="hero-title">
                <span class="gradient-text" ref="brandTitle">9DEV</span>
                <v-chip 
                  color="primary" 
                  variant="elevated"
                  class="hero-chip"
                  size="small"
                >
                  개발스터디
                </v-chip>
              </h1>
            </div>
            
            <!-- Animated Description -->
            <div class="hero-description-container">
              <p class="hero-description" ref="description">
                개발자로서 <span class="highlight">함께 성장</span>하는 공간
              </p>
              <p class="hero-subdescription">
                부담없이 스터디할 수 있는 따뜻한 모임
              </p>
            </div>
            
            <!-- Modern CTA Buttons -->
            <div class="hero-actions" ref="heroActions">
              <v-btn
                size="large"
                color="primary"
                variant="elevated"
                class="cta-primary"
                @click="scrollToSection('introduce')"
                :ripple="{ class: 'text-white' }"
              >
                <v-icon start icon="mdi-rocket-launch" />
                스터디 시작하기
              </v-btn>
              
              <v-btn
                size="large"
                variant="outlined"
                color="white"
                class="cta-secondary ml-4"
                @click="scrollToSection('profile')"
              >
                <v-icon start icon="mdi-account-group" />
                멤버 만나기
              </v-btn>
            </div>
            
            <!-- Stats Cards -->
            <div class="stats-container" ref="statsContainer">
              <v-card
                v-for="stat in stats"
                :key="stat.label"
                class="stat-card glass-card"
                elevation="0"
              >
                <v-card-text class="pa-4 text-center">
                  <div class="stat-icon">
                    <v-icon :icon="stat.icon" color="primary" size="28" />
                  </div>
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
        
        <!-- Hero Image/Animation -->
        <v-col cols="12" lg="6" class="hero-image-col">
          <div class="hero-visual" ref="heroVisual">
            <!-- Main Logo -->
            <div class="logo-container">
              <img 
                :src="logoUrl" 
                alt="9DEV Logo" 
                class="hero-logo"
                @load="onLogoLoad"
              />
              
              <!-- Floating Tech Icons -->
              <div class="floating-icons">
                <div 
                  v-for="(tech, index) in techIcons" 
                  :key="tech.name"
                  class="floating-icon"
                  :style="{ 
                    '--delay': `${index * 0.2}s`,
                    '--position-x': `${tech.x}%`,
                    '--position-y': `${tech.y}%`
                  }"
                >
                  <v-avatar 
                    size="48" 
                    :color="tech.color"
                    class="tech-avatar"
                  >
                    <v-icon :icon="tech.icon" color="white" size="24" />
                  </v-avatar>
                </div>
              </div>
            </div>
            
            <!-- Interactive Elements -->
            <div class="interactive-elements">
              <div class="code-snippet glass-card">
                <div class="code-header">
                  <div class="code-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="code-title">study.js</div>
                </div>
                <div class="code-content">
                  <pre><code>const study = {
  name: "9DEV",
  goal: "성장",
  members: "∞"
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Enhanced Scroll Indicator -->
    <div class="scroll-indicator" @click="scrollToSection('introduce')">
      <div class="scroll-text">스크롤하여 더 알아보기</div>
      <div class="scroll-arrow">
        <v-icon icon="mdi-arrow-down" size="24" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroContent = ref(null)
const brandTitle = ref(null)
const description = ref(null)
const heroActions = ref(null)
const statsContainer = ref(null)
const heroVisual = ref(null)

const logoUrl = 'https://raw.githubusercontent.com/9dev-group/9dev/master/src/assets/images/logo/Logo_01.png'

const stats = [
  { icon: 'mdi-account-multiple', value: '50+', label: '멤버' },
  { icon: 'mdi-book-open', value: '100+', label: '스터디' },
  { icon: 'mdi-trophy', value: '5년+', label: '경험' }
]

const techIcons = [
  { name: 'Vue', icon: 'mdi-vuejs', color: '#4FC08D', x: 15, y: 20 },
  { name: 'React', icon: 'mdi-react', color: '#61DAFB', x: 85, y: 15 },
  { name: 'Node', icon: 'mdi-nodejs', color: '#68A063', x: 20, y: 75 },
  { name: 'Python', icon: 'mdi-language-python', color: '#3776AB', x: 80, y: 70 },
  { name: 'Git', icon: 'mdi-git', color: '#F05032', x: 50, y: 10 },
  { name: 'Database', icon: 'mdi-database', color: '#336791', x: 10, y: 50 }
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

const onLogoLoad = () => {
  // Animate logo entrance
  gsap.fromTo('.hero-logo', 
    { scale: 0, rotation: -180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
  )
}

onMounted(() => {
  // Hero entrance animations
  const tl = gsap.timeline()
  
  tl.fromTo(brandTitle.value,
    { opacity: 0, y: 50, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(description.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.5"
  )
  .fromTo(heroActions.value.children,
    { opacity: 0, y: 20, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    "-=0.4"
  )
  .fromTo(statsContainer.value.children,
    { opacity: 0, y: 30, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
    "-=0.2"
  )
  
  // Floating tech icons animation
  gsap.fromTo('.floating-icon',
    { opacity: 0, scale: 0, rotation: -180 },
    { 
      opacity: 1, 
      scale: 1, 
      rotation: 0, 
      duration: 1, 
      stagger: 0.2, 
      ease: "back.out(1.7)",
      delay: 1
    }
  )
  
  // Continuous floating animation
  gsap.to('.floating-icon', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.1
  })
  
  // Animated background shapes
  gsap.to('.shape', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
    stagger: 2
  })
})
</script>

<style scoped>

.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  .animated-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      
      &.shape-1 { width: 80px; height: 80px; top: 10%; left: 10%; }
      &.shape-2 { width: 120px; height: 120px; top: 20%; right: 15%; }
      &.shape-3 { width: 60px; height: 60px; top: 60%; left: 5%; }
      &.shape-4 { width: 100px; height: 100px; bottom: 30%; right: 10%; }
      &.shape-5 { width: 40px; height: 40px; bottom: 20%; left: 20%; }
      &.shape-6 { width: 70px; height: 70px; top: 70%; left: 60%; }
      &.shape-7 { width: 90px; height: 90px; top: 40%; right: 30%; }
      &.shape-8 { width: 110px; height: 110px; bottom: 10%; left: 50%; }
    }
  }
  
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.9) 0%, 
      rgba(118, 75, 162, 0.9) 100%);
  }
}

.hero-container {
  position: relative;
  z-index: 2;
  padding: 2rem 1rem;
}

.hero-row {
  min-height: 80vh;
  align-items: center;
}

.hero-content {
  color: white;
  
  .hero-title-container {
    margin-bottom: 2rem;
    
    .hero-title {
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .gradient-text {
      background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 3s ease-in-out infinite;
    }
    
    .hero-chip {
      font-weight: 500;
    }
  }
  
  .hero-description-container {
    margin-bottom: 3rem;
    
    .hero-description {
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      line-height: 1.6;
      margin-bottom: 1rem;
      font-weight: 500;
      
      .highlight {
        background: linear-gradient(45deg, #FFD700, #FFA500);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }
    }
    
    .hero-subdescription {
      font-size: 1.1rem;
      opacity: 0.9;
      font-weight: 300;
    }
  }
  
  .hero-actions {
    margin-bottom: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    .cta-primary {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
      color: white !important;
      font-weight: 600;
      text-transform: none;
      letter-spacing: 0.5px;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
    }
    
    .cta-secondary {
      font-weight: 600;
      text-transform: none;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.1) !important;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
      }
    }
  }
  
  .stats-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    .stat-card {
      background: rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      min-width: 100px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.25) !important;
        transform: translateY(-5px);
      }
      
      .stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: #FFD700;
      }
      
      .stat-label {
        font-size: 0.9rem;
        opacity: 0.9;
      }
    }
  }
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .logo-container {
    position: relative;
    
    .hero-logo {
      width: 100%;
      max-width: 400px;
      height: auto;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05) rotate(5deg);
      }
    }
    
    .floating-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      
      .floating-icon {
        position: absolute;
        left: var(--position-x);
        top: var(--position-y);
        transform: translate(-50%, -50%);
        
        .tech-avatar {
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          
          &:hover {
            transform: scale(1.2);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
  
  .interactive-elements {
    position: absolute;
    bottom: -50px;
    right: -50px;
    
    .code-snippet {
      background: rgba(0, 0, 0, 0.8) !important;
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 0;
      min-width: 250px;
      color: white;
      
      .code-header {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        
        .code-dots {
          display: flex;
          gap: 0.5rem;
          
          span {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            
            &:nth-child(1) { background: #ff5f56; }
            &:nth-child(2) { background: #ffbd2e; }
            &:nth-child(3) { background: #27ca3f; }
          }
        }
        
        .code-title {
          margin-left: 1rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
      
      .code-content {
        padding: 1rem;
        
        pre {
          margin: 0;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          
          code {
            color: #61dafb;
          }
        }
      }
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  text-align: center;
  color: white;
  z-index: 3;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-50%) translateY(-5px);
  }
  
  .scroll-text {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }
  
  .scroll-arrow {
    animation: bounce 2s infinite;
  }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-actions {
    justify-content: center;
  }
  
  .stats-container {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-row {
    text-align: center;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .hero-actions .cta-secondary {
    margin-left: 0 !important;
  }
  
  .stats-container {
    justify-content: center;
    gap: 0.5rem;
  }
  
  .stats-container .stat-card {
    flex: 1;
    min-width: auto;
  }
  
  .interactive-elements .code-snippet {
    position: static;
    margin-top: 2rem;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}
</style>
