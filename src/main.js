import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import App from './App.vue'
import './styles/global.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          accent: '#f093fb',
          success: '#00d4aa',
          warning: '#ffc107',
          error: '#ff5252',
          info: '#2196f3',
          surface: '#ffffff',
          background: '#fafafa',
        },
      },
      dark: {
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          accent: '#f093fb',
          success: '#00d4aa',
          warning: '#ffc107',
          error: '#ff5252',
          info: '#2196f3',
          surface: '#1e1e1e',
          background: '#121212',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none;',
      rounded: 'lg',
    },
    VCard: {
      rounded: 'lg',
      elevation: 2,
    },
    VSheet: {
      rounded: 'lg',
    },
    VTextField: {
      rounded: 'lg',
      variant: 'outlined',
    },
  },
})

const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(pinia)

app.mount('#app')
