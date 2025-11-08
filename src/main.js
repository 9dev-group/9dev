// main.js - 애플리케이션 진입점 | Application Entry Point
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Tailwind CSS 임포트 | Import Tailwind CSS
import './styles/tailwind.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
