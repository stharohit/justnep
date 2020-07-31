<template>
  <div class="root">
    <div class="home d-flex justify-content-between">
      <div class="left-side">
        <div class="search-wraps single-search pt-5 mt-5">
          <h1 class="display-5 py-2">Find restaurants near you</h1>
          <p>Order Delivery Food Online From Local Restaurants</p>
          <!-- <Search /> -->
          <LocationSearch v-if="$isMobile()" />
        </div>
      </div>
      <div class="right-side"></div>
    </div>
    <div class="container-fluid py-5" v-if="$isMobile()">
      <h1 class="text-center">Popular Restaurants</h1>
      <Resturants />
    </div>
    <StoreSection v-if="$isMobile()" />
  </div>
</template>
<script>
const LocationSearch = () => import("@/components/LocationSearch.vue");
const Resturants = () => import("@/components/resturant/Resturants");
const StoreSection = () => import("./Home/StoreSection.vue");

export default {
  name: "home",
  components: {
    // Search,
    LocationSearch,
    Resturants,
    StoreSection,
  },
  data() {
    return {};
  },
  created() {
    // console.log(this);
  },
};
</script>
