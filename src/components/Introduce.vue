<template>
  <section class="introduce-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <div class="section-header">
            <h2 class="section-title">스터디 소개</h2>
            <p class="section-subtitle">함께 성장하는 개발자들의 모임</p>
          </div>
        </v-col>
      </v-row>
      
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="8" lg="6">
          <v-card class="introduce-card" elevation="8">
            <v-card-text class="text-center pa-8">
              <div class="introduce-content">
                <div class="feature-item" v-for="(message, index) in messages" :key="index">
                  <div class="feature-icon">
                    <v-icon size="48" color="primary">{{ getIcon(index) }}</v-icon>
                  </div>
                  <div class="feature-text">
                    <p>{{ message }}</p>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- 추가 정보 섹션 -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index">
              <v-card class="feature-card" elevation="4" hover>
                <v-card-text class="text-center pa-6">
                  <v-icon size="64" color="primary" class="mb-4">{{ feature.icon }}</v-icon>
                  <h3 class="feature-title">{{ feature.title }}</h3>
                  <p class="feature-description">{{ feature.description }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        '스터디의 공통 주제는 없습니다',
        '중요한 것은 개발자로서 성장하고 싶은 욕심인것 같습니다',
        '퇴근 후 혹은 주말에 부담없이 같이 스터디할 수 있는 모임을 지향하고 있습니다'
      ],
      features: [
        {
          icon: 'mdi-lightbulb-on',
          title: '자유로운 주제',
          description: '특정 기술이나 주제에 얽매이지 않고 각자의 관심사에 따라 자유롭게 스터디합니다.'
        },
        {
          icon: 'mdi-account-group',
          title: '함께 성장',
          description: '개발자로서의 성장을 위해 서로 도움을 주고받으며 함께 발전해 나갑니다.'
        },
        {
          icon: 'mdi-calendar-clock',
          title: '부담없는 모임',
          description: '퇴근 후나 주말에 부담없이 참여할 수 있는 편안한 분위기의 모임입니다.'
        }
      ]
    }
  },
  methods: {
    getIcon(index) {
      const icons = ['mdi-heart', 'mdi-rocket', 'mdi-coffee'];
      return icons[index] || 'mdi-star';
    }
  }
}
</script>

<style scoped>
.introduce-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 100px 0;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  font-weight: 300;
}

.introduce-card {
  border-radius: 20px;
  background: white;
  transition: transform 0.3s ease;
}

.introduce-card:hover {
  transform: translateY(-5px);
}

.introduce-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  transform: translateX(10px);
}

.feature-icon {
  flex-shrink: 0;
}

.feature-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;
  margin: 0;
  font-weight: 400;
}

.feature-card {
  border-radius: 15px;
  background: white;
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #7f8c8d;
  margin: 0;
}

/* 반응형 디자인 */
@media (max-width: 960px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
  }
}

@media (max-width: 600px) {
  .introduce-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .introduce-card {
    margin: 0 1rem;
  }
}
</style>
