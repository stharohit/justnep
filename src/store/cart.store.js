const cuisines = {
  state: {
    cart: []
  },
  mutations: {
    STORE_CART_ITEM(state, items) {
      state.cart.push(items);
    }
  },
  actions: {
    storeCartItem(context, payload) {
      context.commit("STORE_CART_ITEM", payload.items);
    }
  },
  getters: {
    cart: (state) => state.cart
  }
};

export default cuisines;
