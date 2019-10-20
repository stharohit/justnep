<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-between">
      <div class="bar" v-on:click="myFilter " :class="{ active: isActive }">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </div>
      <div
        :class="{ active: isActive }"
        class="w-10"
        style="
      
          height: 100vh;
          background: rgb(246, 104, 46);
          top: 0;
          left:0;
          position: absolute;
          bottom: 0;
          "
      >
        <transition name="fade">
          <div class="show_hide--menu d-flex flex-column align-items-center" v-if="isActive">
            <router-link to="/about">Home</router-link>
            <router-link to="/about">Browse</router-link>
            <router-link to="/about">Contact</router-link>
            <router-link to="/about">About</router-link>
          </div>
        </transition>
      </div>
      <router-link to="/">
        <img alt="Vue logo" src="./assets/justnep.svg" style=" width: 180px;" />
      </router-link>

      <div class="nav-link">
        <button class="btn-orange px-4 py-2 mx-1" v-on:click="addActive ">Login</button>
        <button class="btn-orange px-4 py-2" v-on:click="addActive ">Sign Up</button>
        <!-- <router-link to="/about" class="btn-orange">Become a Rider</router-link> -->
      </div>
    </div>
    <div v-if="!isHidden" :class="{ active: !isHidden }">
      <Login />
    </div>
    <router-view />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
export default {
  components: {
    Login
  },

  data() {
    return {
      isActive: false,
      isHidden: true
    };
  },

  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    },
    addActive() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style lang="scss">
.active .overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

#app {
  background: #000000;
  overflow: hidden;

  .w-10 {
    width: calc(100vw / 12 - 50px);
    transition: width 0.5s;
  }

  .w-10.active {
    width: calc(100vw / 12) !important;
    transition: width 0.5s;
  }

  .bar {
    position: absolute;
    left: 0;
    padding: 10px 12px;
    z-index: 2;

    span {
      width: 30px;
      height: 2px;
      background: #fff;
      display: block;
      margin: 5px 0;
      transition: all ease 0.4s;
    }

    span.second {
      width: 40px !important;
    }

    &.active span.second {
      width: 0 !important;
    }

    &.active span.first {
      transform: rotate(45deg) translate(10px);
    }

    &.active span.third {
      transform: rotate(-45deg) translate(10px);
    }
  }

  .show_hide--menu {
    position: absolute;
    top: 100px;
    left: 0;

    a {
      padding: 20px !important;
    }
  }

  #nav {
    padding: 11px 100px;
    position: relative;
    z-index: 1;

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
}
</style>