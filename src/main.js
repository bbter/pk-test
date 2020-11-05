import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://test.idethink.com/'

new Vue({
  render: h => h(App),
}).$mount('#app')
