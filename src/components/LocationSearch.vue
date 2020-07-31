<template>
  <div class="location-form-wrap">
    <form class="location-form">
      <input
        v-on:keyup="handleLocationEntered"
        class="form-control"
        type="text"
        placeholder="Enter Your Location"
        v-bind:value="keyUp"
      />
      <div class="location-btn-wrap d-flex align-items-center">
        <button
          v-if="keyUp.length === 0"
          v-on:click="getCurrentLocation"
          class="current-location-btn"
        >
          <img src="../assets/target.svg" alt="Crosshair Locate Me Icon" width="14" />
          Locate Me
          <!-- <i class="icofont-location-arrow"></i> -->
        </button>
        <button v-else v-on:click="handleFormClear" class="current-location-btn">clear</button>
        <button class="btn btn-lg btn-orange d-lg-block">Find Food</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      keyUp: "",
    };
  },
  methods: {
    handleLocationEntered: function (e) {
      this.keyUp = e.target.value;
    },
    handleFormClear: function (e) {
      e.preventDefault();
      this.keyUp = "";
      console.log(this.keyUp.length);
    },
    getCurrentLocation: function (e) {
      e.preventDefault();
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
      });
    },
  },
};
</script>
