import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue';
import Editor from '../components/Editor.vue';
import Viewer from '../components/Viewer.vue';
import Board from '../components/Board.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/editor', component: Editor },
    { path: '/viewer', component: Viewer },
    { path: '/board', component: Board },
  ]
})

export default router