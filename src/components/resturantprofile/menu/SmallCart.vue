<template>
    <div ref="smallCart" class="small-cart col-md-4 show-small-cart">
        <div :class="{ 'sticky': sticky }">
            <h3>My Cart</h3>
            <div class="container-fluid">
                <div class="empty">
                    <img src="../../../assets/smallcart.svg" alt="">
                    <p class="title">Your Cart is Empty</p>
                    <p class="sub-title">Good food is always cooking! Go ahead, order some yummy items from the
                        menu.</p>
                </div>
                <div class="full">
                    <form class="">
                        <div class="productCard row">
                            <div class="col-md-3">
                                <img src="../../../assets/smallcart.svg" alt="">
                            </div>
                            <div class="col-md-9">
                                <div class="d-flex">
                                    <div>
                                        <div class="productCard-name">product name</div>
                                        <div class="productCard-price">Rs 720</div>
                                        <div class="productCard-quantity">
                                            <button class="plus"><i class="icofont-plus"></i></button>
                                            1
                                            <button class="minus"><i class="icofont-minus"></i></button>
                                        </div>
                                    </div>
                                    <button class="delete"><i class="icofont-ui-delete"></i></button>
                                </div>

                            </div>
                        </div>
                        <div class="productCard row">
                            <div class="col-md-3">
                                <img src="../../../assets/smallcart.svg" alt="">
                            </div>
                            <div class="col-md-9">
                                <div class="d-flex">
                                    <div>
                                        <div class="productCard-name">product name</div>
                                        <div class="productCard-price">Rs 720</div>
                                        <div class="productCard-quantity">
                                            <button class="plus"><i class="icofont-plus"></i></button>
                                            1
                                            <button class="minus"><i class="icofont-minus"></i></button>
                                        </div>
                                    </div>
                                    <button class="delete"><i class="icofont-ui-delete"></i></button>
                                </div>

                            </div>
                        </div>
                        <div class="productCard-summary">
                            <div class="subtotal">
                                <div class="box">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <h6>Subtotal</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Rs. 400.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <h6>Resturant Service Charge</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Rs. 40.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <h6>VAT</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Rs. 57.20</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <h6>Delivery charge</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Rs. 50.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <h6>Grand charge</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Rs. 497.20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <button type="button" class="btn btn-secondary">Proceed to check out</button>
                            </div>
                        </div>

                    </form>
                </div>
                <!---->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "SmallCart",
        data() {
            return {
                sticky: false,
                apidata:''
            }
        },
        methods: {
            scrolled() {
                this.sticky = window.pageYOffset > this.$refs.smallCart.offsetTop;

            },
            getImagesInfo() {
                axios.get('https://justnep.com/mobileappv2/api/getsettings/?api_key=mannuji', {

                })
                    .then(res => {
                        this.apidata=res.data;
                        // console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }


        },
        mounted() {
            window.addEventListener('scroll', this.scrolled);
            this.getImagesInfo();

        },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrolled);

    }
    }
</script>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 100%;
        margin-bottom: 30px;
    }

    .small-cart {
        font-family: proximaReg;

        h3 {
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        p {
            color: rgba(0, 0, 0, 0.7);
            font-weight: bold;
        }
    }

    .empty {
        display: none;
    }

    .full {
        /*display: none*/
    }

    .productCard {
        background: ghostwhite;
        padding: 5px 0;

        &:not(:first-child) {
            margin-top: 2px;
        }

        img {
            /*height:100px;*/
            /*width:100px;*/

        }

        button {
            border: none;
            background: transparent;
        }

        &-name {
            font-weight: bold;
        }

        &-price {
            color: #00A082;
            font-weight: bold;
        }

        &-quantity {
            margin-top: 5px;

            button {
                color: gray;
                font-size: 10px;

                &:nth-child(1) {
                    margin-right: 10px;
                }

                &:nth-child(2) {
                    margin-left: 10px;
                }
            }
        }

        &-summary {
            .subtotal {
                margin-top: 10px;
            }

            .box {
                padding: 3px 0;

                h6 {
                    font-size: 15px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    letter-spacing: normal;
                    text-align: left;
                    color: #000;
                    margin: 0;
                }

                p {
                    font-size: 13px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.88;
                    letter-spacing: normal;
                    text-align: right;
                    color: darken(#00A082, 10%);;
                    margin: 0;
                }

                button {
                    background: #00A145;
                    width: 100%;
                }
            }
        }

        .delete {
            margin-left: auto;
            color: red;
        }
    }

    .sticky {
        /*margin-top: 100px;*/
        position: fixed;
        top: 0;
        width: 33.33%;
    }
</style>

<!--18d42d1416a90042eaccd94d5d82bdf8-->