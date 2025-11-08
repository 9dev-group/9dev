<template>
  <!-- 기본 레이아웃 (사이드바 + 네비바 + 메인 콘텐츠) | Default Layout (Sidebar + Navbar + Main Content) -->
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 사이드바 | Sidebar -->
    <AppSidebar v-model="mobileSidebarOpen" />

    <!-- 메인 컨테이너 | Main Container -->
    <div
      class="transition-all duration-300"
      :class="mainContainerClasses"
    >
      <!-- 상단 네비게이션 | Top Navigation -->
      <AppNavbar
        :sidebar-collapsed="sidebarCollapsed"
        @toggle-mobile-sidebar="mobileSidebarOpen = !mobileSidebarOpen"
      />

      <!-- 메인 콘텐츠 영역 | Main Content Area -->
      <main class="pt-16 min-h-screen">
        <div class="p-6">
          <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppSidebar from '@/components/common/AppSidebar.vue'
import AppNavbar from '@/components/common/AppNavbar.vue'

const mobileSidebarOpen = ref(false)
const sidebarCollapsed = ref(false)
const windowWidth = ref(window.innerWidth)

const mainContainerClasses = computed(() => ({
  'lg:ml-64': !sidebarCollapsed.value,
  'lg:ml-20': sidebarCollapsed.value
}))

// 윈도우 리사이즈 핸들러 | Window resize handler
const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value >= 1024) {
    mobileSidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
