import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import "../src/assets/icons/icofont.css";
import "../src/styles/style.scss";
import "../src/styles/responsive.scss";
import "../src/assets/icons/icofont.css";
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import VueScrollactive from 'vue-scrollactive';
// Vue.config.productionTip = false;
Vue.use(VueScrollactive);
Vue.use(PerfectScrollbar);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');