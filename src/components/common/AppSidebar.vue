<template>
  <!-- 좌측 사이드바 네비게이션 | Left Sidebar Navigation -->
  <aside
    :class="sidebarClasses"
    class="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40"
  >
    <!-- 로고 영역 | Logo Area -->
    <div class="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 px-4">
      <router-link to="/" class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-xl">9</span>
        </div>
        <span v-if="!collapsed" class="font-display font-bold text-xl text-gray-900 dark:text-white">
          9DEV
        </span>
      </router-link>
    </div>

    <!-- 네비게이션 메뉴 | Navigation Menu -->
    <nav class="p-4 space-y-2">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        v-slot="{ isActive }"
        custom
      >
        <div
          @click="navigateTo(item.path)"
          :class="['sidebar-item', { 'active': isActive }]"
          :title="item.label"
        >
          <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
          <span v-if="!collapsed" class="text-sm">{{ item.label }}</span>
        </div>
      </router-link>
    </nav>

    <!-- 사이드바 토글 버튼 | Sidebar Toggle Button -->
    <div class="absolute bottom-4 left-0 right-0 px-4">
      <button
        @click="toggleSidebar"
        class="w-full flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        :title="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
      >
        <ChevronLeftIcon v-if="!collapsed" class="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <ChevronRightIcon v-else class="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  </aside>

  <!-- 모바일 오버레이 | Mobile Overlay -->
  <div
    v-if="mobileOpen"
    @click="closeMobileSidebar"
    class="fixed inset-0 bg-black/50 z-30 lg:hidden"
  ></div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 아이콘 컴포넌트 | Icon Components
const HomeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
}

const FolderIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>`
}

const SettingsIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
}

const ChevronLeftIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>`
}

const ChevronRightIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const collapsed = ref(false)
const mobileOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// 메뉴 아이템 | Menu Items
const menuItems = [
  { path: '/', label: '대시보드', icon: HomeIcon },
  { path: '/repos', label: '리포지토리', icon: FolderIcon },
  { path: '/settings', label: '설정', icon: SettingsIcon }
]

const sidebarClasses = computed(() => ({
  'w-64': !collapsed.value,
  'w-20': collapsed.value,
  'translate-x-0': mobileOpen.value,
  '-translate-x-full lg:translate-x-0': !mobileOpen.value
}))

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}

const navigateTo = (path) => {
  router.push(path)
  closeMobileSidebar()
}

const closeMobileSidebar = () => {
  mobileOpen.value = false
}
</script>

<style scoped>
/* Additional sidebar-specific styles if needed */
</style>
