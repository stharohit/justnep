const cuisines = {
  state: {
    cuisines: "",
    selectedCuisines: []
  },
  mutations: {
    STORE_CUISINE(state, cuisines) {
      state.cuisines = cuisines;
    },
    STORE_SELECTED_CUISINE(state, id) {
      state.selectedCuisines = id;
    }
  },
  actions: {
    storeCuisine(context, payload) {
      context.commit("STORE_CUISINE", payload.cuisines);
    },
    storeSelectedCuisine(context, payload) {
      context.commit("STORE_SELECTED_CUISINE", payload.id);
    }
  },
  getters: {
    cuisines: (state) => state.cuisines,
    selectedCuisines: (state) => state.selectedCuisines
  }
};

export default cuisines;
