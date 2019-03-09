import Vue from 'vue'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'

Vue.use(VueFire)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})