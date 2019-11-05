<template>
     <div id="navbar" class="d-flex justify-content-between">
      <router-link to="/">
        <div class="logo">
         <img alt="Vue logo" src="../../assets/justnep.svg"  />
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
    name:'navbar',
     props: {
      addActive:{
          type:Function
      }
  },
    data(){
        return{

        }
    },
      components: {
    // Search
    }
 

}
</script>
<style lang="scss">
     #navbar {
    padding: 11px 100px;
    position: relative;
    z-index: 1;
    background: #333;
    .logo {
      max-width: 180px;
      min-width: 100px;
      img{
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