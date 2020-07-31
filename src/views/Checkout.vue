<template>
    <div>
        <div class="page-header">
            <div class="container">
                <h3>Checkout</h3>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row">
                <Index></Index>
                <SmallCart/>
            </div>

        </div>

    </div>
</template>

<script>
    import Index from '@/components/checkout/Index.vue';
    import SmallCart from '@/components/resturantprofile/menu/SmallCart.vue';

    export default {
        name: "Checkout",
        components:{
            Index,
            SmallCart
        }
    }
</script>

<style scoped lang="scss">
    .page-header{

        background: #FAFAFA;
        h3{
            padding:30px 0 20px;
            font-size: 2.2rem;
            color:rgba(0,0,0,0.7);
            font-family: proximaReg;
        }
    }
</style>