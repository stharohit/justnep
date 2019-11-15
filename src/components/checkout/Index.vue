<template>
    <div class="col-md-8">
        <DeliveryAddress/>
        <DeliveryDatetime/>
        <DeliveryPayment/>
        <div class="text-right">
            <button type="button" class="btn btn-secondary continue-btn">Continue</button>
        </div>
    </div>
</template>

<script>
    import DeliveryAddress from './DeliveryAddress.vue'
    import DeliveryDatetime from './DeliveryDatetime.vue'
    import DeliveryPayment from './DeliveryPayment.vue'

    export default {
        name: "Index",
        components: {
            DeliveryAddress,
            DeliveryDatetime,
            DeliveryPayment,
        }
    }
</script>

<style  lang="scss">
    .card {
        margin-top: 30px;
        margin-bottom: 30px;

        .card-header {
            font-size: 18px;
        }

        button {
            background: transparent;
            padding: 5px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            outline: none;
            border-radius: 2px;
        }
    }

    .continue-btn{
        background:#00A145;
        &:hover{
            background:darken(#00A145,5%)
        }
    }

</style>