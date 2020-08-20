<template>
  <div class="promo-banner-wrap">
    <div class="container-fluid col-11 m-auto h-100 py-4">
      <div class="d-flex align-items-center h-100">
        <div class="col-md-4 promo1">
          <h1>Crave it? Get it?</h1>
          <p>Search for favorite restaurant, cuisine or dish.</p>
        </div>
        <div
          class="col-md-4 promo2 h-100"
          :style="{
            backgroundImage: `url('${promo1}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }"
        ></div>
        <div class="col-md-4 h-100 promo3">
          <img src="@/assets/promo_2.jpg" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import promo1 from "@/assets/promo.jpg";
export default {
  data() {
    return {
      promo1
    };
  }
};
</script>

<style lang="scss" scoped>
.promo-banner-wrap {
  height: 300px;
  background: #aa3600;
}
.promo1 {
  h1 {
    color: #f7f7f7;
  }
  p {
    color: #f7f7f7;
  }
}
.promo2 {
  overflow: hidden;
}
.promo3 {
  overflow: hidden;
}
</style>
