<template>
  <section id="dashboard" class="dashboard-section section-reveal">
    <v-container class="dashboard-container">
      <!-- Section Header -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <div class="section-header" ref="sectionHeader">
            <v-chip
              color="success"
              variant="elevated"
              size="small"
              class="mb-4"
            >
              <v-icon start icon="mdi-view-dashboard" />
              Dashboard
            </v-chip>
            <h2 class="section-title">9DEV 대시보드</h2>
            <p class="section-subtitle">
              멤버들의 <span class="highlight">성장</span>과 <span class="highlight">활동</span>을 한눈에
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Statistics Cards -->
      <v-row class="mb-8">
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(stat, index) in mainStats"
          :key="index"
        >
          <v-card
            class="stat-card modern-card"
            elevation="0"
            :class="`stat-card-${index + 1}`"
          >
            <v-card-text class="pa-6">
              <div class="d-flex align-center mb-3">
                <v-avatar
                  :color="stat.color"
                  size="48"
                  class="stat-icon"
                >
                  <v-icon :icon="stat.icon" color="white" size="24" />
                </v-avatar>
                <div class="ml-auto">
                  <v-chip
                    :color="stat.trendColor"
                    size="small"
                    variant="flat"
                  >
                    <v-icon start :icon="stat.trendIcon" size="16" />
                    {{ stat.trend }}
                  </v-chip>
                </div>
              </div>
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Activity & Tech Stack -->
      <v-row class="mb-8">
        <!-- Recent Activities -->
        <v-col cols="12" md="6">
          <v-card class="activity-card modern-card" elevation="0">
            <v-card-title class="card-title">
              <v-icon icon="mdi-history" class="mr-2" color="primary" />
              최근 활동
            </v-card-title>
            <v-card-text>
              <v-timeline
                side="end"
                align="start"
                density="compact"
                class="activity-timeline"
              >
                <v-timeline-item
                  v-for="(activity, index) in recentActivities"
                  :key="index"
                  :dot-color="activity.color"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon :icon="activity.icon" size="16" />
                  </template>
                  <div class="activity-item">
                    <div class="activity-title">{{ activity.title }}</div>
                    <div class="activity-meta">
                      <span class="activity-user">{{ activity.user }}</span>
                      <span class="activity-time">{{ activity.time }}</span>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Tech Stack Distribution -->
        <v-col cols="12" md="6">
          <v-card class="tech-card modern-card" elevation="0">
            <v-card-title class="card-title">
              <v-icon icon="mdi-code-tags" class="mr-2" color="primary" />
              기술 스택 분포
            </v-card-title>
            <v-card-text>
              <div
                v-for="(tech, index) in techStack"
                :key="index"
                class="tech-item mb-4"
              >
                <div class="d-flex justify-space-between mb-2">
                  <div class="tech-name">
                    <v-icon :icon="tech.icon" :color="tech.color" size="20" class="mr-2" />
                    {{ tech.name }}
                  </div>
                  <div class="tech-count">{{ tech.count }}명</div>
                </div>
                <v-progress-linear
                  :model-value="tech.percentage"
                  :color="tech.color"
                  height="8"
                  rounded
                  class="tech-progress"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Study Sessions & Achievements -->
      <v-row class="mb-8">
        <!-- Upcoming Sessions -->
        <v-col cols="12" md="8">
          <v-card class="sessions-card modern-card" elevation="0">
            <v-card-title class="card-title">
              <v-icon icon="mdi-calendar-clock" class="mr-2" color="primary" />
              예정된 스터디
            </v-card-title>
            <v-card-text>
              <div
                v-for="(session, index) in upcomingSessions"
                :key="index"
                class="session-item"
              >
                <v-card
                  class="session-card"
                  variant="outlined"
                  :color="session.color"
                >
                  <v-card-text class="pa-4">
                    <div class="d-flex align-center">
                      <div class="session-date">
                        <div class="date-day">{{ session.day }}</div>
                        <div class="date-month">{{ session.month }}</div>
                      </div>
                      <v-divider vertical class="mx-4" />
                      <div class="session-info flex-grow-1">
                        <h4 class="session-title">{{ session.title }}</h4>
                        <p class="session-description">{{ session.description }}</p>
                        <div class="session-meta">
                          <v-chip size="x-small" :color="session.color" variant="flat">
                            <v-icon start icon="mdi-clock-outline" size="14" />
                            {{ session.time }}
                          </v-chip>
                          <v-chip size="x-small" color="grey" variant="flat" class="ml-2">
                            <v-icon start icon="mdi-account-group" size="14" />
                            {{ session.participants }}명 참여 예정
                          </v-chip>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Top Contributors -->
        <v-col cols="12" md="4">
          <v-card class="contributors-card modern-card" elevation="0">
            <v-card-title class="card-title">
              <v-icon icon="mdi-trophy" class="mr-2" color="warning" />
              이달의 MVP
            </v-card-title>
            <v-card-text>
              <div
                v-for="(contributor, index) in topContributors"
                :key="index"
                class="contributor-item"
              >
                <div class="d-flex align-center mb-3">
                  <v-badge
                    :content="index + 1"
                    :color="contributor.badgeColor"
                    overlap
                    offset-x="8"
                    offset-y="8"
                  >
                    <v-avatar
                      :image="contributor.image"
                      size="48"
                    />
                  </v-badge>
                  <div class="ml-3 flex-grow-1">
                    <div class="contributor-name">{{ contributor.name }}</div>
                    <div class="contributor-role">{{ contributor.role }}</div>
                  </div>
                  <div class="contributor-score">
                    <v-icon icon="mdi-star" color="warning" size="16" />
                    {{ contributor.score }}
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Quick Actions -->
      <v-row>
        <v-col cols="12">
          <v-card class="actions-card modern-card" elevation="0">
            <v-card-title class="card-title">
              <v-icon icon="mdi-lightning-bolt" class="mr-2" color="primary" />
              빠른 실행
            </v-card-title>
            <v-card-text>
              <div class="quick-actions">
                <v-btn
                  v-for="(action, index) in quickActions"
                  :key="index"
                  :color="action.color"
                  variant="outlined"
                  size="large"
                  @click="scrollToSection(action.target)"
                  class="action-btn"
                >
                  <v-icon start :icon="action.icon" />
                  {{ action.label }}
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

const prodProfileImgPath = "https://raw.githubusercontent.com/9dev-group/9dev/master/src/assets/images/profiles/"

const mainStats = [
  {
    icon: 'mdi-account-multiple',
    value: '12',
    label: '전체 멤버',
    color: 'primary',
    trend: '+2',
    trendIcon: 'mdi-trending-up',
    trendColor: 'success'
  },
  {
    icon: 'mdi-fire',
    value: '48',
    label: '이번 달 스터디',
    color: 'error',
    trend: '+12',
    trendIcon: 'mdi-trending-up',
    trendColor: 'success'
  },
  {
    icon: 'mdi-code-braces',
    value: '127',
    label: '총 프로젝트',
    color: 'success',
    trend: '+5',
    trendIcon: 'mdi-trending-up',
    trendColor: 'success'
  },
  {
    icon: 'mdi-chart-line',
    value: '85%',
    label: '참여율',
    color: 'info',
    trend: '+3%',
    trendIcon: 'mdi-trending-up',
    trendColor: 'success'
  }
]

const recentActivities = [
  {
    icon: 'mdi-code-tags',
    title: 'Vue.js 3 Composition API 스터디 완료',
    user: '미노',
    time: '2시간 전',
    color: 'success'
  },
  {
    icon: 'mdi-git',
    title: '새로운 프로젝트 저장소 생성',
    user: '재연링',
    time: '5시간 전',
    color: 'primary'
  },
  {
    icon: 'mdi-book-open-variant',
    title: 'Clean Code 북스터디 시작',
    user: '강뚱',
    time: '1일 전',
    color: 'warning'
  },
  {
    icon: 'mdi-account-plus',
    title: '신규 멤버 가입',
    user: 'BEAN',
    time: '2일 전',
    color: 'info'
  },
  {
    icon: 'mdi-presentation',
    title: 'TypeScript 세미나 발표',
    user: '우저이',
    time: '3일 전',
    color: 'accent'
  }
]

const techStack = [
  {
    name: 'Frontend',
    icon: 'mdi-language-javascript',
    count: 8,
    percentage: 67,
    color: 'warning'
  },
  {
    name: 'Backend',
    icon: 'mdi-server',
    count: 6,
    percentage: 50,
    color: 'success'
  },
  {
    name: 'Mobile',
    icon: 'mdi-cellphone',
    count: 3,
    percentage: 25,
    color: 'info'
  },
  {
    name: 'DevOps',
    icon: 'mdi-docker',
    count: 4,
    percentage: 33,
    color: 'primary'
  }
]

const upcomingSessions = [
  {
    day: '15',
    month: '11월',
    title: 'React Server Components 심화',
    description: 'Next.js 14의 새로운 기능과 서버 컴포넌트 활용법',
    time: '19:00 - 21:00',
    participants: 8,
    color: 'primary'
  },
  {
    day: '22',
    month: '11월',
    title: 'Spring Boot 3.0 마이그레이션',
    description: '실전 프로젝트 마이그레이션 경험 공유',
    time: '18:30 - 20:30',
    participants: 6,
    color: 'success'
  },
  {
    day: '29',
    month: '11월',
    title: '오픈소스 기여하기',
    description: '처음 시작하는 오픈소스 컨트리뷰션',
    time: '20:00 - 22:00',
    participants: 10,
    color: 'warning'
  }
]

const topContributors = [
  {
    name: '재연링',
    role: '서버 개발자',
    score: 245,
    image: prodProfileImgPath + "jaeyeonling.jpg",
    badgeColor: 'warning'
  },
  {
    name: '미노',
    role: '프론트 개발자',
    score: 223,
    image: prodProfileImgPath + "minho.jpg",
    badgeColor: 'grey'
  },
  {
    name: '강뚱',
    role: '서버 개발자',
    score: 198,
    image: prodProfileImgPath + "patrick.jpg",
    badgeColor: 'orange'
  }
]

const quickActions = [
  {
    label: '멤버 보기',
    icon: 'mdi-account-group',
    color: 'primary',
    target: 'profile'
  },
  {
    label: '스터디 소개',
    icon: 'mdi-information',
    color: 'success',
    target: 'introduce'
  },
  {
    label: '모임 정보',
    icon: 'mdi-map-marker',
    color: 'info',
    target: 'information'
  },
  {
    label: '문의하기',
    icon: 'mdi-email',
    color: 'accent',
    target: 'footer'
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')

        // Animate stat cards
        gsap.fromTo('.stat-card',
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          }
        )

        // Animate other cards
        gsap.fromTo('.modern-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.3
          }
        )
      }
    })
  }, { threshold: 0.1 })

  observer.observe(document.getElementById('dashboard'))
})
</script>

<style scoped>
.dashboard-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.dashboard-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.4;
  z-index: 1;
}

.dashboard-container {
  position: relative;
  z-index: 2;
  padding: 4rem 0;
}

.section-header {
  margin-bottom: 2rem;
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

.modern-card {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  transition: all 0.3s ease;
  height: 100%;
}

.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Stat Cards */
.stat-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)) !important;
}

.stat-card .stat-icon {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stat-card .stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.stat-card .stat-label {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Card Titles */
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

/* Activity Timeline */
.activity-timeline {
  padding: 0.5rem 0;
}

.activity-item {
  padding: 0.5rem 0;
}

.activity-item .activity-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.activity-item .activity-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
}

.activity-item .activity-user {
  font-weight: 500;
}

.activity-item .activity-time {
  color: rgba(0, 0, 0, 0.5);
}

/* Tech Stack */
.tech-item {
  padding: 0.5rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.tech-item:hover {
  background: rgba(102, 126, 234, 0.05);
}

.tech-item .tech-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
}

.tech-item .tech-count {
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
}

.tech-item .tech-progress {
  border-radius: 8px;
}

/* Sessions */
.session-item {
  margin-bottom: 1rem;
}

.session-item:last-child {
  margin-bottom: 0;
}

.session-card {
  transition: all 0.3s ease;
  border-width: 2px !important;
}

.session-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.session-date {
  text-align: center;
  padding: 0 1rem;
}

.session-date .date-day {
  font-size: 2rem;
  font-weight: 900;
  color: #2c3e50;
  line-height: 1;
}

.session-date .date-month {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  text-transform: uppercase;
}

.session-info .session-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.session-info .session-description {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.75rem;
}

.session-info .session-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Contributors */
.contributor-item {
  padding: 0.5rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.contributor-item:hover {
  background: rgba(102, 126, 234, 0.05);
}

.contributor-item .contributor-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.contributor-item .contributor-role {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
}

.contributor-item .contributor-score {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffa726;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Quick Actions */
.quick-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.quick-actions .action-btn {
  font-weight: 600;
  text-transform: none;
  border-radius: 16px;
  border-width: 2px !important;
  transition: all 0.3s ease;
}

.quick-actions .action-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 960px) {
  .dashboard-container {
    padding: 2rem 0;
  }

  .session-card {
    margin-bottom: 1rem;
  }

  .quick-actions {
    justify-content: center;
  }

  .quick-actions .action-btn {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 150px;
  }
}

@media (max-width: 600px) {
  .section-header .section-title {
    font-size: 2rem;
  }

  .section-header .section-subtitle {
    font-size: 1rem;
  }

  .stat-card .stat-number {
    font-size: 1.5rem;
  }

  .session-info .session-title {
    font-size: 1rem;
  }

  .quick-actions .action-btn {
    flex: 1 1 100%;
  }
}
</style>
