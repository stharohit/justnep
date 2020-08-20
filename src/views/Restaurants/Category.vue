<template>
  <fragment>
    <!-- <Breadcrumb /> -->
    <PromoBanner />
    <Resturantfilter />
    <Resturants v-if="restaurantsCategory" />
    <RestaurantCardSkeleton v-else />
  </fragment>
</template>

<script>
import PromoBanner from "../../components/global/PromoBanner.vue";
import RestaurantCardSkeleton from "@/components/Skeleton/RestaurantCardSkeleton.vue";
import Resturantfilter from "./RestaurantsCategory/Resturantfilter";
import Resturants from "./RestaurantsCategory/Resturants";
export default {
  name: "Category",
  components: {
    Resturantfilter,
    Resturants,
    RestaurantCardSkeleton,
    PromoBanner
  },
  data() {
    return {
      restaurantsCategory: null
    };
  },
  beforeCreate() {
    const latitude = this.$getLatitude();
    const longitude = this.$getLongitude("longitude");
    if (!latitude && !longitude) {
      this.$router.push("/");
    }
  },
  methods: {
    async getRestaurantCategory() {
      let latitude = this.$getLatitude();
      let longitude = this.$getLongitude();
      var category = await this.$getDeliveryRestaurants(latitude, longitude);
      this.$store.dispatch({
        type: "storeRestaurantsCategory",
        category: category
      });
      this.restaurantsCategory = this.$store.getters.restaurantsCategory;
    }
  },
  mounted() {
    this.getRestaurantCategory();
  },
  computed: {
    watchRestaurantsCategory() {
      return this.$store.getters.restaurantsCategory;
    }
  },
  watch: {
    watchRestaurantsCategory(newRestaurantCategory) {
      this.restaurantsCategory = newRestaurantCategory;
    }
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}

.resturant {
  &-outlet {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &-card {
    /*background:ghostwhite;*/
    padding: 15px 10px;
    display: block;
    transition: all 0.2s ease-in-out;
    font-family: proximaReg;
    margin-bottom: 20px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.14);
    }
  }

  &-image {
    overflow: hidden;
    border-radius: 3px;
    height: 180px;
    width: 100%;

    img {
      object-fit: cover;
    }
  }

  &-logo {
    width: 50px;
    /*height: 50px;*/
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;

    img {
      height: auto;
      vertical-align: middle;
    }
  }

  &-name {
    font-size: 16px;
    font-weight: bold;
  }

  &-cursine {
    font-size: 12px;
    font-weight: normal;
  }
}

.name-container {
  line-height: 18px;
}

.data-container {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.card-bottom {
  display: flex;

  .review {
    background: #db7c38;
    /*color:#FFD700;*/
    color: white;
    padding: 2px 5px;
    font-size: 12px;

    &-number {
      color: white;
    }
  }

  .like-btn {
    margin-left: auto;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    button {
      background: transparent;
      border: none;
    }

    .like-number {
      margin-right: 3px;
    }

    i {
      font-size: 20px;
    }
  }

  .status {
    display: flex;
    align-items: center;
    color: #ffffff;
    border-radius: 3px;
    padding: 0 5px;
    margin-left: 10px;

    &--open {
      background: #5cb85c;
    }

    &--closed {
      background: #c4001d;
    }
  }
}

.category-tabs {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 5px 0;

  span {
    margin: 0 15px;
  }
}

.food-items {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  transition: height 1s;
  position: relative;

  // height: 59px;
  // &.active{
  //     height: 100%!important;
  // }
  /*animation:bounce-in .2s reverse;*/
  .food-item {
    height: 44px;
    width: calc(16.66667% - 15px);
    padding: 0 15px;
    font-size: 15px;
    border-radius: 4px;
    margin-right: 15px;
    background: #eef0f3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    cursor: pointer;

    &.active {
      background: #f6682e;
      color: #ffffff;
    }

    // transition:all .1s ease-in-out;
    /*animation: bounce-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;*/
    &.show-more {
      background: #f6682e;
      color: #ffffff;
    }
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  animation: fadein 1s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  animation: fadein 1s reverse;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

// .is-collapsed:nth-child(n+6) {
//     display: none;
// }
/*@keyframes bounce-in {*/
/*0% {*/
/*transform: scale(0);*/
/*}*/
/*100% {*/
/*transform: scale(1);*/
/*}*/
/*}*/
</style>
