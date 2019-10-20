<template>
    <div class="container my-4">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Resturants</li>
            </ol>
        </nav>
        <hr>
        <div class="category-tabs">
            <span> <a href="">Restaurant List </a> </span>
            <span> <a href="">Newest </a> </span>
            <span> <a href="">Featured</a> </span>
            <span> <a href="">View Restaurant by map</a></span>
        </div>
        <hr>

        <div class="food-items">
            <div class="food-item">
                <span class="food-item-name">Drinks</span>
            </div>
            <div class="food-item">
                <span class="food-item-name">Briyani</span>
            </div>
            <div class="food-item">
                <span class="food-item-name">Mexican</span>
            </div>
            <div class="food-item">
                <span class="food-item-name">Chinese</span>
            </div>
            <div class="food-item">
                <span class="food-item-name">Japanese</span>
            </div>
            <div class="food-item">
                <span class="food-item-name">show more</span>
            </div>
        </div>

        <div class=" resturant-outlet">
            <div class="row">
                <div class="col-md-4 col-sm-6 resturant-col" v-for="(element,index) in resturantsdata" :key="index">
                    <a href="" class="resturant-card">
                        <figure class="resturant-image">
                            <img :src="element.bannerImage"
                                 alt="">
                        </figure>
                        <div class="data-container">
                            <figure class="resturant-logo">
                                <img :src="element.miniImage"
                                     alt="">
                            </figure>
                            <div class="name-container">
                                <div class="resturant-name">{{element.name}}</div>
                                <div class="resturant-cursine">{{element.cursineName}}</div>
                            </div>
                        </div>
                        <hr>
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
                            <div class="status status--open " v-if='element.status === true'>
                                <span>Open</span>
                            </div>
                            <div class="status status--closed" v-if='element.status === false'>
                                <span>Closed</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {resturants} from '../data/data';

    export default {
        name: "Category",
        data() {
            return {
                resturantsdata: resturants
            }
        }
    }
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

        &-col {

        }

        &-card {
            /*background:ghostwhite;*/
            padding: 15px 10px;
            display: block;
            transition: all .2s ease-in-out;
            font-family: proximaReg;
            margin-bottom: 20px;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 2px 11px 0 rgba(0, 0, 0, .14);
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
            img{
                height:auto;
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
            background: #DB7C38;
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

    .category-tabs{
        display:flex;
        text-align:center;
        justify-content: center;
        padding:5px 0;
        span{
            margin:0 15px;
        }
    }



</style>