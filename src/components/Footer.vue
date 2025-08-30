<template>
  <v-footer class="footer-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="footer-brand">
            <h3 class="footer-title">9DEV</h3>
            <p class="footer-subtitle">개발자 스터디 그룹</p>
            <p class="footer-description">
              함께 성장하는 개발자들의 모임입니다.
              새로운 기술을 배우고 경험을 공유하며 
              더 나은 개발자가 되기 위해 노력합니다.
            </p>
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <div class="footer-links">
            <h4 class="footer-heading">빠른 링크</h4>
            <div class="link-list">
              <a href="#front" @click="scrollToSection('front')" class="footer-link">홈</a>
              <a href="#introduce" @click="scrollToSection('introduce')" class="footer-link">소개</a>
              <a href="#profile" @click="scrollToSection('profile')" class="footer-link">멤버</a>
              <a href="#information" @click="scrollToSection('information')" class="footer-link">정보</a>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="footer-contact">
            <h4 class="footer-heading">연락처</h4>
            <div class="contact-info">
              <p class="contact-item">
                <v-icon size="16" class="mr-2">mdi-email</v-icon>
                minho.yoo.dev@gmail.com
              </p>
              <p class="contact-item">
                <v-icon size="16" class="mr-2">mdi-calendar</v-icon>
                매주 토요일 오후 2시
              </p>
              <p class="contact-item">
                <v-icon size="16" class="mr-2">mdi-map-marker</v-icon>
                강남역 카페
              </p>
            </div>
            
            <div class="social-links mt-4">
              <v-btn
                icon
                color="white"
                class="mx-2"
                href="https://github.com/9dev-group"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                color="white"
                class="mx-2"
                href="mailto:minho.yoo.dev@gmail.com"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <v-divider class="footer-divider my-6"></v-divider>
      
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <p class="footer-copyright">
            © {{ currentYear }} 9DEV. All rights reserved.
            <span class="ml-4">Made with ❤️ by 9DEV Team</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
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
.footer-section {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 0 30px;
}

.footer-brand {
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-subtitle {
  font-size: 1.1rem;
  color: #bdc3c7;
  margin-bottom: 1rem;
  font-weight: 500;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #95a5a6;
  margin: 0;
}

.footer-heading {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ecf0f1;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: #FFD700;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  font-size: 0.9rem;
  color: #bdc3c7;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.social-links {
  display: flex;
  justify-content: flex-end;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  font-size: 0.8rem;
  color: #7f8c8d;
  margin: 0;
}

/* 반응형 디자인 */
@media (max-width: 960px) {
  .footer-title {
    font-size: 1.8rem;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-section {
    padding: 40px 0 20px;
  }
  
  .footer-title {
    font-size: 1.5rem;
  }
  
  .footer-subtitle {
    font-size: 1rem;
  }
  
  .footer-description {
    font-size: 0.8rem;
  }
  
  .footer-heading {
    font-size: 1.1rem;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
  
  .contact-item {
    font-size: 0.8rem;
  }
}
</style>
