<template>
  <b-modal
    id="modal-addon-category"
    hide-header
    hide-footer
    centered
    scrollable
    :visible="true"
    @hidden="onAddonModalHidden"
  >
    <div class="addon-image">
      <img
        v-if="propItem.image"
        :src="url + propItem.image"
        :alt="propItem.name"
        class="w-100"
      />
    </div>
    <div class="addon-modal-header">
      <h4>{{ propItem.name }}</h4>
      <p v-html="propItem.desc"></p>
    </div>
    <div class="addon-modal-body">
      <div v-for="addon in propItem.addon_categories" :key="addon.id">
        <b-form-group>
          <div class="addon-category">
            {{ addon.name }}
          </div>
          <div class="addon-checkbox-wrap" v-if="addon.type === 'MULTI'">
            <b-form-checkbox
              v-for="addonItem in addon.addons"
              :key="'group' + addonItem.id"
              @change="addAddons(addonItem, addon)"
              :value="'group' + addonItem.id"
              :name="'group' + addon.id.toString()"
              stacked
              size="lg"
            >
              {{ addonItem.name }}
              <span class="addon_price">Rs. {{ addonItem.price }}</span>
            </b-form-checkbox>
          </div>
          <div class="addon-checkbox-wrap" v-else>
            <b-form-radio
              v-for="addonItem in addon.addons"
              :key="addonItem.id"
              @change="addAddons(addonItem, addon)"
              :value="addonItem.id"
              :name="addon.id.toString()"
              stacked
              size="lg"
            >
              <span>{{ addonItem.name }}</span>
              <span class="addon_price">Rs. {{ addonItem.price }}</span>
            </b-form-radio>
          </div>
        </b-form-group>
      </div>
    </div>
    <div class="addon-to-cart d-flex flex-direction-row">
      <button
        @click="itemCount > 1 ? (itemCount -= 1) : itemCount"
        class="addon-cart-btn"
      >
        <img :src="minus" alt="minus" width="15px" />
      </button>
      <span class="addon-count">{{ itemCount }}</span>
      <button @click="itemCount += 1" class="addon-cart-btn ml-3">
        <img :src="plus" alt="plus" width="15px" />
      </button>
      <button
        @click="addToCart(propItem)"
        class="btn btn-primary add-to-cart-btn"
      >
        <b-spinner v-if="cartBtnLoading" small></b-spinner>
        Add {{ itemCount }} item - Rs.
        {{ newPrice }}
      </button>
    </div>
  </b-modal>
</template>

<script>
import plus from "@/assets/plus.svg";
import minus from "@/assets/minus.svg";

export default {
  data() {
    return {
      url: "https://project.justnep.com/",
      addons: null,
      selected: [],
      minus: minus,
      plus: plus,
      itemCount: 1,
      selecteaddons: [],
      newPrice: this.propItem.price,
      addonPrice: 0,
      cartBtnLoading: false
    };
  },
  props: ["propItem", "hideModal"],
  methods: {
    addonsOptions(addon) {
      let options = [];
      addon.map((item) => {
        options.text = item.id;
        options.value = item.name;
      });
      return options;
    },
    onAddonModalHidden() {
      this.$emit("hideModal");
      this.selecteaddons = [];
      this.newPrice = null;
    },
    addAddons(addonItem, addon) {
      if (addon.type === "SINGLE") {
        if (this.selecteaddons.length === 0) {
          let addons = {};
          addons.addon_name = addonItem.name;
          addons.addon_category_name = addon.name;
          addons.addon_id = addonItem.id;
          addons.price = addonItem.price;
          this.selecteaddons.push(addons);
        } else {
          let index = this.selecteaddons.filter(
            (i) => i.addon_category_name !== addon.name
          );
          let addons = {};
          addons.addon_name = addonItem.name;
          addons.addon_category_name = addon.name;
          addons.addon_id = addonItem.id;
          addons.price = addonItem.price;
          index.push(addons);
          this.selecteaddons = index;
        }
      }
      if (addon.type === "MULTI") {
        if (this.selecteaddons.length === 0) {
          let addons = {};
          addons.addon_name = addonItem.name;
          addons.addon_category_name = addon.name;
          addons.addon_id = addonItem.id;
          addons.price = addonItem.price;
          this.selecteaddons.push(addons);
        } else {
          let filteredAddons = this.selecteaddons.filter(
            (i) => i.addon_name !== addonItem.name
          );
          if (filteredAddons.length < this.selecteaddons.length) {
            this.selecteaddons = filteredAddons;
          } else {
            let addons = {};
            addons.addon_name = addonItem.name;
            addons.addon_category_name = addon.name;
            addons.addon_id = addonItem.id;
            addons.price = addonItem.price;
            this.selecteaddons.push(addons);
          }
        }
      }
    },
    addToCart(item) {
      this.cartBtnLoading = true;
      setTimeout(() => {
        let cartItem = item;
        cartItem.quantity = this.itemCount;
        cartItem.selecteaddons = this.selecteaddons;
        let availableCart = this.$getCart();
        let checkCartMatch = [];
        if (availableCart) {
          checkCartMatch = availableCart.filter(
            (item) => item.restaurant_id === cartItem.restaurant_id
          );
          console.log(checkCartMatch);
          if (checkCartMatch.length === 0) {
            this.$removeCart();
          } else {
            availableCart.forEach((item) => {
              this.$store.dispatch({
                type: "storeCartItem",
                items: item
              });
            });
          }
        }
        this.$store.dispatch({
          type: "storeCartItem",
          items: cartItem
        });
        this.$emit("hideModal");
        this.cartBtnLoading = false;
      }, 500);
    }
  },
  computed: {
    priceUpdateOnSelection() {
      return this.selecteaddons;
    },
    priceUpdateOnItemCount() {
      return this.itemCount;
    },
    checkCartItem() {
      return this.$store.getters.cart;
    }
  },
  watch: {
    priceUpdateOnSelection(updatedSelection) {
      let price = parseInt(this.propItem.price);
      this.addonPrice = 0;
      if (updatedSelection.length > 0) {
        updatedSelection.forEach((selected) => {
          this.addonPrice += parseInt(selected.price);
        });
      }
      this.newPrice = ((price + this.addonPrice) * this.itemCount).toFixed(2);
    },
    priceUpdateOnItemCount(count) {
      let price = parseInt(this.propItem.price);
      this.newPrice = ((price + this.addonPrice) * count).toFixed(2);
    },
    async checkCartItem(cart) {
      this.$setCart(cart);
    }
  }
};
</script>

<style lang="scss" scoped>
.addon-modal-body {
  .form-group {
    margin-bottom: 0;
  }
  .addon-category {
    padding: 20px !important;
    background: #f6f6f6;
    color: #000;
    font-size: 20px;
  }
  .addon-checkbox-wrap {
    padding: 20px;

    .custom-control {
      margin-bottom: 10px;
    }
  }
}
.addon_price {
  float: right;
  float: right;
  color: #666;
  font-size: 16px;
  line-height: 1.9;
}
.addon-to-cart {
  padding: 20px;
  position: sticky;
  bottom: 0;
  width: 100%;
  background: linear-gradient(0deg, #fff, #ffffffc5);

  .addon-cart-btn {
    border: 0;
    outline: 0;
    border-radius: 50%;
    display: inline-block;
    width: 45px;
    height: 45px;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.1);
    margin-right: 15px;
  }
}
.addon-count {
  line-height: 2.8;
}
.add-to-cart-btn {
  border: 0;
  text-align: center;
  flex: 1;
  border-radius: 0;
}
</style>
