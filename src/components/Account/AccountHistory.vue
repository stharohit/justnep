<template>
    <div class="profileHistory">
        <div class="row">
            <div class="col-md-6">
                <div class="favResturants">
                    <span class="favTitle">Current orders</span>

                    <ul class="favouriteLists">
                        <li class="py-3" >
                            <div class="emptyDialog" >
                                No orders found.
                            </div>
                        </li>
                        <li class="py-3 mb-2 favouriteList">
                            <div class="order-details">
                                <div class="d-flex justify-content-between align-items-center py-1">
                                    <span class="order-status">Cancelled</span>
                                    <div class="d-flex order-box black">
                                        <span class="total-price">Rs.500</span>.
                                        <span class="total-items">3 items</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-1 mb-2">
                                    <div class="d-flex flex-column text-box">
                                        <p class="">Placed On</p>
                                        <span>Oct,23 Wed 01:28 PM</span>
                                    </div>
                                    <div class="d-flex flex-column align-items-end text-box">
                                        <p>Order No.</p>
                                        <span>342</span>
                                    </div>
                                </div>
                            </div>
                            <div class="listCard pb-1">
                                <img class="rounded-circle" src="https://foodmandu.com//Images/Vendor/737/Logo/web_050619054534.logo.newrelease.eightdegrees.jpg" alt="">
                                <div>
                                    <a href="">8 Degrees Fine Dine & Venues</a>
                                    <span>Jhamsikhel, Lalitpur</span>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 mb-2 favouriteList">
                            <div class="order-details">
                                <div class="d-flex justify-content-between align-items-center py-1">
                                    <span class="order-status">Cancelled</span>
                                    <div class="d-flex order-box black">
                                        <span class="total-price">Rs.500</span>.
                                        <span class="total-items">3 items</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-1 mb-2">
                                    <div class="d-flex flex-column text-box">
                                        <p class="">Placed On</p>
                                        <span>Oct,23 Wed 01:28 PM</span>
                                    </div>
                                    <div class="d-flex flex-column align-items-end text-box">
                                        <p>Order No.</p>
                                        <span>342</span>
                                    </div>
                                </div>
                            </div>
                            <div class="listCard pb-1">
                                <img class="rounded-circle" src="https://foodmandu.com//Images/Vendor/737/Logo/web_050619054534.logo.newrelease.eightdegrees.jpg" alt="">
                                <div>
                                    <a href="">8 Degrees Fine Dine & Venues</a>
                                    <span>Jhamsikhel, Lalitpur</span>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="favFoods">
                    <span class="favTitle">Past orders</span>
                    <ul class="favouriteLists">
                        <li class="py-3">
                            <div class="emptyDialog" >
                                No orders found.
                            </div>
                        </li>
                        <li class="py-3 mb-2 favouriteList">
                            <div class="order-details">
                                <div class="d-flex justify-content-between align-items-center py-1">
                                    <span class="order-status">Cancelled</span>
                                    <div class="d-flex order-box black">
                                        <span class="total-price">Rs.500</span>.
                                        <span class="total-items">3 items</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-1 mb-2">
                                    <div class="d-flex flex-column text-box">
                                        <p class="">Placed On</p>
                                        <span>Oct,23 Wed 01:28 PM</span>
                                    </div>
                                    <div class="d-flex flex-column align-items-end text-box">
                                        <p>Order No.</p>
                                        <span>342</span>
                                    </div>
                                </div>
                            </div>
                            <div class="listCard pb-1">
                                <img class="rounded-circle" src="https://foodmandu.com//Images/Vendor/737/Logo/web_050619054534.logo.newrelease.eightdegrees.jpg" alt="">
                                <div>
                                    <a href="">8 Degrees Fine Dine & Venues</a>
                                    <span>Jhamsikhel, Lalitpur</span>
                                </div>
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
        name: "AccountHistory"
    }
</script>

<style scoped lang="scss">
    .profileHistory{
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

        }
        .favouriteList{
            box-shadow: 0 0px 6px rgba(0,0,0,0.2);
            padding: 10px;
            border-radius: 5px
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
        }
    }

    .order{
        &-details{

        }
        &-status{
            color:red;
            font-size:12px;
            font-weight: bold;
        }
        &-box{
            font-size:12px;
            &.black{
                font-weight: bold;
                color:black;
            }

        }
    }
    .text-box{
        p{
            color:rgba(0,0,0,0.5);
        }
        span{

        }
    }

</style>