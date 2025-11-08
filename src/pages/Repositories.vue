<template>
  <!-- 리포지토리 목록 페이지 | Repositories List Page -->
  <div class="space-y-6 animate-fade-in">
    <!-- 페이지 헤더 | Page Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">리포지토리</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          9DEV 스터디 그룹의 모든 프로젝트를 한눈에 확인하세요
        </p>
      </div>

      <!-- 필터 및 정렬 | Filter and Sort -->
      <div class="flex items-center gap-2">
        <select
          v-model="selectedFilter"
          class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">전체</option>
          <option value="kotlin">Kotlin</option>
          <option value="java">Java</option>
          <option value="vue">Vue</option>
        </select>

        <select
          v-model="selectedSort"
          class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="updated">최근 업데이트</option>
          <option value="stars">스타 많은 순</option>
          <option value="name">이름 순</option>
        </select>
      </div>
    </div>

    <!-- 리포지토리 그리드 | Repositories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AppCard
        v-for="repo in filteredRepos"
        :key="repo.id"
        :hover="true"
        body-class="p-6"
        class="flex flex-col h-full"
      >
        <div class="flex-1">
          <!-- 리포지토리 헤더 | Repository Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-2 flex-1 min-w-0">
              <FolderIcon class="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white truncate">
                {{ repo.name }}
              </h3>
            </div>
            <span
              v-if="repo.isPrivate"
              class="badge badge-primary flex-shrink-0 ml-2"
            >
              Private
            </span>
          </div>

          <!-- 리포지토리 설명 | Repository Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {{ repo.description }}
          </p>

          <!-- 리포지토리 메타 정보 | Repository Meta Info -->
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div class="flex items-center gap-1">
              <StarIcon class="w-4 h-4 fill-current" />
              <span>{{ repo.stars }}</span>
            </div>

            <div class="flex items-center gap-1">
              <ForkIcon class="w-4 h-4" />
              <span>{{ repo.forks }}</span>
            </div>

            <div v-if="repo.language" class="flex items-center gap-1">
              <div
                class="w-3 h-3 rounded-full"
                :style="{ backgroundColor: repo.languageColor }"
              ></div>
              <span>{{ repo.language }}</span>
            </div>
          </div>

          <!-- 태그 | Tags -->
          <div v-if="repo.tags && repo.tags.length" class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in repo.tags"
              :key="tag"
              class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- 리포지토리 푸터 | Repository Footer -->
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500 dark:text-gray-500">
              업데이트: {{ repo.updatedAt }}
            </span>
            <a
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              보기
              <ExternalLinkIcon class="w-4 h-4" />
            </a>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- 빈 상태 | Empty State -->
    <div
      v-if="filteredRepos.length === 0"
      class="text-center py-12"
    >
      <FolderIcon class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
        리포지토리가 없습니다
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        선택한 필터에 맞는 리포지토리가 없습니다.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppCard from '@/components/common/AppCard.vue'

// 아이콘 컴포넌트 | Icon Components
const FolderIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>`
}

const StarIcon = {
  template: `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>`
}

const ForkIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>`
}

const ExternalLinkIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`
}

const selectedFilter = ref('all')
const selectedSort = ref('updated')

// 리포지토리 데이터 (더미 데이터) | Repository Data (Dummy Data)
const repositories = ref([
  {
    id: 1,
    name: 'Study-Group-kotlin',
    description: 'Kotlin 스터디 그룹 학습 자료 및 예제 코드. Coroutine, Flow, 함수형 프로그래밍 등 다양한 주제를 다룹니다.',
    stars: 45,
    forks: 12,
    language: 'Kotlin',
    languageColor: '#A97BFF',
    updatedAt: '2일 전',
    isPrivate: false,
    tags: ['study', 'kotlin', 'coroutines'],
    url: 'https://github.com/9dev-group/Study-Group-kotlin'
  },
  {
    id: 2,
    name: 'JavaDesignPatterns',
    description: 'Java 디자인 패턴 학습 및 실습 프로젝트. GoF 디자인 패턴을 실제 예제와 함께 구현합니다.',
    stars: 32,
    forks: 8,
    language: 'Java',
    languageColor: '#b07219',
    updatedAt: '4일 전',
    isPrivate: false,
    tags: ['design-patterns', 'java', 'oop'],
    url: 'https://github.com/9dev-group/JavaDesignPatterns'
  },
  {
    id: 3,
    name: '9dev',
    description: '9DEV 스터디 그룹 공식 웹사이트. Vue 3, Tailwind CSS를 사용한 현대적인 웹 애플리케이션입니다.',
    stars: 18,
    forks: 5,
    language: 'Vue',
    languageColor: '#42b883',
    updatedAt: '1주 전',
    isPrivate: false,
    tags: ['website', 'vue3', 'tailwindcss'],
    url: 'https://9dev.netlify.app'
  },
  {
    id: 4,
    name: 'Algorithm-Study',
    description: '알고리즘 문제 풀이 및 토론 저장소. 백준, 프로그래머스, LeetCode 문제들을 함께 풀어봅니다.',
    stars: 28,
    forks: 15,
    language: 'Java',
    languageColor: '#b07219',
    updatedAt: '3일 전',
    isPrivate: false,
    tags: ['algorithm', 'coding-test', 'study'],
    url: 'https://github.com/9dev-group/Algorithm-Study'
  },
  {
    id: 5,
    name: 'Spring-Boot-Practice',
    description: 'Spring Boot 실습 프로젝트. REST API, JPA, Security 등을 학습합니다.',
    stars: 21,
    forks: 6,
    language: 'Java',
    languageColor: '#b07219',
    updatedAt: '5일 전',
    isPrivate: false,
    tags: ['spring-boot', 'backend', 'api'],
    url: 'https://github.com/9dev-group/Spring-Boot-Practice'
  },
  {
    id: 6,
    name: 'Kotlin-Coroutines-Deep-Dive',
    description: 'Kotlin Coroutines 심화 학습. Flow, Channel, StateFlow 등을 깊이 있게 다룹니다.',
    stars: 35,
    forks: 9,
    language: 'Kotlin',
    languageColor: '#A97BFF',
    updatedAt: '1주 전',
    isPrivate: false,
    tags: ['kotlin', 'coroutines', 'async'],
    url: 'https://github.com/9dev-group/Kotlin-Coroutines-Deep-Dive'
  }
])

// 필터링된 리포지토리 | Filtered Repositories
const filteredRepos = computed(() => {
  let filtered = repositories.value

  // 필터 적용 | Apply Filter
  if (selectedFilter.value !== 'all') {
    filtered = filtered.filter(repo =>
      repo.language?.toLowerCase() === selectedFilter.value.toLowerCase()
    )
  }

  // 정렬 적용 | Apply Sort
  const sorted = [...filtered]
  switch (selectedSort.value) {
    case 'stars':
      sorted.sort((a, b) => b.stars - a.stars)
      break
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'updated':
    default:
      // 업데이트 시간 순은 기본 순서 유지
      break
  }

  return sorted
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
