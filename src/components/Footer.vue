<template>
  <v-footer class="footer-section">
    <!-- Footer Background -->
    <div class="footer-background">
      <div class="wave-pattern"></div>
    </div>
    
    <v-container class="footer-container">
      <!-- Main Footer Content -->
      <v-row class="main-footer">
        <!-- Brand Section -->
        <v-col cols="12" lg="4" class="text-center text-lg-left">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="brand-text">9DEV</span>
              <v-chip 
                size="small" 
                color="accent" 
                variant="elevated"
                class="ml-2"
              >
                개발스터디
              </v-chip>
            </div>
            <p class="brand-description">
              함께 성장하는 개발자들의 특별한 모임입니다.
              새로운 기술을 배우고 경험을 공유하며 
              더 나은 개발자가 되기 위해 노력합니다.
            </p>
            
            <!-- Social Links -->
            <div class="social-section">
              <h5 class="social-title">Follow Us</h5>
              <div class="social-links">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  icon
                  :color="social.color"
                  variant="outlined"
                  size="large"
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn"
                >
                  <v-icon :icon="social.icon" />
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
        
        <!-- Quick Links -->
        <v-col cols="12" md="6" lg="4" class="text-center">
          <div class="footer-section-content">
            <h4 class="footer-heading">빠른 링크</h4>
            <div class="link-grid">
              <a 
                v-for="link in quickLinks"
                :key="link.id"
                @click="scrollToSection(link.id)"
                class="footer-link"
              >
                <v-icon :icon="link.icon" size="16" class="mr-2" />
                {{ link.title }}
              </a>
            </div>
          </div>
        </v-col>
        
        <!-- Contact Info -->
        <v-col cols="12" md="6" lg="4" class="text-center text-lg-right">
          <div class="footer-section-content">
            <h4 class="footer-heading">연락처</h4>
            <div class="contact-info">
              <div 
                v-for="contact in contactInfo"
                :key="contact.type"
                class="contact-item"
              >
                <v-icon :icon="contact.icon" size="18" :color="contact.color" class="mr-3" />
                <div class="contact-details">
                  <span class="contact-label">{{ contact.label }}</span>
                  <span class="contact-value">{{ contact.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <!-- Footer Bottom -->
      <v-divider class="footer-divider my-8" color="rgba(255,255,255,0.1)" />
      
      <v-row align="center" justify="space-between" class="footer-bottom">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <p class="footer-copyright">
            © {{ currentYear }} 9DEV. All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <p class="footer-made-with">
            Made with 
            <v-icon icon="mdi-heart" color="red" size="16" class="mx-1" />
            by 9DEV Team
          </p>
        </v-col>
      </v-row>
      
      <!-- Back to Top -->
      <div class="back-to-top">
        <v-btn
          icon
          color="accent"
          variant="elevated"
          size="large"
          @click="scrollToTop"
          class="top-btn"
        >
          <v-icon icon="mdi-arrow-up" />
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { id: 'front', title: '홈', icon: 'mdi-home' },
  { id: 'introduce', title: '소개', icon: 'mdi-information' },
  { id: 'profile', title: '멤버', icon: 'mdi-account-group' },
  { id: 'information', title: '정보', icon: 'mdi-map-marker' }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'mdi-github',
    link: 'https://github.com/9dev-group',
    color: 'white'
  },
  {
    name: 'Email',
    icon: 'mdi-email',
    link: 'mailto:minho.yoo.dev@gmail.com',
    color: 'white'
  }
]

const contactInfo = [
  {
    type: 'email',
    icon: 'mdi-email',
    label: '이메일',
    value: 'minho.yoo.dev@gmail.com',
    color: 'accent'
  },
  {
    type: 'schedule',
    icon: 'mdi-calendar',
    label: '일정',
    value: '매주 토요일 오후 2시',
    color: 'success'
  },
  {
    type: 'location',
    icon: 'mdi-map-marker',
    label: '장소',
    value: '강남역 카페',
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

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
}
</script>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.wave-pattern {
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30s-30-13.431-30-30 13.431-30 30-30 30 13.431 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
}

.footer-container {
  position: relative;
  z-index: 2;
}

.main-footer {
  margin-bottom: 2rem;
}

.footer-brand .brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.footer-brand .brand-logo .brand-text {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

.footer-brand .brand-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 300;
}

.footer-brand .social-section .social-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.footer-brand .social-section .social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.footer-brand .social-section .social-links .social-btn {
  transition: all 0.3s ease;
  border-color: rgba(255, 255, 255, 0.3);
}

.footer-brand .social-section .social-links .social-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
}

.footer-section-content .footer-heading {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
}

.footer-section-content .link-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-section-content .link-grid .footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 12px;
}

.footer-section-content .link-grid .footer-link:hover {
  color: #FFD700;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.footer-section-content .contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-section-content .contact-info .contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.footer-section-content .contact-info .contact-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-5px);
}

.footer-section-content .contact-info .contact-item .contact-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-section-content .contact-info .contact-item .contact-details .contact-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-section-content .contact-info .contact-item .contact-details .contact-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.footer-bottom .footer-copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 300;
}

.footer-bottom .footer-made-with {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top {
  position: absolute;
  top: -2rem;
  right: 2rem;
}

.back-to-top .top-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
  color: white !important;
}

.back-to-top .top-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 0 1.5rem;
  }
  
  .main-footer {
    text-align: center;
  }
  
  .footer-section-content .link-grid .footer-link,
  .footer-section-content .contact-info .contact-item {
    justify-content: center;
  }
  
  .back-to-top {
    position: static;
    text-align: center;
    margin-top: 2rem;
  }
}

@media (min-width: 768px) {
  .footer-section-content .link-grid .footer-link {
    justify-content: flex-start;
  }
  
  .footer-bottom .footer-made-with {
    justify-content: flex-end;
  }
}

@media (min-width: 1024px) {
  .footer-brand .brand-logo {
    justify-content: flex-start;
  }
  
  .footer-brand .social-section .social-links {
    justify-content: flex-start;
  }
  
  .footer-section-content .link-grid .footer-link {
    justify-content: flex-end;
  }
  
  .footer-section-content .contact-info .contact-item {
    justify-content: flex-end;
  }
}
</style>