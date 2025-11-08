// useTheme.js - 다크 모드/라이트 모드 테마 관리 | Theme management for dark/light mode
import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  // 테마 초기화 | Initialize theme
  const initTheme = () => {
    const savedTheme = localStorage.getItem('9dev-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
    applyTheme()
  }

  // 테마 적용 | Apply theme
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // 테마 토글 | Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('9dev-theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  // 테마 변경 감지 | Watch theme changes
  watch(isDark, () => {
    applyTheme()
  })

  // 컴포넌트 마운트 시 초기화 | Initialize on mount
  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
