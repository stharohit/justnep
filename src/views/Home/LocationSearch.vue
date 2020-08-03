<template>
  <div class="location-form-wrap">
    <form class="location-form">
      <input
        v-on:keyup="handleLocationEntered"
        class="form-control"
        type="text"
        placeholder="Enter Your Location"
        v-bind:value="location"
      />
      <div class="location-btn-wrap d-flex align-items-center">
        <!-- get current location -->
        <button
          v-if="location.length === 0 && !locationLoading"
          v-on:click="getCurrentLocation"
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

        <button class="btn btn-lg btn-orange d-lg-block">Find Food</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      locationLoading: false,
      location: ""
    };
  },
  methods: {
    handleLocationEntered: function(e) {
      this.location = e.target.value;
    },
    handleFormClear: function(e) {
      e.preventDefault();
      this.location = "";
    },
    getCurrentLocation: function(e) {
      this.locationLoading = true;
      e.preventDefault();
      navigator.geolocation.getCurrentPosition((pos) => {
        this.$apiInstance
          .post("/coordinate-to-address", {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
          .then((data) => {
            this.location = data.data;
            this.locationLoading = false;
          })
          .catch((err) => {
            console.log(err);
            this.locationLoading = false;
          });
      });
    }
  }
};
</script>
