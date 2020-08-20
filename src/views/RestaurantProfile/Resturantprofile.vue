<template>
  <fragment>
    <Banner />
    <FoodCategory v-if="foodItems" :foodItems="foodItems" />
  </fragment>
</template>

<script>
import FoodCategory from "./FoodCategory.vue";
import Banner from "./Banner.vue";
export default {
  title: "Restaurant Profile",
  data() {
    return {
      foodItems: null
    };
  },
  components: {
    Banner,
    FoodCategory
  },
  methods: {
    async getFoodItems() {
      this.foodItems = await this.$getFoodItemsBySlug(this.$route.params.slug);
    }
  },
  mounted() {
    this.getFoodItems();
  }
};
</script>
