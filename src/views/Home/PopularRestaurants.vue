<template>
  <fragment>
    <div v-if="featured" class="container col-11 m-auto py-2">
      <h1 class="title">Featured Restaurants</h1>
      <div class="featured-restaurants-list-wrap d-flex">
        <div
          class="col-4 mb-5 featured-card"
          v-for="feature in featured"
          v-bind:key="feature.id"
        >
          <div class="featured-restaurant-wrap">
            <a href="">
              <div class="home-featured-image">
                <img
                  :src="url + feature.image"
                  :alt="feature.name"
                  class="w-100"
                />
              </div>
              <div class="d-flex flex-row p-2 align-items-center">
                <div class="home-feature-left-text">
                  <h5 v-html="feature.name"></h5>
                  <p>
                    Delivery TIme : <span>{{ feature.delivery_time }}</span>
                  </p>
                </div>
                <p class="home-feature-right-text">{{ feature.rating }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <RestaurantCardSkeleton v-else />
  </fragment>
</template>

<script>
import RestaurantCardSkeleton from "../../components/Skeleton/RestaurantCardSkeleton.vue";
export default {
  components: { RestaurantCardSkeleton },
  data() {
    return {
      featured: "",
      url: "https://project.justnep.com"
    };
  },
  methods: {
    async getFeaturedRestaurants() {
      let featuredRes = await this.$getDeliveryRestaurants(
        27.70983495,
        85.31334203
      );
      let limit = 6;
      let FilteredFeatured = featuredRes.filter((data) => {
        if (limit > 0) {
          limit--;
          return data.is_featured === 1;
        }
      });
      this.featured = FilteredFeatured;
    }
  },
  mounted() {
    this.getFeaturedRestaurants();
  }
};
</script>

<style lang="scss" scoped>
.featured-restaurants-list-wrap {
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
.home-featured-image {
  height: 290px;
  overflow: hidden;
  margin-bottom: 15px;
}
.featured-card a {
  color: #444;

  .home-feature-left-text {
    flex: 1;
    margin: 0;

    h5 {
      margin: 0;
    }

    p {
      font-size: 14px;
      margin-bottom: 0;
      color: #666;
    }
  }
  .home-feature-right-text {
    width: 30px;
    height: 30px;
    background-color: #f6682e;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
}
</style>
