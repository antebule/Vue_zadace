import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maps-page',
      component: require('@/components/Dice').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
