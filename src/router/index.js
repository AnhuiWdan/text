import Vue from 'vue'
import Router from 'vue-router'

import sell from '@/components/sell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sell',
      component: sell
    }
  ]
})
