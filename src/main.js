import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
console.log(process.env.NODE_ENV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
