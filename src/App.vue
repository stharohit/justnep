<template>
  <fragment>
    <vue-topprogress ref="topProgress" color="#f6682e"></vue-topprogress>
    <div id="app">
      <Navbar v-bind:addActive="this.addActive"></Navbar>
      <div :class="{ active: !isHidden }">
        <div class="overlay" v-on:click="addActive"></div>
        <transition name="slide-right-left" key="2">
          <Login v-if="!isHidden" v-bind:addActive="this.addActive" />
        </transition>
      </div>
      <router-view />
      <Footer />
    </div>
  </fragment>
</template>

<script>
import { vueTopprogress } from "vue-top-progress";
const Login = () => import("@/components/Login.vue");
const Navbar = () => import("@/components/global/Navbar.vue");
const Footer = () => import("./components/global/Footer.vue");
export default {
  data() {
    return {
      isHidden: true
    };
  },
  methods: {
    addActive() {
      this.isHidden = !this.isHidden;
    },
    debug() {
      var curr = window.location.pathname; // eslint-disable-line
      console.log(curr); // eslint-disable-line no-console
    }
  },
  components: {
    Login,
    Navbar,
    vueTopprogress,
    Footer
  },
  computed: {
    progressBar() {
      return this.$store.getters.progress;
    }
  },
  watch: {
    progressBar(newprogress) {
      if (newprogress) {
        this.$refs.topProgress.start();
      } else {
        this.$refs.topProgress.done();
      }
    }
  }
};
</script>

<style lang="scss">
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all ease-in-out 0.5s;
}

.active .overlay {
  visibility: visible;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
    .fade-leave-to

        /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-right-left-enter-active,
.slide-right-left-leave-active {
  transform: translateX(0) !important;
  transition: transform 0.5s;
  overflow: hidden;
}

.slide-right-left-enter,
.slide-right-left-leave-to {
  transform: translateX(100%) !important;
  transition: transform 0.5s;
  overflow: hidden;
}

#app {
  background: #ffffff;
}
</style>
