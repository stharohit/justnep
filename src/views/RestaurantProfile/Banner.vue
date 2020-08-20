<template>
  <fragment>
    <div
      class="profile-banner-wrap"
      :style="{ backgroundImage: `url('${banner}')` }"
      v-if="profileInfo"
    >
      <b-card :title="profileInfo.name" tag="article" class="profile-card">
        <b-card-text>
          <span
            >{{ profileInfo.delivery_time }} min Delivery Time. Rating:
            {{ profileInfo.rating }}<i class="icofont-star"></i>
            &nbsp;
          </span>
          <p>{{ profileInfo.address }} - {{ profileInfo.pincode }}</p>
          <p>{{ profileInfo.description }}</p>
        </b-card-text>
      </b-card>
    </div>
  </fragment>
</template>

<script>
import banner from "@/assets/banner.png";
export default {
  title: "Banner",
  data() {
    return {
      banner: null,
      profileInfo: null
    };
  },
  methods: {
    async getProfileInfo() {
      let slug = this.$route.params.slug;
      this.profileInfo = await this.$getProfileInfo(slug);
    }
  },
  mounted() {
    this.banner = banner;
    this.getProfileInfo();
  }
};
</script>

<style lang="scss" scoped>
.profile-banner-wrap {
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.profile-card {
  position: absolute;
  left: 0;
  width: 500px;
  padding-left: 60px;
  top: 70px;
}
</style>
