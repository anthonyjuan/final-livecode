import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SiteMap from '@/components/SiteMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteMap',
      component: SiteMap
    }
  ]
})
