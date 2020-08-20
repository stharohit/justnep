import Vue from "vue";

// checks location permission enabled or denied
Vue.prototype.$checkLocationPermissionStatus = async function() {
  var status;
  await Promise.resolve(
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function(PermissionStatus) {
        status = PermissionStatus.state;
      })
  );
  return status;
};

// returns current geo position
Vue.prototype.$currentGeoPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
