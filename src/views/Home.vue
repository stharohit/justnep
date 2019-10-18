<template>
  <div class="home d-flex justify-content-between">
    <div class="left-side">
   
      <div class="search-wraps single-search pt-5 mt-5">
        <h1 class="display-5 py-2">Find restaurants near you</h1>
        <p>Order Delivery Food Online From Local Restaurants</p>
        <form method="GET" class="forms-search d-flex mt-5" id="forms-search" action="/searcharea">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Search food or resturant"
          />
          <button class="btn btn-lg btn-orange" style="margin-left:-10px; border-radius:0;">Search</button>
          <!--search-input-wrap-->
        </form>
      </div>
<div class="social_links">

         <a href=""> <i class="icofont-instagram"></i></a>
         <a href=""> <i class="icofont-facebook"></i></a>
         <a href=""> <i class="icofont-linkedin"></i></a>
         <a href=""> <i class="icofont-youtube"></i></a>
         <a href=""> <i class="icofont-twitter"></i></a>
        </div>
      <div class="app_links d-flex justify-content-start align-items-center">

        <div class="playstore">
            <img src="../assets/playstore.svg" alt="">
        </div>
        <div class="appstore">
          <img src="../assets/appstore.svg" alt="">
        </div>
      </div>

    </div>
    <div class="right-side">
   
        
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {}
};
</script>