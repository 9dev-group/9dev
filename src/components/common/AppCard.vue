<template>
  <!-- 재사용 가능한 카드 컴포넌트 | Reusable Card Component -->
  <div
    :class="cardClasses"
    class="card"
  >
    <!-- 카드 헤더 | Card Header -->
    <div v-if="$slots.header || title" class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <slot name="header">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
      </slot>
    </div>

    <!-- 카드 본문 | Card Body -->
    <div :class="bodyClass">
      <slot></slot>
    </div>

    <!-- 카드 푸터 | Card Footer -->
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  hover: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: 'p-6'
  },
  bodyClass: {
    type: String,
    default: ''
  }
})

const cardClasses = computed(() => ({
  'card-hover': props.hover,
  [props.bodyClass]: !props.bodyClass.includes('p-')
}))
</script>

<style scoped>
/* Additional card-specific styles if needed */
</style>
