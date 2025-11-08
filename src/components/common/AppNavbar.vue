<template>
  <!-- 상단 네비게이션 바 | Top Navigation Bar -->
  <header class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 right-0 z-30 transition-all duration-300"
    :class="navbarClasses"
  >
    <div class="h-full px-4 flex items-center justify-between gap-4">
      <!-- 좌측: 모바일 메뉴 버튼 | Left: Mobile Menu Button -->
      <div class="flex items-center gap-4">
        <button
          @click="toggleMobileSidebar"
          class="lg:hidden btn-icon"
          aria-label="Toggle menu"
        >
          <MenuIcon class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>

        <!-- 검색 바 | Search Bar -->
        <div class="hidden md:flex items-center">
          <div class="relative">
            <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="검색..."
              class="pl-10 pr-4 py-2 w-64 lg:w-96 rounded-lg bg-gray-100 dark:bg-gray-900 border-0 focus:ring-2 focus:ring-primary-500 transition-all"
            />
          </div>
        </div>
      </div>

      <!-- 우측: 액션 버튼들 | Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- 알림 버튼 | Notifications Button -->
        <button
          class="btn-icon relative"
          aria-label="Notifications"
          @click="showNotifications = !showNotifications"
        >
          <BellIcon class="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- 테마 전환 버튼 | Theme Switcher -->
        <ThemeSwitcher />

        <!-- 사용자 아바타 | User Avatar -->
        <div class="relative">
          <button
            @click="showUserMenu = !showUserMenu"
            class="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
              U
            </div>
            <span class="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ userName }}
            </span>
            <ChevronDownIcon class="hidden sm:block w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>

          <!-- 사용자 메뉴 드롭다운 | User Menu Dropdown -->
          <transition name="dropdown">
            <div
              v-if="showUserMenu"
              v-click-outside="() => showUserMenu = false"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
            >
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                프로필
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                설정
              </a>
              <hr class="my-2 border-gray-200 dark:border-gray-700" />
              <a href="#" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                로그아웃
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

// 아이콘 컴포넌트 | Icon Components
const MenuIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`
}

const SearchIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`
}

const BellIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>`
}

const ChevronDownIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>`
}

const props = defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-mobile-sidebar'])

const searchQuery = ref('')
const showNotifications = ref(false)
const showUserMenu = ref(false)
const userName = ref('User')

const navbarClasses = computed(() => ({
  'left-64': !props.sidebarCollapsed,
  'left-20': props.sidebarCollapsed,
  'left-0': true
}))

const toggleMobileSidebar = () => {
  emit('toggle-mobile-sidebar')
}

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
