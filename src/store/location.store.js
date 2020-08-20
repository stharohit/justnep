const location = {
  state: {
    latitude: "",
    longitude: "",
    currentAddress: ""
  },
  mutations: {
    STORE_LATITUDE(state, latitude) {
      state.latitude = latitude;
    },
    STORE_LONGITUDE(state, longitude) {
      state.longitude = longitude;
    },
    STORE_CURRENT_ADDRESS(state, currentAddress) {
      state.currentAddress = currentAddress;
    }
  },
  actions: {
    storeLatitude(context, payload) {
      context.commit("STORE_LATITUDE", payload.latitude);
    },
    storeLongitude(context, payload) {
      context.commit("STORE_LONGITUDE", payload.longitude);
    },
    storeCurrentAddress(context, payload) {
      context.commit("STORE_CURRENT_ADDRESS", payload.currentAddress);
    }
  },
  getters: {
    latitude: (state) => state.latitude,
    longitude: (state) => state.longitude,
    currentAddress: (state) => state.currentAddress
  }
};

export default location;
