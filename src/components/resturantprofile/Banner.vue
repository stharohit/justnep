<template>
    <div class="banner-container">
        <div class="container">
            <div class="cover-image">

                <img src="https://res.cloudinary.com/hungrynaki/image/upload/w_1170,h_316,c_fill/v1554340545/hungrynaki-v4/restaurants/salimar_garden_restora/meta/salimar_garden_restora_cover.jpg"
                     alt="">
                <div class="banner-info">
                    <div class="logo-container-root">
                        <div class="logo-container">
                            <img src="https://res.cloudinary.com/hungrynaki/image/upload/w_100,h_100,c_fill/v1553176322/hungrynaki-v4/restaurants/salimar_garden_restora/meta/salimar_garden_restora_logo.jpg"
                                 alt="" class="logo">
                        </div>
                    </div>
                    <div class="name">
                        <h1 class="outlet-title"> Salimar Garden Restora Banani - Gulshan 1 </h1>
                        <div class="outlet-sub-title">
                            <span>Chinese<span> - </span></span>
                            <span>Biryani<span> - </span></span>
                            <span>Kebab</span>
                            <div class="status status--open ">
                                <span>Open</span>
                            </div>

                        </div>
                    </div>
                    <div class="love-container pointer">
                        <i class="icofont-heart"></i>
                        <span>38</span>
                    </div>
                </div>

            </div>
            <div class="info">
                <div class="pull-left">
                    <p><i class="icofont-clock-time"></i> Open Time: <span class="bold">10 AM To 8 PM</span></p>
                    <p>Delivery Time: <span class="bold">45 mins</span></p>
                    <p>Min Order: <span class="bold">Rs. 1000</span></p>
                    <p>Delivery Fee: <span class="bold">Rs. 50</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style lang="scss" scoped>
    .banner-container {
        position: relative;
        margin-top: 40px;

        .cover-image {
            position: relative;
            min-height: 200px;
            overflow: hidden;
            border-radius: 4px 4px 0 0;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .banner-info {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: -webkit-gradient(linear, left top, left bottom, color-stop(40%, hsla(0, 0%, 100%, 0)), to(rgba(0, 0, 0, .85)));
            background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 40%, rgba(0, 0, 0, .85));
            display: flex;
            align-items: flex-end;

            .logo-container-root {
                width: 95px;
                border-radius: 35px;
                overflow: hidden;
                margin: 30px;
                border: 2px solid #fff;
            }

            .name {
                color: #fff;
                margin: 0 0 50px;

                .outlet-title {
                    font-size: 26px;
                    line-height: 18px;
                    margin: 9px 0;
                    font-weight: 600;
                }

                .outlet-sub-title {
                    font-size: 14px;
                    line-height: 18px;
                    margin: 0;
                }
            }

            .love-container {
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 24px;
                color: #fff;
                padding: 10px 15px;

                .love-icon {
                    margin-right: 7px;
                    position: relative;
                    top: 3px;
                }
            }
        }

        .info {
            height: 60px;
            background: #f4f3f3;

            .pull-left {
                display: flex;
                align-items: center;
                height: 100%;
                margin-left: 30px;

                p {
                    margin-right: 30px;
                    font-size: 14px;

                }
            }
        }
    }

</style>