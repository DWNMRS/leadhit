import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
const url = 'https://track-api.leadhit.io/client/test_auth'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMessage(ctx, siteId) {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Api-Key': `${siteId}:eEZn8u05G3bzRpdL7RiHCvrYAYo`,
            'Leadhit-Site-Id': siteId,
          },
        })
        const data = await res.json()
        if (data.message === 'ok') {
          localStorage.setItem('leadhit-site-id', `${siteId}`);
          router.push({ path: '/analytics' })
        }
      } catch (error) {
        console.error('Ошибка:', error)
      }
    },
  },
})
