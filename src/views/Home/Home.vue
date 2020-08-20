<template>
  <div class="root">
    <div class="home">
      <div class="banner">
        <div class="search-wraps single-search pt-5 mt-5">
          <h1 class="display-5 py-2">Find restaurants near you</h1>
          <p>Order Delivery Food Online From Local Restaurants</p>
          <!-- <Search /> -->
          <LocationSearch />
        </div>
      </div>
    </div>
    <PopularRestaurants />
    <FoodNearMe />
    <StoreSection />
  </div>
</template>

<script>
const FoodNearMe = () => import("./FoodNearMe.vue");
const LocationSearch = () => import("@/components/global/LocationSearch.vue");
const PopularRestaurants = () => import("./PopularRestaurants.vue");
const StoreSection = () => import("./StoreSection.vue");

export default {
  name: "home",
  components: {
    LocationSearch,
    StoreSection,
    PopularRestaurants,
    FoodNearMe
  },
  beforeMount: async function() {
    const status = await this.$checkLocationPermissionStatus();
    if (status == "granted" || status == "prompt") {
      let latitude = this.$getLatitude();
      let longitude = this.$getLongitude();
      if (latitude & longitude) {
        this.$router.push("category");
      }
    }
  }
};
</script>
