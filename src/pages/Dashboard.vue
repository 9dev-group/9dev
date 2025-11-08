<template>
  <!-- 대시보드 페이지 | Dashboard Page -->
  <div class="space-y-6 animate-fade-in">
    <!-- 페이지 헤더 | Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">대시보드</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          9DEV 스터디 그룹의 활동 현황을 확인하세요
        </p>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        {{ currentDate }}
      </div>
    </div>

    <!-- 통계 카드 그리드 | Statistics Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AppCard
        v-for="stat in statistics"
        :key="stat.label"
        :hover="true"
        body-class="p-6"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ stat.label }}</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</p>
            <p class="mt-1 text-sm" :class="stat.changeClass">
              {{ stat.change }}
            </p>
          </div>
          <div :class="stat.iconBg" class="p-3 rounded-lg">
            <component :is="stat.icon" class="w-6 h-6" :class="stat.iconColor" />
          </div>
        </div>
      </AppCard>
    </div>

    <!-- 메인 콘텐츠 그리드 | Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 최근 활동 | Recent Activity -->
      <AppCard title="최근 활동" :hover="false" class="lg:col-span-2" body-class="p-6">
        <div class="space-y-4">
          <div
            v-for="activity in recentActivities"
            :key="activity.id"
            class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div :class="activity.iconBg" class="p-2 rounded-full flex-shrink-0">
              <component :is="activity.icon" class="w-4 h-4 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ activity.title }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ activity.description }}
              </p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-500">
                {{ activity.time }}
              </p>
            </div>
          </div>
        </div>
      </AppCard>

      <!-- 빠른 링크 | Quick Links -->
      <AppCard title="빠른 링크" :hover="false" body-class="p-6">
        <div class="space-y-3">
          <a
            v-for="link in quickLinks"
            :key="link.label"
            :href="link.url"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
          >
            <component :is="link.icon" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
              {{ link.label }}
            </span>
          </a>
        </div>
      </AppCard>
    </div>

    <!-- 최근 리포지토리 | Recent Repositories -->
    <AppCard title="최근 리포지토리" :hover="false" body-class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="repo in recentRepos"
          :key="repo.name"
          class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-md cursor-pointer"
        >
          <div class="flex items-start justify-between">
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-gray-900 dark:text-white truncate">{{ repo.name }}</h3>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ repo.description }}</p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center gap-1">
              <StarIcon class="w-4 h-4" />
              <span>{{ repo.stars }}</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: repo.languageColor }"></div>
              <span>{{ repo.language }}</span>
            </div>
          </div>
          <div class="mt-2 text-xs text-gray-500 dark:text-gray-500">
            업데이트: {{ repo.updatedAt }}
          </div>
        </div>
      </div>
    </AppCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppCard from '@/components/common/AppCard.vue'

// 아이콘 컴포넌트 | Icon Components
const UsersIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
}

const FolderIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>`
}

const CodeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`
}

const StarIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>`
}

const GitCommitIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
}

const LinkIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`
}

const BookIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
}

// 현재 날짜 | Current Date
const currentDate = computed(() => {
  return new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
})

// 통계 데이터 | Statistics Data
const statistics = ref([
  {
    label: '전체 멤버',
    value: '24',
    change: '+3 이번 달',
    changeClass: 'text-green-600',
    icon: UsersIcon,
    iconBg: 'bg-primary-100 dark:bg-primary-900/30',
    iconColor: 'text-primary-600 dark:text-primary-400'
  },
  {
    label: '진행 중인 프로젝트',
    value: '8',
    change: '+2 이번 주',
    changeClass: 'text-green-600',
    icon: FolderIcon,
    iconBg: 'bg-secondary-100 dark:bg-secondary-900/30',
    iconColor: 'text-secondary-600 dark:text-secondary-400'
  },
  {
    label: '이번 주 커밋',
    value: '156',
    change: '+12% 지난 주 대비',
    changeClass: 'text-green-600',
    icon: CodeIcon,
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    label: '총 스터디 시간',
    value: '342h',
    change: '+28h 이번 달',
    changeClass: 'text-green-600',
    icon: GitCommitIcon,
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400'
  }
])

// 최근 활동 | Recent Activities
const recentActivities = ref([
  {
    id: 1,
    title: 'JavaDesignPatterns 저장소에 새로운 커밋',
    description: 'Singleton 패턴 예제 추가',
    time: '5분 전',
    icon: GitCommitIcon,
    iconBg: 'bg-primary-500'
  },
  {
    id: 2,
    title: '새로운 멤버 합류',
    description: '김철수님이 스터디에 참여했습니다',
    time: '1시간 전',
    icon: UsersIcon,
    iconBg: 'bg-secondary-500'
  },
  {
    id: 3,
    title: 'Study-Group-kotlin 프로젝트 업데이트',
    description: 'Coroutine 챕터 학습 자료 추가',
    time: '3시간 전',
    icon: BookIcon,
    iconBg: 'bg-purple-500'
  }
])

// 빠른 링크 | Quick Links
const quickLinks = ref([
  { label: 'GitHub 조직', url: 'https://github.com/9dev-group', icon: LinkIcon },
  { label: '스터디 가이드', url: '#', icon: BookIcon },
  { label: '프로젝트 보드', url: '#', icon: FolderIcon }
])

// 최근 리포지토리 | Recent Repositories
const recentRepos = ref([
  {
    name: 'Study-Group-kotlin',
    description: 'Kotlin 스터디 그룹 학습 자료 및 예제 코드',
    stars: 45,
    language: 'Kotlin',
    languageColor: '#A97BFF',
    updatedAt: '2일 전'
  },
  {
    name: 'JavaDesignPatterns',
    description: 'Java 디자인 패턴 학습 및 실습 프로젝트',
    stars: 32,
    language: 'Java',
    languageColor: '#b07219',
    updatedAt: '4일 전'
  },
  {
    name: '9dev',
    description: '9DEV 스터디 그룹 공식 웹사이트',
    stars: 18,
    language: 'Vue',
    languageColor: '#42b883',
    updatedAt: '1주 전'
  }
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
