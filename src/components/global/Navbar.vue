<template>
  <div
    id="navbar"
    class="d-flex justify-content-between"
    v-bind:class="{ 'fixed-top': fixed, fixedOnScroll: fixedOnScroll }"
  >
    <router-link to="/">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
    </router-link>

    <div class="nav-link">
      <!-- <Search/> -->
      <button class="btn-orange px-4 py-2 mx-1" v-on:click="addActive">
        <span class="d-sm-block d-none">Login</span>
        <span class="d-sm-none d-block">
          <i class="icofont-user-alt-7"></i>
        </span>
      </button>
      <button class="btn-orange px-4 py-2 no-wrap">
        <span class="d-sm-block d-none">Sign Up</span>
        <span class="d-sm-none d-block">
          <i class="icofont-fast-food"></i>
        </span>
      </button>
      <!-- <router-link to="/about" class="btn-orange">Become a Rider</router-link> -->
    </div>
  </div>
</template>
<script>
// import Search from "@/components/Search";
export default {
  name: "navbar",
  props: {
    addActive: {
      type: Function,
    },
  },
  data() {
    return {
      fixed: true,
      fixedOnScroll: false,
    };
  },
  components: {
    // Search
  },
  watch: {
    $route() {
      this.$route.path === "/" ? (this.fixed = true) : (this.fixed = false);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      window.scrollY > 100
        ? (this.fixedOnScroll = true)
        : (this.fixedOnScroll = false);
    },
  },
};
</script>
<style lang="scss">
#navbar {
  padding: 15px;
  z-index: 1;
  transition: box-shadow 0.2s, background 0.3s;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  z-index: 9999;

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
</style>
