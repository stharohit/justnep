<template>
  <fragment>
    <div v-if="foods" class="container col-11 m-auto py-2">
      <h1 class="title">Food Near Me</h1>
      <div class="food-near-list-wrap d-flex">
        <div
          class="col-2 mb-5 food-card"
          v-for="food in foods"
          v-bind:key="food.id"
        >
          <div class="home-food-image">
            <img :src="url + food.image" :alt="food.name" />
          </div>
          <h5>{{ food.name }}</h5>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  title: "Food Near By",
  data() {
    return {
      foods: null,
      url: "https://project.justnep.com/"
    };
  },
  methods: {
    async getFoodNearBy() {
      this.foods = await this.$getCuisine();
    }
  },
  mounted() {
    this.getFoodNearBy();
  }
};
</script>

<style lang="scss" scoped>
.food-near-list-wrap {
  overflow: auto;
  text-align: center;

  &::-webkit-scrollbar {
    display: none;
  }

  .home-food-image {
    border-radius: 50%;
    overflow: hidden;
    background-color: #f7f7f7;
    margin-bottom: 15px;

    img {
      width: 100%;
    }
  }
}
</style>
