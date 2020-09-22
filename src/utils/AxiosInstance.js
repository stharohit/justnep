import Vue from 'vue';
import axios from 'axios';

// register an instance of api
Vue.prototype.$apiInstance = axios.create({
  baseURL: 'https://project.justnep.com/public/api/',
});

// Mount initial Settings
Vue.prototype.$getInitialSettings = async function() {
  let settings;
  await this.$apiInstance
    .post('/get-settings')
    .then((data) => {
      settings = data;
    })
    .catch((err) => console.log(err));
  return settings;
};

// get the coordinate or place name
Vue.prototype.$coordinateToAddress = async function(latitude, longitude) {
  let address;
  await this.$apiInstance
    .post('/coordinate-to-address', {
      lat: latitude,
      lng: longitude,
    })
    .then((data) => {
      address = data.data;
    })
    .catch((err) => {
      address = err;
    });
  return address;
};

// Get Deliver restaurants
Vue.prototype.$getDeliveryRestaurants = async function(latitude, longitude) {
  var restaurants;
  await this.$apiInstance
    .post('/get-delivery-restaurants', {
      latitude: latitude,
      longitude: longitude,
    })
    .then((data) => {
      restaurants = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return restaurants;
};

// Get popular location
Vue.prototype.$getPopularGeoLocation = async function(latitude, longitude) {
  var popularPlaces;
  await this.$apiInstance
    .post('/popular-geo-locations', {
      latitude: latitude,
      longitude: longitude,
    })
    .then((data) => {
      popularPlaces = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return popularPlaces;
};

// First Initialize google place library
Vue.prototype.$placesInitialization = new Promise((resolve) => {
  window['GoogleMapsInit'] = resolve;

  let GMap = document.createElement('script');

  GMap.setAttribute(
    'src',
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9KbAdZfEFI8vk8QFmRlqT3zX388QnxKc&callback=GoogleMapsInit&libraries=places`,
  );

  document.body.appendChild(GMap);
});

// Restaurants Cuisine Category
Vue.prototype.$getCuisine = async function() {
  var cuisine;
  await this.$apiInstance
    .post('/get-restaurant-category-slides')
    .then((data) => {
      cuisine = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return cuisine;
};

// Restaurants Cuisine Category
Vue.prototype.$getFilteredRestaurants = async function(category_ids) {
  this.$setProgressTrue();
  var filteredRestaurants;
  let latitude = this.$getLatitude();
  let longitude = this.$getLongitude();
  if (category_ids && category_ids.length > 0) {
    await this.$apiInstance
      .post('/get-filtered-restaurants', {
        category_ids: category_ids,
        latitude: latitude,
        longitude: longitude,
      })
      .then((data) => {
        filteredRestaurants = data.data;
        this.$setProgressFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    filteredRestaurants = await this.$getDeliveryRestaurants(
      latitude,
      longitude,
    );
    this.$setProgressFalse();
  }
  return filteredRestaurants;
};

// Restaurant Profile Info
Vue.prototype.$getProfileInfo = async function(slug) {
  let profileInfo;
  await this.$apiInstance
    .post(`get-restaurant-info/${slug}`)
    .then((data) => {
      profileInfo = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return profileInfo;
};

// Restaurant Food Item
Vue.prototype.$getFoodItemsBySlug = async function(slug) {
  let foodItems;
  await this.$apiInstance
    .post(`get-restaurant-items/${slug}`)
    .then((data) => {
      foodItems = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return foodItems;
};

// Restaurant Food Item
Vue.prototype.$checkCartItemsAvailability = async function(cart) {
  let cartCheck;
  await this.$apiInstance
    .post(`check-cart-items-availability`, {
      items: cart,
    })
    .then((data) => {
      cartCheck = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return cartCheck;
};
