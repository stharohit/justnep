import cookie from "vue-cookie";
import Vue from "vue";
import store from "../store/index";

Vue.use(cookie);

// set cookie latitude
Vue.prototype.$setLatitude = (latitude) => {
  cookie.set("latitude", latitude, Date.now() * 365 * 12 * 30 * 60 * 60);
  store.dispatch({
    type: "storeLatitude",
    latitude: latitude
  });
};

// get cookie latitude
Vue.prototype.$getLatitude = () => {
  return cookie.get("latitude");
};

// remove cookie latitude
Vue.prototype.$removeLatitude = () => {
  return cookie.delete("latitude");
};

// set cookie longitude
Vue.prototype.$setLongitude = (longitude) => {
  cookie.set("longitude", longitude, Date.now() * 365 * 12 * 30 * 60 * 60);
  store.dispatch({
    type: "storeLongitude",
    longitude: longitude
  });
};

// get cookie longitude
Vue.prototype.$getLongitude = () => {
  return cookie.get("longitude");
};

// remove cookie longitude
Vue.prototype.$removeLongitude = () => {
  return cookie.delete("longitude");
};

// set cookie current address
Vue.prototype.$setCurrentAddress = (CurrentAddress) => {
  cookie.set(
    "CurrentAddress",
    CurrentAddress,
    Date.now() * 365 * 12 * 30 * 60 * 60
  );
  store.dispatch({
    type: "storeCurrentAddress",
    currentAddress: CurrentAddress
  });
};

// set cookie current address
Vue.prototype.$getCurrentAddress = () => {
  return cookie.get("CurrentAddress");
};

// remove cookie current address
Vue.prototype.$removeCurrentAddress = () => {
  return cookie.delete("CurrentAddress");
};

// set cookie current address
Vue.prototype.$setCategoryIds = (category_ids) => {
  cookie.set(
    "category_ids",
    category_ids,
    Date.now() * 365 * 12 * 30 * 60 * 60
  );
};

// set cookie current address
Vue.prototype.$getCategoryIds = () => {
  return cookie.get("category_ids");
};

// remove cookie current address
Vue.prototype.$removeCategoryIds = () => {
  return cookie.delete("category_ids");
};

// set cookie current address
Vue.prototype.$setCart = (cart) => {
  cookie.set(
    "cart",
    JSON.stringify(cart),
    Date.now() * 365 * 12 * 30 * 60 * 60
  );
};

// set cookie current address
Vue.prototype.$getCart = () => {
  return JSON.parse(cookie.get("cart"));
};

// remove cookie current address
Vue.prototype.$removeCart = () => {
  return cookie.delete("cart");
};
