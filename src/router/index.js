import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue';
import Editor from '../components/Editor.vue';
import Posts from '../components/Posts.vue';
import Dialog from '../components/Dialog.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/editor', component: Editor },
    { path: '/posts',
      component: Posts,
      children: [
        { path: ':id',
          component: { template: '<div>PostView<br />id:{{this.$route.params.id}}</div>' }
        }
      ]
    },
    { path: '/dialog', component: Dialog },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})

export default router