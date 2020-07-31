<template>
    <div class="container">
        <div class="row total-item-container">
            <div class="search-containers col-md-12 ">
                <div class="search-container">
                    <input type="text" placeholder="Search for Dishes in this Restaurant" class="search">
                    <i class="icofont-search search-icon"></i>
                </div>
            </div>
            <Categoryselector/>
            <CategorizedItems/>
            <SmallCart/>
        </div>
    </div>
</template>

<script>

    // import {Fragment} from 'vue-fragment';
    import Categoryselector from './Categoryselector.vue';
    import CategorizedItems from './CategorizedItems.vue';
    import SmallCart from './SmallCart.vue';

    export default {
        name: "Menu",
        components: {
            // Fragment
            Categoryselector,
            CategorizedItems,
            SmallCart
        }
    }
</script>

<style scoped lang="scss">
    .search-containers {
        position: relative;
        padding-left: 0;
        padding-right: 0;

    }

    .search-container {
        margin-top: 30px;
        position:relative;
        .search {
            width: 100%;
            border: 1px solid #e0e2e6;
            padding: 20px 40px;
            font-size: 20px;
            outline: none;
        }
        .search-icon{
            position: absolute;
            top: 50%;
            left: 14px;
            font-size: 20px;
            transform: translateY(-50%);
        }

    }
</style>