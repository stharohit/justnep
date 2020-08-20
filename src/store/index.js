import Vue from "vue";
import Vuex from "vuex";
import category from "./restaurantCategory.store";
import cuisines from "./cuisine.store";
import location from "./location.store";
import cart from "./cart.store";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    progressBar: false
  },
  mutations: {
    SET_PROGRESS_BAR(state, progress) {
      state.progressBar = progress;
    }
  },
  actions: {
    setProgress(context, payload) {
      context.commit("SET_PROGRESS_BAR", payload.progress);
    }
  },
  getters: {
    progress: (state) => state.progressBar
  },
  modules: {
    category,
    cuisines,
    location,
    cart
  }
});
