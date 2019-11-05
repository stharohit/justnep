<template>
    <div ref="categorySelector" class="category-selector col-md-3">
        <div :class="{ 'sticky': sticky }">
            <perfect-scrollbar class="scrollbar">
                <scrollactive
                        active-class="primary-link"
                        :duration="600"
                        :offset="100"
                        bezier-easing-value=".5,0,.35,1"
                >
                    <a v-for="(menuCategory,index) in menuCategories" :key="index"
                       :href="'#'+ fillBlanksWithDash(menuCategory.name)" class="scrollactive-item ">
                        <span>{{menuCategory.name}} </span>
                        <span class="category-no">{{menuCategory.qty}}</span>
                    </a>
                </scrollactive>
            </perfect-scrollbar>
        </div>

    </div>
</template>

<script>


    export default {
        name: "Categoryselector",
        data() {
            return {
                sticky: false,
                menuCategories:
                    [

                        {name: "Shawarma", qty: 1},
                        {name: "Chinese Vegetable", qty: 1},
                        {name: "Chinese Rice", qty: 1},
                        {name: "Rice", qty: 1},
                        {name: "Special Chicken or Khichuri", qty: 1},
                        {name: "Chicken Fry or Roll", qty: 1},
                        {name: "Mutton Curry", qty: 1},
                        {name: "Dessert", qty: 1},
                        {name: "Biriyani or Khichuri", qty: 1},
                        {name: "BBQ Fish Kabab", qty: 1},
                        {name: "Soup", qty: 1},
                        {name: "Chicken Curry", qty: 1},
                        {name: "Fish Curry", qty: 1},
                        {name: "Bird Meat Curry", qty: 1},
                        {name: "Varta", qty: 1},
                        {name: "Noodles", qty: 1},

                    ]
            }
        },
        components: {},
        methods: {
            scrolled() {
                this.sticky = window.pageYOffset > this.$refs.categorySelector.offsetTop;
            },
            fillBlanksWithDash: (str) => {
                return str.replace(/\s+/g, '-').toLowerCase();
            },

        },
        mounted() {
            window.addEventListener('scroll', this.scrolled);

        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrolled);
        }
    }
</script>

<style scoped lang="scss">
    .category-selector {
        margin-top: 30px;

        .scrollactive-nav {
            display: block;
        }

        .scrollactive-item {
            display: flex;
            justify-content: space-between;
            margin: 0 0 6px;
            padding: 0 0 6px;
            font-size: 14px;
            font-weight: 600;
            transition: all .2s linear;
            padding-right: 15px;

            &:hover {
                color: darken(#00A082, 10%);

            }
        }
    }

    .scrollbar {
        height: calc(100vh - 150px);
    }

    .sticky {
        margin-top: 50px;
        position: fixed;
        top: 0;
        width: 16.5%;
    }
</style>