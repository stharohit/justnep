import Vue from "vue";

Vue.prototype.$setProgressTrue = function() {
  this.$store.dispatch({
    type: "setProgress",
    progress: true
  });
};

Vue.prototype.$setProgressFalse = function() {
  this.$store.dispatch({
    type: "setProgress",
    progress: false
  });
};
