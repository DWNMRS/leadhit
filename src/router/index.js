import VueRouter from 'vue-router'
import PageAuth from '../pages/PageAuth.vue'
import PageAnalytics from '../pages/PageAnalytics.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/leadhit',
      name: 'leadhit',
      component: PageAuth,
      meta: {
        title: 'Авторизация',
      },
    },
    {
      path: '/leadhit/analytics',
      name: 'analytics',
      component: PageAnalytics,
      meta: {
        title: 'Аналитика',
      },
    },
  ],
})
