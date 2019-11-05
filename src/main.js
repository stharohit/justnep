import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ScrollLoader from 'vue-scroll-loader'

import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import "../src/assets/icons/icofont.css";
import "../src/styles/style.scss";
import "../src/styles/responsive.scss";
import "../src/assets/icons/icofont.css";   



Vue.use(ScrollLoader)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')