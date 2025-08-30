<template>
  <section class="profile-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <div class="section-header">
            <h2 class="section-title">스터디 멤버</h2>
            <p class="section-subtitle">함께 성장하는 개발자들</p>
          </div>
        </v-col>
      </v-row>
      
      <v-row justify="center" class="mt-8">
        <v-col cols="12">
          <v-row>
            <v-col 
              cols="12" 
              sm="6" 
              md="4" 
              lg="3" 
              v-for="(item, index) in profiles" 
              :key="index"
              class="profile-col"
            >
              <Card :profile="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- 통계 섹션 -->
      <v-row justify="center" class="mt-12">
        <v-col cols="12" md="8">
          <v-card class="stats-card" elevation="4">
            <v-card-text class="text-center pa-8">
              <v-row>
                <v-col cols="12" md="4" v-for="(stat, index) in stats" :key="index">
                  <div class="stat-item">
                    <v-icon size="48" color="primary" class="mb-3">{{ stat.icon }}</v-icon>
                    <h3 class="stat-number">{{ stat.number }}</h3>
                    <p class="stat-label">{{ stat.label }}</p>
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
import Card from './Card.vue';

var _ = require('lodash');

const prodProfileImgPath = "https://raw.githubusercontent.com/9dev-group/9dev/master/src/assets/images/profiles/";
const devProfileImgPath = "src/assets/images/profiles/";

const profiles = [
  {
    "name": "햇반a",
    "profession": "웹 개발자",
    "motto": "오늘도 취한드..",
    "image": prodProfileImgPath + "hat.jpg"
  },
  {
    "name": "여니",
    "profession": "솔루션 개발자",
    "motto": "딸기좋아❤️",
    "image": prodProfileImgPath + "strawberry.jpg"
  },
  {
    "name": "우저이",
    "profession": "웹 개발자",
    "motto": "오늘도 행복하게 :D",
    "image": prodProfileImgPath + "woo.jpg"
  },
  {
    "name": "강뚱",
    "profession": "웹 개발자",
    "motto": "뚱이를 좋아합니다",
    "image": prodProfileImgPath + "patrick.jpg",
    "link": "https://github.com/greatfarmer"
  },
  {
    "name": "재연링",
    "profession": "서버 개발자",
    "motto": "한량 개발자가 되고 싶어요",
    "image": prodProfileImgPath + "jaeyeonling.jpg",
    "link": "https://github.com/jaeyeonling"
  },
  {
    "name": "미노",
    "profession": "프론트 개발자",
    "motto": "네 그냥 상직적인거됴",
    "image": prodProfileImgPath + "minho.jpg",
    "link": "https://github.com/minhoyooDEV"
  },
  {
    "name": "BEAN",
    "profession": "안드로이드 개발자",
    "motto": "파이팅~~",
    "image": prodProfileImgPath + "bean.jpg",
    "link": "https://github.com/sbean0215"
  },
  {
    "name": "깡쏘",
    "profession": "웹 개발자",
    "motto": "blühen",
    "image": prodProfileImgPath + "kangsso.jpg"
  },
  {
    "name": "Hooni",
    "profession": "웹 개발자",
    "motto": "행복을 찾아서...",
    "image": prodProfileImgPath + "hooni.jpg"
  },
  {
    "name": "JY",
    "profession": "군인",
    "motto": "짱짱 멋있는 육군입니다",
    "image": prodProfileImgPath + "army.jpg"
  },
  {
    "name": "hongmo",
    "profession": "웹 개발자",
    "motto": "si 노예",
    "image": prodProfileImgPath + "hongmo.jpg"
  },
  {
    "name": "100song",
    "profession": "웹 개발자",
    "motto": "짱짱 멋있는 개발자입니다",
    "image": prodProfileImgPath + "100song.jpg"
  },
];

export default {
  created: function() {
    this.profiles = _.shuffle(this.profiles);
  },
  data () {
    return {
      profiles,
      stats: [
        {
          icon: 'mdi-account-group',
          number: profiles.length,
          label: '활성 멤버'
        },
        {
          icon: 'mdi-code-braces',
          number: '5+',
          label: '개발 분야'
        },
        {
          icon: 'mdi-calendar-check',
          number: '2년+',
          label: '스터디 기간'
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.profile-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  color: white;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  font-weight: 300;
}

.profile-col {
  margin-bottom: 2rem;
}

.stats-card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  margin: 0.5rem 0;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
}

/* 반응형 디자인 */
@media (max-width: 960px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .profile-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
}
</style>
