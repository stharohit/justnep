<template>
  <fragment>
    <div class="food-category">
      <div class="col-11 m-auto p-0">
        <scrollactive class="my-nav" active-class="active" :offset="150">
          <a href="#recommended" class="scrollactive-item">
            Recommended
          </a>
          <a
            v-for="(foodItem, index) in foodItems.items"
            v-bind:key="index"
            :href="'#' + addId(index)"
            class="scrollactive-item"
          >
            {{ index }}
          </a>
        </scrollactive>
      </div>
    </div>
    <div class="col-11 m-auto p-0">
      <div class="food-items-wraps">
        <FoodItems
          v-if="foodItems.recommended.length > 0"
          :items="foodItems.recommended"
          scrollId="recommended"
          title="Recommended"
        />
        <FoodItems
          v-for="(foodItem, index) in foodItems.items"
          v-bind:key="index"
          :items="foodItem"
          :scrollId="addId(index)"
          :title="index"
        />
      </div>
    </div>
  </fragment>
</template>

<script>
import FoodItems from "./FoodItems.vue";
export default {
  title: "Food Category",
  components: { FoodItems },
  data() {
    return {
      // foodCategory: null
    };
  },
  props: ["foodItems"],
  methods: {
    addId(index) {
      let clean = index.replace(/[^a-zA-Z ]/g, "");
      let id = clean
        .split(" ")
        .join("_")
        .toLowerCase();
      return id;
    }
  }
};
</script>

<style lang="scss" scoped>
.food-category {
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
  font-size: 16px;

  .col-11 {
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  }

  a {
    color: #444;
    text-decoration: none;
    display: inline-block;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-right: 15px;
    cursor: pointer;

    &.active {
      border-bottom: 1px solid #444;
    }
  }

  a:not(:last-child) {
    margin-right: 15px;
  }
}
.food-items-wraps {
  padding: 50px 0;
}
</style>
