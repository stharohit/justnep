<template>
  <fragment>
    <header :class="fixed ? 'fixed' : ''">
      <div class="container-fluid col-11 m-auto p-0">
        <div id="navbar" class="d-flex align-items-center">
          <router-link to="/">
            <div class="logo">
              <img alt="Vue logo" src="@/assets/logo.png" />
            </div>
          </router-link>

          <div v-if="!fixed" class="nav-location" v-b-modal.modal-location>
            <i class="icofont-location-pin"></i>&nbsp;
            <input
              type="text"
              :value="address ? address : 'Find Restaurants Near By'"
              id="addressInput"
              disabled
            />
            <!-- location modal -->
            <b-modal id="modal-location" size="lg" hide-header hide-footer>
              <LocationSearch />
            </b-modal>

            <!-- location modal -->
          </div>

          <div class="flex-fill"></div>

          <div class="nav-link">
            <!-- <Search/> -->
            <button class="btn px-4 py-2 mx-1" v-on:click="addActive">
              <span class="d-sm-block d-none"
                ><i class="icofont-user-alt-7"></i> Login</span
              >
            </button>
            <button class="btn px-4 py-2 no-wrap">
              <span class="d-sm-block d-none"
                ><i class="icofont-fast-food"></i> Sign Up</span
              >
            </button>
            <div class="position-relative">
              <button class="btn px-4 py-2 mx-1" v-on:click="addActive">
                <img :src="cartimg" alt="justnep cart" width="25px" />
              </button>
              <div class="cart-item-count"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </fragment>
</template>
<script>
import LocationSearch from "@/components/global/LocationSearch.vue";
import cartimg from "@/assets/smart-cart.svg";
// import Search from "@/components/Search";

export default {
  name: "navbar",
  props: {
    addActive: {
      type: Function
    }
  },
  data() {
    return {
      fixed: true,
      address: null,
      cartimg: cartimg
    };
  },
  components: {
    LocationSearch
  },
  methods: {},
  mounted() {
    this.address = this.$getCurrentAddress();
    location.pathname === "/" ? (this.fixed = true) : (this.fixed = false);
  },
  computed: {
    currentAddress() {
      return this.$store.getters.currentAddress;
    }
  },
  watch: {
    $route() {
      location.pathname === "/" ? (this.fixed = true) : (this.fixed = false);
    },
    currentAddress(newAddress) {
      this.address = newAddress;
    }
  }
};
</script>
<style lang="scss">
header {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.3);

  &.fixed {
    position: fixed;
    width: 100%;
    z-index: 99999;
  }
}
#navbar {
  z-index: 1;
  transition: box-shadow 0.2s, background 0.3s;
  z-index: 9999;
  padding: 15px 0;

  &.fixedOnScroll {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  .logo {
    max-width: 140px;
    min-width: 100px;
    img {
      width: 100%;
    }
  }
  a {
    color: #eee;
    padding: 0px 20px;
    margin-right: 10px;

    .router-link-exact-active {
      color: #fff;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 0;

    a {
      padding: 10px 20px;
    }
  }
}
#addressInput {
  border: none;
  cursor: pointer;

  &:disabled {
    background: none;
  }
}
.nav-location {
  font-size: 20px;
  margin-top: 14px;
}
</style>
