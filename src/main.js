import Vue from 'vue'
import store from './store'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './styles/reset.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
