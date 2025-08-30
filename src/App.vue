<template>
  <v-app id="app">
    <!-- Modern Navigation Bar with Glassmorphism -->
    <v-app-bar
      app
      :elevation="scrolled ? 4 : 0"
      :class="['modern-navbar', { 'scrolled': scrolled }]"
      height="72"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon 
          @click="drawer = !drawer" 
          class="d-lg-none"
          :ripple="{ class: 'text-primary' }"
        />
      </template>

      <v-app-bar-title class="navbar-title">
        <div class="d-flex align-center">
          <span class="brand-text">9DEV</span>
          <v-chip 
            size="small" 
            color="primary" 
            variant="outlined"
            class="ml-3"
          >
            개발스터디
          </v-chip>
        </div>
      </v-app-bar-title>
      
      <template v-slot:append>
        <!-- Desktop Navigation -->
        <div class="d-none d-lg-flex align-center">
          <v-btn
            v-for="item in navigationItems"
            :key="item.id"
            variant="text"
            class="mx-1 nav-btn"
            @click="scrollToSection(item.id)"
            :ripple="{ class: 'text-primary' }"
          >
            <v-icon start :icon="item.icon" />
            {{ item.title }}
          </v-btn>
          
          <!-- Theme Toggle -->
          <v-btn
            icon
            class="ml-4"
            @click="toggleTheme"
            :ripple="{ class: 'text-primary' }"
          >
            <v-icon>{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <!-- Modern Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :width="300"
      class="modern-drawer"
    >
      <div class="drawer-header">
        <div class="text-h5 font-weight-bold text-primary">9DEV</div>
        <div class="text-body-2 text-medium-emphasis">개발스터디</div>
      </div>
      
      <v-list class="px-4">
        <v-list-item
          v-for="item in navigationItems"
          :key="item.id"
          @click="scrollToSection(item.id); drawer = false"
          :prepend-icon="item.icon"
          :title="item.title"
          rounded="xl"
          class="mb-2 nav-item"
        />
        
        <v-divider class="my-4" />
        
        <v-list-item
          @click="toggleTheme"
          :prepend-icon="isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          :title="isDarkMode ? '라이트 모드' : '다크 모드'"
          rounded="xl"
          class="nav-item"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content with Smooth Transitions -->
    <v-main class="main-content">
      <Transition name="page" appear>
        <div>
          <Front id="front" />
          <Introduce id="introduce" />
          <Profile id="profile" />
          <Information id="information" />
          <Footer id="footer" />
        </div>
      </Transition>
    </v-main>

    <!-- Scroll to Top Button -->
    <Transition name="scroll-btn">
      <v-btn
        v-if="scrolled"
        icon
        size="large"
        color="primary"
        class="scroll-to-top"
        @click="scrollToTop"
        elevation="4"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </Transition>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from 'vuetify'
import { gsap } from 'gsap'

import Front from './components/Front.vue'
import Introduce from './components/Introduce.vue'
import Profile from './components/Profile.vue'
import Information from './components/Information.vue'
import Footer from './components/Footer.vue'

const theme = useTheme()

const drawer = ref(false)
const scrolled = ref(false)
const isDarkMode = ref(false)

const navigationItems = [
  { id: 'front', title: '홈', icon: 'mdi-home' },
  { id: 'introduce', title: '소개', icon: 'mdi-information' },
  { id: 'profile', title: '사람들', icon: 'mdi-account-group' },
  { id: 'information', title: '정보', icon: 'mdi-map-marker' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
  localStorage.setItem('9dev-theme', isDarkMode.value ? 'dark' : 'light')
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  const savedTheme = localStorage.getItem('9dev-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
    theme.global.name.value = savedTheme
  }

  window.addEventListener('scroll', handleScroll)
  
  gsap.fromTo('.brand-text', 
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#app {
  font-family: var(--font-family-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modern-navbar {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modern-navbar.scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(25px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.v-theme--dark .modern-navbar {
  background: rgba(18, 18, 18, 0.85) !important;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.v-theme--dark .modern-navbar.scrolled {
  background: rgba(18, 18, 18, 0.95) !important;
}

.brand-text {
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-btn {
  font-weight: 500;
  text-transform: none;
  border-radius: 16px;
  transition: all 0.2s ease;

}

.nav-btn:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.modern-drawer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
}

.v-theme--dark .modern-drawer {
  background: rgba(30, 30, 30, 0.95);
}

.modern-drawer .drawer-header {
  padding: 2rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
}

.v-theme--dark .modern-drawer .drawer-header {
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.modern-drawer .nav-item {
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
}

.modern-drawer .nav-item:hover {
  transform: translateX(4px);
  background: rgba(102, 126, 234, 0.1);
}

.main-content {
  position: relative;
  overflow-x: hidden;
}

.scroll-to-top {
  position: fixed !important;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  
}

.scroll-to-top:hover {
  transform: translateY(-2px) scale(1.05);
}

/* Transitions */
.page-enter-active, .page-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.scroll-btn-enter-active, .scroll-btn-leave-active {
  transition: all 0.3s ease;
}

.scroll-btn-enter-from, .scroll-btn-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

a:link {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

a:active {
  color: inherit;
  text-decoration: none;
}
</style>
