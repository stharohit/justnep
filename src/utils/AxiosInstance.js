import Vue from "vue";
import axios from "axios";

Vue.prototype.$apiInstance = axios.create({
  baseURL: "https://nextgator.com/public/api/"
});
