<template>
  <fragment>
    <div class="col-11 m-auto">
      <div
        v-if="restaurants && restaurants.length > 0"
        class="resturant-outlet"
      >
        <div class="row">
          <div
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            class="col-md-4 col-sm-6 resturant-col"
          >
            <router-link
              :to="'/profile/' + restaurant.slug"
              class="resturant-card"
            >
              <figure class="resturant-image">
                <img
                  v-if="!restaurant.cardImage"
                  src="@/assets/default_dp.jpg"
                  :alt="restaurant.name"
                />
                <img
                  v-else
                  :src="url + restaurant.image"
                  :alt="restaurant.name"
                />
              </figure>
              <div class="data-container">
                <!-- <figure class="resturant-logo">
                <img :src="url + restaurant.image" alt />
              </figure> -->
                <div class="name-container">
                  <div class="resturant-name">{{ restaurant.name }}</div>
                  <div class="resturant-cursine">
                    <!-- <span
                    v-for="(x, index) in element.cuisine.slice(0, 3)"
                    :key="index"
                    >{{ x.cuisine_name }} -</span
                  >-->
                  </div>
                </div>
              </div>
              <hr />
              <div class="card-bottom">
                <div class="review">
                  <i class="icofont-star"></i>&nbsp;
                  <span class="review-number">{{ restaurant.rating }}</span>
                </div>
                <div class="like-btn">
                  <!-- <span class="like-number">{{ element.likeCount }}</span> -->
                  <button>
                    <i class="icofont-heart"></i>
                  </button>
                </div>
                <div
                  class="status status--open"
                  v-if="restaurant.is_active === 1"
                >
                  <span>Open</span>
                </div>
                <div class="status status--closed" v-else>
                  <span>Closed</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else class="resturant-outlet">We do not serve in your area.</div>
    </div>
  </fragment>
</template>

<script>
// import { resturants } from "../../data/data";
// import Scroll from "@/components/global/Scroll-Loader";

export default {
  name: "resturants",
  data() {
    return {
      restaurants: null,
      url: "https://project.justnep.com/"
    };
  },
  mounted() {
    this.restaurants = this.$store.getters.restaurantsCategory;
  },
  computed: {
    restaurantsCategory() {
      return this.$store.getters.restaurantsCategory;
    }
  },
  watch: {
    restaurantsCategory(newC) {
      this.restaurants = newC;
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
      text-decoration: none;
      transform: translateY(-5px);
      box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.14);
    }
  }

  &-image {
    overflow: hidden;
    border-radius: 3px;
    height: 300px;
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
