<template>
  <fragment>
    <div class="food-item-title">
      {{ title }}
    </div>
    <div :id="scrollId && scrollId">
      <div class="row">
        <div class="col-4 mb-4" v-for="item in items" v-bind:key="item.id">
          <a href="javascript:void(0)" @click="openAddonCategory(item)">
            <div class="food-item-details">
              <div class="food-item-desc">
                <h5 v-html="item.name"></h5>
                <p v-html="item.desc"></p>
                <p v-html="'Rs. ' + item.price"></p>
              </div>
              <div class="food-item-image">
                <img
                  v-if="item.image"
                  :src="url + item.image"
                  :alt="item.name"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <Addons v-if="propItem" :propItem="propItem" @hideModal="onModelHidden" />
  </fragment>
</template>

<script>
import Addons from "./Addons.vue";

export default {
  components: { Addons },
  title: "Food Items List",
  data() {
    return {
      url: "https://project.justnep.com/",
      propItem: null,
      showAddon: false,
      addon_desc: null,
      selectedaddons: null
    };
  },
  props: ["items", "scrollId", "title"],
  methods: {
    openAddonCategory(item) {
      this.propItem = item;
      this.showAddon = true;
    },
    onModelHidden() {
      (this.propItem = null), (this.showAddon = false);
    }
  }
};
</script>

<style lang="scss" scoped>
.food-item-title {
  font-size: 1.6rem;
  margin-bottom: 20px;
}
.food-item-details {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  height: 100%;
  transition: 0.2s;

  &:hover {
    border-color: #444444;
  }

  .food-item-desc {
    padding: 20px;
    flex-grow: 1;
    flex: 1;

    h5 {
      color: #444;
    }

    p {
      color: #777;
    }
  }
  .food-item-image {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 150px;

    img {
      width: 100%;
    }
  }
}
</style>
