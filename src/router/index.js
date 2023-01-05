import Vue from 'vue'
import VueRouter from 'vue-router'

import Page1 from '@/views/pages/page1'
import Page2 from '@/views/pages/page2'
import Page3 from '@/views/pages/page3'
import Page4 from '@/views/pages/page4'

Vue.use(VueRouter)

const routes = [
  // define page router rule
  { path: '/demo/page1', component: Page1 },
  { path: '/demo/page2', component: Page2 },
  { path: '/demo/page3', component: Page3 },
  { path: '/demo/page4', component: Page4 },
  // define default redirect
  { path: '/', redirect: '/demo/page1' }
]

const router = new VueRouter({
  routes
})

export default router
