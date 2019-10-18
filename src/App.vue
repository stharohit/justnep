<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-between">
        <router-link to="/">
          <img alt="Vue logo" src="./assets/logo.png" style="
    width: 180px;
" />
        </router-link>
     
      <div class="nav-link">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  background: #000000;
  overflow: hidden;
  #nav {
    padding: 10px 100px;
    position: relative;
    z-index: 1;
    a{
      color: #eee;
  .router-link-exact-active{
color: #fff;
  }
    }

  }
}
</style>
