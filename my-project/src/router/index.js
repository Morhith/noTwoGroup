import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      component: require('../page/about.vue')
    },
    {
      path: '/branch',
      component: require('../page/branch.vue')
    },
    {
      path: '/careSystem',
      component: require('../page/careSystem.vue')
    },
    {
      path: '/healthCare',
      component: require('../page/HealthCare.vue')
    },
    {
      path: '/rehabilitation',
      component: require('../page/rehabilitationSystem.vue')
    }
  ]
})
