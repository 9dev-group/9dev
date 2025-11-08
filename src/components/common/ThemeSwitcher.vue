<template>
  <!-- 테마 전환 스위치 | Theme Toggle Switch -->
  <button
    @click="toggleTheme"
    class="btn-icon relative"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <transition name="fade" mode="out-in">
      <!-- 다크 모드 아이콘 | Dark mode icon -->
      <svg
        v-if="isDark"
        key="moon"
        class="w-5 h-5 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <!-- 라이트 모드 아이콘 | Light mode icon -->
      <svg
        v-else
        key="sun"
        class="w-5 h-5 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </transition>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>
