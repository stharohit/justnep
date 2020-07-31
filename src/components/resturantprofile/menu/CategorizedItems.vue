<template>
    <div class="item-container col-md-5">
        <div id="shawarma" class="menu-category-container">
            <h3 class="menu-category">Shawarma</h3>
            <div class="item row">
                <div class="col-md-4">
                    <figure>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ravrfjagwrbol8ziczmd"
                             alt="">
                    </figure>
                </div>
                <div class="col-md-8">
                    <div class="bar">
                        <div class="top-bar">
                            <div class="item-name">Chicken Shawarma</div>
                            <div class="item-price">Rs.500</div>
                        </div>
                        <div class="bottom-bar">
                            <button><i class="icofont-plus-circle"></i> Add</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="item row">
                <div class="col-md-4">
                    <figure>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ravrfjagwrbol8ziczmd"
                             alt="">
                    </figure>
                </div>
                <div class="col-md-8">
                    <div class="bar">
                        <div class="top-bar">
                            <div class="item-name">Chicken Shawarma</div>
                            <div class="item-price">Rs.500</div>
                        </div>
                        <div class="bottom-bar">
                            <button><i class="icofont-plus-circle"></i> Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "CategorizedItems",
        components: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .item-container {
        /*margin-top: 30px;*/
        color: rgba(0, 0, 0, 0.7);

        .menu-category {
            /*font-size:18px;*/
            font-weight: bold;
            font-family: proximaReg;
            margin-bottom: 30px;
            margin-top: 30px;
        }

        .item {
            font-family: proximaReg;
            border: 1px solid #e0e2e6;
            padding: 10px;
            border-radius: 2px;
            margin-bottom: 10px;

            figure {
                height: 100px;
                border-radius: 5px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .bar {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 100%;
            }

            .top-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;

            }

            .bottom-bar {
                button {
                    display: block;
                    border: 1px solid #00A082;
                    background: #00A082;
                    color: white;
                    height: 40px;
                    width: 100px;
                    border-radius: 3px;
                    margin-left: auto;
                    transition: all linear .2s;

                    &:hover {
                        background: darken(#00A082, 10%);
                        border-color: darken(#00A082, 10%);
                    }
                }
            }

            &-name {
                font-size: 20px;
                font-weight: bold;
            }

            &-price {
                color: #00A082;
                font-weight: bold;
            }
        }
    }

</style>