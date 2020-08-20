import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ScrollLoader from "vue-scroll-loader";

// UTILS
import "@/utils/index";

// CSS GLOBAL
import "../src/assets/icons/icofont.css";
import "../src/styles/style.scss";

// THIRD PARTY PACKAGE or PLUGIN
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import VueScrollactive from "vue-scrollactive";
import Fragment from "vue-fragment";
import "./plugins/top-progress-bar";
import "./plugins/bootstrap-vue";

Vue.use(VueScrollactive);
Vue.use(PerfectScrollbar);
Vue.use(Fragment.Plugin);
Vue.use(ScrollLoader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
