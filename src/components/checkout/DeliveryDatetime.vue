<template>
    <fragment>
        <div class="card">
            <div class="card-header">Delivery date and time</div>
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                <input id="delivery_1" type="radio" name="deliverydt" checked>
                                <label for="delivery_1" class="label--radio ml-2">Deliver now</label>
                            </p>
                        </div>
                        <div class="col-md-12">
                            <p>
                                <input id="delivery_2" type="radio" name="deliverydt">
                                <label for="delivery_2" class="label--radio ml-2">Scheduled Delivery</label>
                            </p>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <p>
                                        <label for="date">Date</label>
                                        <select class="form-control" id="date">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <p>
                                        <label for="time">Time</label>
                                        <select class="form-control" id="time">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </fragment>
</template>

<script>
    export default {
        name: "DeliveryDatetime"
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