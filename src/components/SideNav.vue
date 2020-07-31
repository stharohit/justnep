<template lang="">
    <div
        :class="{ active: isActive }"
        class="w-10"
     >
        <div class="bar" v-on:click="myFilter " :class="{ active: isActive }">
          <span class="first"></span>
          <span class="second"></span>
          <span class="third"></span>
        </div>
        <transition name="fade">
          <div
            key="1"
            class="show_hide--menu d-flex flex-column align-items-center"
            v-if="isActive"
          >
            <router-link to="/">Home</router-link>
            <router-link to="/category">Browse</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/about">About</router-link>
          </div>
        </transition>
      </div>
</template>
<script>
export default {
  name: "sideNav",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
      // some code to filter users
    },
  },
};
</script>
<style lang="scss" scoped>
.w-10 {
  width: 65px;
  transition: width 0.5s;
  height: 100vh;
  background: rgb(246, 104, 46);
  top: 0;
  left: 0;
  position: absolute;
  bottom: 0;
}

.w-10.active {
  width: calc(100% / 4);
  transition: width 0.5s;
}
@media only screen and (max-width: 575px) {
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
    width: 40px;
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
  width: 100%;

  a {
    padding: 20px !important;
  }
}
</style>
