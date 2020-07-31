<template>
    <div class="profileFavourite">
        <div class="row">
            <div class="col-md-6">
                <div class="favResturants">
                    <span class="favTitle">Favourite Resturants</span>

                    <ul class="favouriteLists">
                        <li class="py-3" >
                            <div class="emptyDialog" >
                                You do not have any favourite restaurants added yet. Start adding now by clicking <a href="" class="">here</a>.
                            </div>
                        </li>
                        <li class="py-3" >
                            <div class="listCard">
                                <img class="rounded-circle" src="https://foodmandu.com//Images/Vendor/737/Logo/web_050619054534.logo.newrelease.eightdegrees.jpg" alt="">
                                <div>
                                    <a href="">8 Degrees Fine Dine & Venues</a>
                                    <span>Jhamsikhel, Lalitpur</span>
                                </div>
                                <button><i class="icofont-close-line"></i></button>
                            </div>
                        </li>
                        <li class="py-3">
                            <div class="listCard">
                                <img class="rounded-circle" src="https://foodmandu.com//Images/Vendor/737/Logo/web_050619054534.logo.newrelease.eightdegrees.jpg" alt="">
                                <div>
                                    <a href="">8 Degrees Fine Dine & Venues</a>
                                    <span>Jhamsikhel, Lalitpur</span>
                                </div>
                                <button><i class="icofont-close-line"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="favFoods">
                    <span class="favTitle">Favourite Foods</span>
                    <ul class="favouriteLists">
                        <li class="py-3">
                            <div class="emptyDialog" >
                                You do not have any favourite foods added yet. Start adding now by clicking <a href="" class="">here</a>.
                            </div>
                        </li>
                        <li class="py-3">
                            <div class="listCard">
                                <img class="rounded-circle" src="https://foodmandu.com/img/logo-i.jpg" alt="">
                                <div>
                                    <a href="">SET A</a>
                                    <small>From</small>:&nbsp;<span>8 Degrees Fine Dine & Venues</span>
                                </div>
                                <button><i class="icofont-close-line"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountFavourite"
    }
</script>

<style scoped lang="scss">
    .profileFavourite{
        .favResturants{

        }
        .emptyDialog{
            a{
                color:#578B02;
            }
        }
        .favTitle{
            border-bottom:1px solid rgba(0,0,0,0.1);
            display:block;
            padding-bottom:10px;
        }
        .favouriteLists{
            li:not(:last-of-type){
                border-bottom:1px solid rgba(0,0,0,0.1);
            }
        }
        .listCard{
            display:flex;
            img{
                width:50px;
                height:50px;
                overflow:hidden;
                object-fit: cover;
                margin-right: 10px;
            }
            a{
                display:block;
                font-size: 16px;
            }
            span{
                font-size: 12px;
            }
            button{
                background:transparent;
                border:none;
                height:auto;
                margin-left:auto;
                font-size: 18px;
            }
        }
    }

</style>