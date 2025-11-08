<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

// 테마 초기화 | Initialize theme
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
/* Global styles are imported in main.js */
</style>
