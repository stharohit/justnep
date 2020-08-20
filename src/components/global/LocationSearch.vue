<template>
  <div class="location-form-wrap">
    <div class="location-form">
      <input
        v-on:keyup="handleLocationEntered"
        class="form-control"
        type="text"
        placeholder="Enter Your Location"
        :value="location"
        id="searchLocation"
      />
      <div id="location-mapping">
        <b-list-group>
          <b-list-group-item v-if="!locationEnabled" variant="danger"
            >You have disabled location access. Please enable it and try
            again.</b-list-group-item
          >
          <b-list-group-item
            v-if="locationEnabled && locationNotSet"
            variant="warning"
            >Please select the desired location or just press locate me to get
            your current location.</b-list-group-item
          >
        </b-list-group>
      </div>
      <div class="location-btn-wrap d-flex align-items-center">
        <!-- get current location -->
        <button
          type="button"
          v-if="location.length === 0 && !locationLoading"
          v-on:click="getLatLong"
          class="current-location-btn"
        >
          <img
            src="@/assets/target.svg"
            alt="Crosshair Locate Me Icon"
            width="14"
          />
          Locate Me
        </button>
        <!-- get current location -->

        <!-- clear typed location -->
        <button
          type="button"
          v-else-if="!locationLoading"
          v-on:click="handleFormClear"
          class="current-location-btn"
        >
          clear
        </button>
        <!-- clear typed location -->

        <!-- spinner on getting current location -->
        <b-spinner
          v-else
          variant="primary"
          type="grow"
          label="Spinning"
        ></b-spinner>
        <!-- spinner on getting current location -->

        <button
          v-on:click="handleFindRestaurants"
          type="button"
          class="btn btn-lg btn-orange d-lg-block"
        >
          Find Food
        </button>
      </div>
    </div>
    <div class="popular-places pt-4">
      <h5 class="mb-2">Popular Cities</h5>
      <b-badge
        pill
        aria-si
        href="#"
        class="p-2 mr-3"
        v-for="popular in popularPlaces"
        :key="popular.id"
        v-on:click="
          setCustomLocation(popular.latitude, popular.longitude, popular.name)
        "
        >{{ popular.name }}</b-badge
      >
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      locationLoading: false,
      location: "",
      locationEnabled: true,
      locationNotSet: null,
      popularPlaces: null,
      places: null,
      autoComplete: null
    };
  },
  methods: {
    handleClearCookies() {
      this.$removeLatitude();
      this.$removeLongitude();
      this.$removeCurrentAddress();
    },
    handleLocationEntered: function(event) {
      event.preventDefault();
      this.locationEnabled = true;
      this.handleClearCookies();
      this.locationNotSet = false;
      this.location = event.target.value;
    },
    handleFormClear: function(e) {
      e.preventDefault();
      this.location = "";
      this.handleClearCookies();
    },
    getPlacesList: function() {
      let input = document.getElementById("searchLocation");
      let options = {
        componentRestrictions: { country: "np" }
      };
      this.autoComplete = new window.google.maps.places.Autocomplete(
        input,
        options
      );
      this.autoComplete.addListener("place_changed", this.fillInAddress);
    },
    fillInAddress: function() {
      let place = this.autoComplete.getPlace();
      if (place) {
        this.$setLatitude(place.geometry.location.lat());
        this.$setLongitude(place.geometry.location.lng());
        this.$setCurrentAddress(place.formatted_address);
      }
    },
    handleFindRestaurants: async function() {
      let latitude = this.$getLatitude();
      let longitude = this.$getLongitude();
      let currentAddress = this.$getCurrentAddress();
      if (this.location.length > 0 && latitude && longitude && currentAddress) {
        if (location.pathname === "/") {
          this.$router.push("/category");
        } else {
          this.$bvModal.hide("modal-location");
          let restaurants = await this.$getFilteredRestaurants(
            this.$store.getters.selectedCuisine
          );
          console.log(restaurants);
          this.$store.dispatch({
            type: "storeRestaurantsCategory",
            category: restaurants
          });
        }
      } else {
        this.locationNotSet = true;
      }
    },
    // from latitude and longitude
    getCurrentLocation: async function(latitude, longitude) {
      let address = await this.$coordinateToAddress(latitude, longitude);
      if (typeof address === "string") {
        this.location = address;
        this.locationLoading = false;
        this.$setLatitude(latitude);
        this.$setLongitude(longitude);
        this.$setCurrentAddress(address);
      }
    },
    // check permission and get latitude and longitude to check location area
    getLatLong: async function(e) {
      e.preventDefault();
      const status = await this.$checkLocationPermissionStatus();
      if (!status || status == "denied") {
        this.locationEnabled = false;
      } else {
        this.locationLoading = true;
        this.locationNotSet = false;
        const geoPosition = await this.$currentGeoPosition();
        this.getCurrentLocation(
          geoPosition.coords.latitude,
          geoPosition.coords.longitude
        );
      }
    },
    getPopularPlaces: async function() {
      const places = await this.$getPopularGeoLocation();
      this.popularPlaces = places;
    },
    setCustomLocation: async function(latitude, longitude, name) {
      console.log(name);
      this.$store.dispatch({
        type: "storeRestaurantsCategory",
        category: null
      });
      this.$setLatitude(latitude);
      this.$setLongitude(longitude);
      this.$setCurrentAddress(name);
      if (location.pathname === "/") {
        this.$router.push("/category");
      } else {
        this.$bvModal.hide("modal-location");
        let restaurants = await this.$getFilteredRestaurants(
          this.$store.getters.selectedCuisine
        );
        this.$store.dispatch({
          type: "storeRestaurantsCategory",
          category: restaurants
        });
      }
    }
  },
  mounted() {
    this.getPopularPlaces();
    this.$placesInitialization.then(() => {
      this.getPlacesList();
    });
  }
};
</script>
