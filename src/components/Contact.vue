<template>
  <v-card class="contact-card" elevation="8" hover>
    <v-card-title class="card-title">
      <v-icon size="32" color="primary" class="mr-3">mdi-email</v-icon>
      <span class="title-text">연락처</span>
    </v-card-title>
    
    <v-card-text class="contact-content pa-6">
      <div class="contact-header">
        <h3 class="contact-title">9DEV와 함께하고 싶다면</h3>
        <p class="contact-subtitle">연락주세요!</p>
      </div>
      
      <div class="contact-methods">
        <div class="contact-method" v-for="(method, index) in contactMethods" :key="index">
          <div class="method-icon">
            <v-icon size="32" color="primary">{{ method.icon }}</v-icon>
          </div>
          <div class="method-info">
            <h4 class="method-title">{{ method.title }}</h4>
            <p class="method-value">{{ method.value }}</p>
          </div>
          <div class="method-action">
            <v-btn
              small
              color="primary"
              :href="method.link"
              target="_blank"
              v-if="method.link"
            >
              <v-icon left size="16">{{ method.actionIcon }}</v-icon>
              {{ method.actionText }}
            </v-btn>
          </div>
        </div>
      </div>
      
      <div class="contact-note">
        <v-alert
          type="info"
          border="left"
          colored-border
          elevation="2"
        >
          <div class="d-flex align-center">
            <v-icon class="mr-3">mdi-information</v-icon>
            <div>
              <strong>참여 방법</strong>
              <p class="mb-0 mt-1">개발에 관심이 있으시다면 언제든 연락주세요. 
              새로운 멤버를 항상 환영합니다!</p>
            </div>
          </div>
        </v-alert>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const contactMethods = [
  {
    icon: 'mdi-email',
    title: '이메일',
    value: 'minho.yoo.dev@gmail.com',
    link: 'mailto:minho.yoo.dev@gmail.com',
    actionIcon: 'mdi-email-send',
    actionText: '메일 보내기',
    color: 'primary'
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: 'github.com/9dev-group',
    link: 'https://github.com/9dev-group',
    actionIcon: 'mdi-open-in-new',
    actionText: '방문하기',
    color: 'info'
  },
  {
    icon: 'mdi-calendar-clock',
    title: '모임 시간',
    value: '매주 토요일 오후 2시 - 6시',
    link: null,
    actionIcon: null,
    actionText: null,
    color: 'success'
  }
]
</script>

<style scoped>
.contact-card {
  border-radius: 20px;
  background: white;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
}

.title-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.contact-content {
  background: white;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 0;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  transform: translateX(10px);
}

.method-icon {
  flex-shrink: 0;
  margin-right: 1rem;
}

.method-info {
  flex: 1;
}

.method-title {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.method-value {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
  word-break: break-all;
}

.method-action {
  flex-shrink: 0;
}

.contact-note {
  margin-top: 2rem;
}

/* 반응형 디자인 */
@media (max-width: 600px) {
  .title-text {
    font-size: 1.3rem;
  }
  
  .contact-title {
    font-size: 1.3rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .method-icon {
    margin-right: 0;
  }
  
  .contact-method:hover {
    transform: translateY(-5px);
  }
}
</style>