import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})