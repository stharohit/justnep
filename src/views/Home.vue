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
    <div class="container-fluid py-5">
      <h1 class="text-center">Popular Restaurants</h1>
      <Resturants />
    </div>
    <StoreSection />
    <Footer />
  </div>
</template>

<script>
const Footer = () => import("../components/global/Footer.vue");
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
    Footer,
  },
  data() {
    return {};
  },
  created() {
    // console.log(this);
  },
};
</script>
