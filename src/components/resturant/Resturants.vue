<template>
  <div>
    <div class="resturant-outlet">
      <div class="row">
        <div class="col-md-4 col-sm-6 resturant-col" v-for="(element,index) in filterList" :key="index">
          <a href="javascript:void(0)" class="resturant-card">
            <figure class="resturant-image">
              <img :src="element.bannerImage" alt />
            </figure>
            <div class="data-container">
              <figure class="resturant-logo">
                <img :src="element.miniImage" alt />
              </figure>
              <div class="name-container">
                <div class="resturant-name">{{element.name}}</div>
                <div class="resturant-cursine">
                  {{element.cursineName}}
                  <span v-for="(fooditem,index) in element.foodName.slice(0, 2)" :key="index">
                    <span class="mr-1">- {{fooditem}}</span>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div class="card-bottom">
              <div class="review">
                <i class="icofont-star"></i>&nbsp;
                <span class="review-number">{{element.rating}}</span>
              </div>
              <div class="like-btn">
                <span class="like-number">{{element.likeCount}}</span>
                <button>
                  <i class="icofont-heart"></i>
                </button>
              </div>
              <div class="status status--open" v-if="element.status === true">
                <span>Open</span>
              </div>
              <div class="status status--closed" v-if="element.status === false">
                <span>Closed</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore" loader-color="rgba(102,102,102,.5)">
    </scroll-loader>
  </div>
</template>

<script>
  import {
    resturants
  } from "../../data/data";
  import Scroll from "@/components/global/Scroll-Loader";
//  import axios from 'axios'

  export default {
    name: "resturants",
    data() {
      return {
        loadMore: true,
        page: 1,
        pageSize: 9,
        resturantsdata: resturants,
        local:this.$store.state.cursinename,
        myArrayFiltered:[]
     
      };
    },
    components:{
      'scroll-loader': Scroll
    },
    methods: {
      getImagesInfo() {
         this.page++,
         this.pageSize += this.pageSize;
      },
  filterArray(arr, f) {
 
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < f.length; j++) {
      if (arr[i].cursineName === f[j].cursineName) {
        this.myArrayFiltered.push(arr[i]);
      }
    }
  }
  return this.myArrayFiltered

}
    },
    watch: {
      page(n) {
        n > 20 && (this.loadMore = false)
      }
    },
     mounted() {
      this.getImagesInfo()
    },
    computed: {
 

    
      filterList() {
        // if (this.local.length > 0) {
        //   return this.resturantsdata.filter(
        //     resturant => this.local.match(resturant.cursineName)
        //   );
        // } else {
          return this.filterArray(this.resturantsdata, this.local);
        // }

      } // this filterList will do the filter 
    }
  };
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;
  }

  .resturant {
    &-outlet {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    &-col {}

    &-card {
      /*background:ghostwhite;*/
      padding: 15px 10px;
      display: block;
      transition: all 0.2s ease-in-out;
      font-family: proximaReg;
      margin-bottom: 20px;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.14);
      }
    }

    &-image {
      overflow: hidden;
      border-radius: 3px;
      height: 180px;
      width: 100%;

      img {
        object-fit: cover;
      }
    }

    &-logo {
      width: 50px;
      /*height: 50px;*/
      border-radius: 10px;
      overflow: hidden;
      margin-right: 10px;

      img {
        height: auto;
        vertical-align: middle;
      }
    }

    &-name {
      font-size: 16px;
      font-weight: bold;
    }

    &-cursine {
      font-size: 12px;
      font-weight: normal;
    }
  }

  .name-container {
    line-height: 18px;
  }

  .data-container {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .card-bottom {
    display: flex;

    .review {
      background: #db7c38;
      /*color:#FFD700;*/
      color: white;
      padding: 2px 5px;
      font-size: 12px;

      &-number {
        color: white;
      }
    }

    .like-btn {
      margin-left: auto;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      button {
        background: transparent;
        border: none;
      }

      .like-number {
        margin-right: 3px;
      }

      i {
        font-size: 20px;
      }
    }

    .status {
      display: flex;
      align-items: center;
      color: #ffffff;
      border-radius: 3px;
      padding: 0 5px;
      margin-left: 10px;

      &--open {
        background: #5cb85c;
      }

      &--closed {
        background: #c4001d;
      }
    }
  }

  .category-tabs {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 5px 0;

    span {
      margin: 0 15px;
    }
  }

  .food-items {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 15px);
    overflow: hidden;
    transition: height 1s;
    position: relative;

    // height: 59px;
    // &.active{
    //     height: 100%!important;
    // }
    /*animation:bounce-in .2s reverse;*/
    .food-item {
      height: 44px;
      width: calc(16.66667% - 15px);
      padding: 0 15px;
      font-size: 15px;
      border-radius: 4px;
      margin-right: 15px;
      background: #eef0f3;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      cursor: pointer;

      &.active {
        background: #f6682e;
        color: #ffffff;
      }

      // transition:all .1s ease-in-out;
      /*animation: bounce-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;*/
      &.show-more {
        background: #f6682e;
        color: #ffffff;
      }
    }
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    animation: fadein 1s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    animation: fadein 1s reverse;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>