<template>
    <fragment>
        <div class="card">
            <div class="card-header">Payment</div>
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="col-md-4">
                            <p>
                                <input id="payment_1" type="radio" name="deliverypay" checked>
                                <label for="payment_1" class="label--radio ml-2">Cash on delivery</label>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <input id="payment_2" type="radio" name="deliverypay" >
                                <label for="payment_2" class="label--radio ml-2">Esewa</label>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <input id="payment_3" type="radio" name="deliverypay">
                                <label for="payment_3" class="label--radio ml-2">Khalti</label>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </fragment>
</template>

<script>
    export default {
        name: "DeliveryPayment"
    }
</script>

<style scoped lang="scss">
    input[type="radio"] {
        -webkit-appearance: none;
        border: 1px solid #CCCCCC;
        background: #FFFFFF;
        width:1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        vertical-align: middle;
        outline:none;
        cursor:pointer;
        &:before{
            content: '';
            display: block;
            width: .7rem;
            height: .7rem;
            margin: 20% auto;
            border-radius: 50%;
        }
        &:checked{
            border: 1px solid #F6712A;
            &:before{
                background: #F6712A;
            }
        }
    }
</style>