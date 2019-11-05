<template>
    <div>
        <Banner></Banner>
        <div class="sections section-menu section-grey2">
            <div class="container">
                <div class="tabs-wrapper" id="menu-tab-wrapper">
                    <ul class="tabs">
                        <li class="" @click="selectedComponent='Menu'"><span>Menu</span></li>
                        <li ><span >Opening Hours</span></li>
                        <li class="view-reviews"><span>Reviews</span>
                            <div class="badge badge_review badge_review_count"></div>
                        </li>
                        <li class="view-merchant-map"><span>Map</span></li>
                        <li class=""><span>Book a Table</span></li>
                        <li class="view-merchant-photos"><span>Photos</span></li>
                        <li class="" @click="selectedComponent='Information'"><span>Information</span></li>
                        <li class=""><span>Promos</span></li>
                    </ul>
                    <div class="tabs-details">

                    </div>
                    <keep-alive>
                        <transition name="fade">
                            <component :is="selectedComponent">
                                default
                            </component>
                        </transition>
                    </keep-alive>


                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import Banner from '@/components/resturantprofile/Banner.vue';
    import Menu from '@/components/resturantprofile/menu/Menu.vue';
    import Information from '@/components/resturantprofile/information/Information.vue';
    export default {
        name: 'Resturantprofile',
        data(){
            return{
                selectedComponent:'Menu'
            }
        },
        components: {
            Banner,
            Menu,
            Information
        },
    }
</script>

<style lang="scss" scoped>

    .tabs-wrapper{
        .tabs{
            display:flex;
            justify-content: space-between;
            li{
                span{
                    display:block;
                    padding:10px 0;

                }
                &:hover{
                    cursor:pointer;
                }
            }
        }
    }

    .fade-enter{
        opacity:0;
    }

    .fade-enter-active{
        transition:opacity 0.5s;
    }

    .fade-leave{
        /*opacity:0;*/
    }

    .fade-leave-active{
        transition:opacity 0.5s;
        opacity:0;
    }

</style>