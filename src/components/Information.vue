<template>
  <section class="information-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <div class="section-header">
            <h2 class="section-title">스터디 정보</h2>
            <p class="section-subtitle">모임 장소와 연락처</p>
          </div>
        </v-col>
      </v-row>
      
      <v-row justify="center" class="mt-8">
        <v-col cols="12" lg="10">
          <v-row>
            <v-col cols="12" md="6" class="mb-6">
              <Location />
            </v-col>
            <v-col cols="12" md="6" class="mb-6">
              <Contact />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- 추가 정보 카드 -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="8">
          <v-card class="info-card" elevation="8">
            <v-card-text class="pa-8">
              <v-row>
                <v-col cols="12" md="4" v-for="(info, index) in additionalInfo" :key="index">
                  <div class="info-item text-center">
                    <v-icon size="48" color="primary" class="mb-4">{{ info.icon }}</v-icon>
                    <h3 class="info-title">{{ info.title }}</h3>
                    <p class="info-description">{{ info.description }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Location from './Location.vue';
import Contact from './Contact.vue';

export default {
  components: {
    Location,
    Contact
  },
  data() {
    return {
      additionalInfo: [
        {
          icon: 'mdi-calendar-multiple',
          title: '모임 일정',
          description: '매주 토요일 오후 2시부터 6시까지 정기 모임'
        },
        {
          icon: 'mdi-coffee',
          title: '모임 방식',
          description: '카페에서 편안한 분위기로 스터디 진행'
        },
        {
          icon: 'mdi-account-plus',
          title: '신규 멤버',
          description: '개발에 관심 있는 분들은 언제든 환영합니다'
        }
      ]
    }
  }
}
</script>

<style scoped>
.information-section {
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

.info-card {
  border-radius: 20px;
  background: white;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-item {
  padding: 1rem;
}

.info-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.info-description {
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
}

@media (max-width: 600px) {
  .information-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .info-title {
    font-size: 1.2rem;
  }
  
  .info-description {
    font-size: 0.9rem;
  }
}
</style>