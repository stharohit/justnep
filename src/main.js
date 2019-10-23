import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import "../src/assets/icons/icofont.css";
import "../src/styles/style.scss";
import "../src/assets/icons/icofont.css";


// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
