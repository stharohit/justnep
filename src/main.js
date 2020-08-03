import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ScrollLoader from "vue-scroll-loader";
import "./utils/AxiosInstance";

import "../src/assets/icons/icofont.css";
import "../src/styles/style.scss";
import "../src/styles/responsive.scss";
import "../src/assets/icons/icofont.css";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import VueScrollactive from "vue-scrollactive";
import { Plugin } from "vue-fragment";

Vue.use(VueScrollactive);
Vue.use(PerfectScrollbar);
Vue.use(Plugin);
Vue.use(ScrollLoader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
