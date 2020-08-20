<template>
  <div class="col-11 m-auto">
    <div class="food-items">
      <div
        class="food-item"
        v-for="cuisine in cuisines"
        v-bind:key="cuisine.id"
        v-on:click="setFilters(cuisine.id)"
        :class="isActiveCuisine(cuisine.id)"
      >
        <div class="food-item-img">
          <img :src="url + cuisine.image" :alt="cuisine.name" />
        </div>
        <div class="food-item-name">{{ cuisine.name }}</div>
      </div>
    </div>
  </div>
</template>
v-bind
<script>
export default {
  name: "resturantfilter",
  data() {
    return {
      cuisines: [],
      category_ids: [],
      limit: 5,
      url: "https://project.justnep.com/"
    };
  },
  methods: {
    async getCuisines() {
      var cuisines = await this.$getCuisine();
      this.$store.dispatch({
        type: "storeCuisine",
        cuisines: cuisines
      });
      this.cuisines = this.$store.getters.cuisines;
    },
    limited() {
      if (this.limit < this.cuisines.length) {
        this.limit = this.cuisines.length;
      } else {
        this.limit = 5;
      }
    },
    async getFilteredRestaurants(ids) {
      let filteredRestaurants = await this.$getFilteredRestaurants(ids);
      this.$store.dispatch({
        type: "storeRestaurantsCategory",
        category: filteredRestaurants
      });
      return;
    },
    async setFilters(id) {
      let ids = this.category_ids;
      let index = ids.indexOf(id);
      if (index !== -1) {
        ids.splice(index, 1);
      } else {
        ids.push(id);
      }
      this.$store.dispatch({
        type: "storeSelectedCuisine",
        id: ids
      });
      this.getFilteredRestaurants(ids);
    },
    isActiveCuisine(id) {
      let ids = this.category_ids;
      let active = ids.indexOf(id);
      if (active !== -1) return "active";
      return "";
    }
  },
  mounted() {
    this.getCuisines();
  },
  computed: {
    selectedCuisine() {
      return this.$store.getters.selectedCuisine;
    }
  },
  watch: {
    selectedCuisine(newCuisine) {
      this.category_ids = newCuisine;
    }
  }
};
</script>

<style scoped lang="scss">
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
  justify-content: flex-start;
  overflow: hidden;
  transition: height 1s;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;

  .food-item {
    padding: 0 15px;
    font-size: 15px;
    text-align: center;
    border-radius: 4px;
    margin-right: 15px;
    margin-top: 15px;
    cursor: pointer;

    .food-item-img img {
      width: 40px;
    }

    &.active {
      background: #f6682e;
      color: #ffffff;
    }

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
</style>
