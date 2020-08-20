const category = {
  state: {
    restaurantsCategory: "",
  },
  mutations: {
    STORE_RESTAURANT_CATEGORY(state, category) {
      state.restaurantsCategory = category;
    },
  },
  actions: {
    storeRestaurantsCategory(context, payload) {
      context.commit("STORE_RESTAURANT_CATEGORY", payload.category);
    },
  },
  getters: {
    restaurantsCategory: (state) => state.restaurantsCategory,
  },
};

export default category;
