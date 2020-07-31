<template>
  <div>
    <form
      method="GET"
      class="forms-search d-flex mt-5 position-relative"
      id="forms-search"
      action="/searcharea"
    >
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Search food or resturant"
        v-model="searchItem"
        @keydown="isActive"
      />
      <div v-if="active">
        <div
          v-if="resturants.length>0"
          style="position: absolute;
                  z-index: 99;
                  background:#333333; 
                  width: 100%;
                  top: 50px;left: 0;
                  padding: 5px 20px;
                  border: 1px solid #666;
                  border-top: none;
                  min-height: 100%;
                  max-height: 240px;
                  box-shadow: rgb(101, 101, 101) 0px 2px 7px;
                  overflow-y: scroll;
                  overflow-x: hidden;
                "
        >
          <ul class="text-left">
            <li
              v-for="(resturant,index) in filteredResturant"
              :key="index"
              class="d-flex flex-wrap align-items-center mb-2"
            >
              <img :src="resturant.miniImage" alt width="50px " height="50px" />
              <p>{{resturant.name}}</p>
            </li>
          </ul>
        </div>
        <div v-else>no result found</div>
      </div>
      <button
        class="btn btn-lg btn-orange d-lg-block d-none"
        style="margin-left:-10px; border-radius:0;"
        
      >Search</button>
      <span class="search-icon d-lg-none d-block btn-lg btn-orange  "  style="margin-left:-10px; border-radius:0; ">
        <i class="icofont-search "></i>
      </span>
      <!--search-input-wrap-->
    </form>
  </div>
</template>
<script>
import { resturants } from "../data/data.js";
export default {
  name: "search",
  data() {
    return {
      searchItem: "",
      resturants: resturants,
      active: false,
      keywords: ''
    };
  },
  computed: {
    filteredResturant() {
      return this.resturants.filter(resturant => {
        let regex = new RegExp('(' + this.searchItem + ')', 'i');
        return resturant.name
          .toLowerCase()
          .match(regex);
      });
    }
  },
  methods: {
    isActive() {
      
     if(this.searchItem.length < 2){
      return this.active = false;
     }
     else{
      return this.active = true;
     }
    },
  
  }
};
</script>