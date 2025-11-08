<template>
  <!-- 설정 페이지 | Settings Page -->
  <div class="space-y-6 animate-fade-in">
    <!-- 페이지 헤더 | Page Header -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">설정</h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        프로필과 앱 설정을 관리하세요
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 설정 메뉴 | Settings Menu -->
      <div class="lg:col-span-1">
        <AppCard :hover="false" body-class="p-4">
          <nav class="space-y-1">
            <button
              v-for="item in settingsMenu"
              :key="item.id"
              @click="activeSection = item.id"
              :class="[
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                activeSection === item.id
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.label }}</span>
            </button>
          </nav>
        </AppCard>
      </div>

      <!-- 설정 콘텐츠 | Settings Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- 프로필 설정 | Profile Settings -->
        <AppCard v-if="activeSection === 'profile'" title="프로필 설정" :hover="false" body-class="p-6">
          <div class="space-y-6">
            <!-- 프로필 사진 | Profile Picture -->
            <div class="flex items-center gap-6">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                U
              </div>
              <div>
                <button class="btn-primary text-sm">
                  사진 변경
                </button>
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  JPG, PNG 또는 GIF (최대 2MB)
                </p>
              </div>
            </div>

            <!-- 이름 | Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                이름
              </label>
              <input
                v-model="profile.name"
                type="text"
                class="input"
                placeholder="이름을 입력하세요"
              />
            </div>

            <!-- 이메일 | Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                이메일
              </label>
              <input
                v-model="profile.email"
                type="email"
                class="input"
                placeholder="email@example.com"
              />
            </div>

            <!-- 소개 | Bio -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                소개
              </label>
              <textarea
                v-model="profile.bio"
                rows="3"
                class="input resize-none"
                placeholder="자신을 소개해주세요"
              ></textarea>
            </div>

            <!-- GitHub 사용자명 | GitHub Username -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                GitHub 사용자명
              </label>
              <input
                v-model="profile.github"
                type="text"
                class="input"
                placeholder="github-username"
              />
            </div>

            <!-- 저장 버튼 | Save Button -->
            <div class="flex justify-end">
              <button @click="saveProfile" class="btn-primary">
                변경사항 저장
              </button>
            </div>
          </div>
        </AppCard>

        <!-- 테마 설정 | Theme Settings -->
        <AppCard v-if="activeSection === 'appearance'" title="테마 설정" :hover="false" body-class="p-6">
          <div class="space-y-6">
            <!-- 테마 모드 | Theme Mode -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                테마 모드
              </label>
              <div class="grid grid-cols-3 gap-4">
                <button
                  v-for="theme in themes"
                  :key="theme.value"
                  @click="selectTheme(theme.value)"
                  :class="[
                    'p-4 border-2 rounded-lg transition-all',
                    selectedTheme === theme.value
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                  ]"
                >
                  <component :is="theme.icon" class="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
                  <div class="text-sm font-medium text-gray-900 dark:text-white">{{ theme.label }}</div>
                </button>
              </div>
            </div>

            <!-- 색상 스킴 | Color Scheme -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                액센트 색상
              </label>
              <div class="grid grid-cols-6 gap-3">
                <button
                  v-for="color in accentColors"
                  :key="color.name"
                  @click="selectedAccent = color.name"
                  :class="[
                    'w-full aspect-square rounded-lg transition-all',
                    selectedAccent === color.name
                      ? 'ring-2 ring-offset-2 ring-gray-900 dark:ring-white scale-110'
                      : 'hover:scale-105'
                  ]"
                  :style="{ backgroundColor: color.value }"
                  :title="color.name"
                ></button>
              </div>
            </div>

            <!-- 폰트 크기 | Font Size -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                폰트 크기
              </label>
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-600 dark:text-gray-400">작게</span>
                <input
                  v-model="fontSize"
                  type="range"
                  min="12"
                  max="18"
                  step="1"
                  class="flex-1"
                />
                <span class="text-sm text-gray-600 dark:text-gray-400">크게</span>
                <span class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                  {{ fontSize }}px
                </span>
              </div>
            </div>

            <!-- 저장 버튼 | Save Button -->
            <div class="flex justify-end">
              <button @click="saveAppearance" class="btn-primary">
                변경사항 저장
              </button>
            </div>
          </div>
        </AppCard>

        <!-- 알림 설정 | Notification Settings -->
        <AppCard v-if="activeSection === 'notifications'" title="알림 설정" :hover="false" body-class="p-6">
          <div class="space-y-4">
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div>
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ notification.label }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  {{ notification.description }}
                </div>
              </div>
              <button
                @click="notification.enabled = !notification.enabled"
                :class="[
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                  notification.enabled
                    ? 'bg-primary-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                ]"
              >
                <span
                  :class="[
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    notification.enabled ? 'translate-x-6' : 'translate-x-1'
                  ]"
                />
              </button>
            </div>

            <!-- 저장 버튼 | Save Button -->
            <div class="flex justify-end pt-4">
              <button @click="saveNotifications" class="btn-primary">
                변경사항 저장
              </button>
            </div>
          </div>
        </AppCard>

        <!-- 계정 설정 | Account Settings -->
        <AppCard v-if="activeSection === 'account'" title="계정 설정" :hover="false" body-class="p-6">
          <div class="space-y-6">
            <!-- 비밀번호 변경 | Change Password -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
                비밀번호 변경
              </h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    현재 비밀번호
                  </label>
                  <input
                    type="password"
                    class="input"
                    placeholder="현재 비밀번호를 입력하세요"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    새 비밀번호
                  </label>
                  <input
                    type="password"
                    class="input"
                    placeholder="새 비밀번호를 입력하세요"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    새 비밀번호 확인
                  </label>
                  <input
                    type="password"
                    class="input"
                    placeholder="새 비밀번호를 다시 입력하세요"
                  />
                </div>
                <button class="btn-primary">
                  비밀번호 변경
                </button>
              </div>
            </div>

            <!-- 계정 삭제 | Delete Account -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 class="text-lg font-medium text-red-600 dark:text-red-400 mb-2">
                계정 삭제
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.
              </p>
              <button class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                계정 삭제
              </button>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppCard from '@/components/common/AppCard.vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

// 아이콘 컴포넌트 | Icon Components
const UserIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
}

const PaletteIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>`
}

const BellIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>`
}

const LockIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`
}

const SunIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
}

const MoonIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`
}

const ComputerIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
}

// 설정 상태 | Settings State
const activeSection = ref('profile')

const settingsMenu = [
  { id: 'profile', label: '프로필', icon: UserIcon },
  { id: 'appearance', label: '테마', icon: PaletteIcon },
  { id: 'notifications', label: '알림', icon: BellIcon },
  { id: 'account', label: '계정', icon: LockIcon }
]

// 프로필 데이터 | Profile Data
const profile = ref({
  name: '사용자',
  email: 'user@example.com',
  bio: '9DEV 스터디 그룹 회원입니다.',
  github: 'username'
})

// 테마 설정 | Theme Settings
const selectedTheme = ref('system')
const selectedAccent = ref('primary')
const fontSize = ref(14)

const themes = [
  { value: 'light', label: '라이트', icon: SunIcon },
  { value: 'dark', label: '다크', icon: MoonIcon },
  { value: 'system', label: '시스템', icon: ComputerIcon }
]

const accentColors = [
  { name: 'primary', value: '#4F46E5' },
  { name: 'blue', value: '#3B82F6' },
  { name: 'green', value: '#10B981' },
  { name: 'purple', value: '#8B5CF6' },
  { name: 'pink', value: '#EC4899' },
  { name: 'orange', value: '#F59E0B' }
]

// 알림 설정 | Notification Settings
const notifications = ref([
  {
    id: 1,
    label: '이메일 알림',
    description: '새로운 활동이 있을 때 이메일을 받습니다',
    enabled: true
  },
  {
    id: 2,
    label: '푸시 알림',
    description: '브라우저 푸시 알림을 받습니다',
    enabled: false
  },
  {
    id: 3,
    label: '주간 리포트',
    description: '매주 활동 요약을 이메일로 받습니다',
    enabled: true
  },
  {
    id: 4,
    label: '멤버 활동 알림',
    description: '다른 멤버의 활동 알림을 받습니다',
    enabled: true
  }
])

// 함수들 | Functions
const selectTheme = (theme) => {
  selectedTheme.value = theme
  if (theme === 'light') {
    isDark.value = false
  } else if (theme === 'dark') {
    isDark.value = true
  }
}

const saveProfile = () => {
  alert('프로필이 저장되었습니다!')
}

const saveAppearance = () => {
  alert('테마 설정이 저장되었습니다!')
}

const saveNotifications = () => {
  alert('알림 설정이 저장되었습니다!')
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
