// Vue Router 설정 | Vue Router Configuration
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Repositories from '@/pages/Repositories.vue'
import Settings from '@/pages/Settings.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '대시보드 - 9DEV' }
      },
      {
        path: '/repos',
        name: 'Repositories',
        component: Repositories,
        meta: { title: '리포지토리 - 9DEV' }
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: { title: '설정 - 9DEV' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 페이지 타이틀 설정 | Set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '9DEV - 개발 스터디 그룹'
  next()
})

export default router
