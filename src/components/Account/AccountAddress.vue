<template>
    <div class="profileAddress container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="d-flex align-items-center justify-content-between">
                    <span>Delivery Address</span>
                    <button class="addAddress--btn" v-if="!close" @click="formmethod"><i class="icofont-plus"></i>&nbsp;Add new</button>
                    <button class="addAddress--btn" v-if="close" @click="formmethod"><i class="icofont-minus"></i>&nbsp;Cancel</button>
                </div>
            </div>
        </div>
        <form class="p-3" v-if="formmodal">
            <div class="row my-3">

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" >
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstname">Firstname</label>
                            <input type="text" class="form-control" id="firstname" placeholder="firstname">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Lastname</label>
                            <input type="text" class="form-control" id="lastname" placeholder="lastname">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="noteRider">Note to rider</label>
                        <textarea class="form-control" id="noteRider" rows="3"></textarea>
                    </div>

                </div>
                <div class="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56523.78960314308!2d85.31836638491839!3d27.69452702070001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap!5e0!3m2!1sen!2snp!4v1573820117182!5m2!1sen!2snp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-right">
                    <button type="submit" class="btn ">Sign in</button>
                </div>
            </div>
        </form>
        <div class="row checkout__delivery-info__list" >
            <div class="checkout__delivery-info__addresses isActive col-md-6">
                <div class="checkout__delivery-info__item">
                    <div v-if="deletemodal" class=" checkout__delivery-info__delete-modal-wrapper">
                        <p class="delivery-info__delete-modal__text">Delete address?</p>
                        <div class="delivery-info__action-buttons mt-2">
                            <div class="delivery-info__delete-modal__button">
                                <a href="" class=" button small button-ghost delivery-info__delete-modal__link-yes">Yes</a>
                            </div>
                            <div class="delivery-info__delete-modal__button">
                                <a @click='deletemethod' href="javascript:void(0)" class=" button small delivery-info__delete-modal__link-no">No</a>
                            </div>
                        </div>
                    </div>

                    <div class="checkout__delivery-info__address-link__action">
                        <a @click="deletemethod" href="javascript:void(0)" class="checkout__delivery-info__address-link checkout__delivery-info__address-link--cancel" title="delete">
                            <i class="icofont-ui-delete"></i>
                        </a>
                        <a href="" class="checkout__delivery-info__address-link checkout__delivery-info__address-link--edit" title="edit">
                            <i class="icofont-edit-alt"></i>
                        </a>
                    </div>
                    <div class="checkout__delivery-info__address-line">
                        Kings Road 5649
                    </div>
                    <div class="checkout__delivery-info__address-line">V6T 1K9 Vancouver</div>
                    <div class="checkout__delivery-info__notes checkout__delivery-info__optional"> Note to rider: none</div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountAddress",
        data(){
            return{
                deletemodal:false,
                formmodal:false,
                close:false
            }
        },
        methods:{
            deletemethod(){
                this.deletemodal=!this.deletemodal;
            },
            formmethod(){
                this.formmodal=!this.formmodal;
                this.close=!this.close;

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/macro/variables";
    input,button{
        outline:none;
        &:focus{
            box-shadow:none;
            border:1px solid #578B02;
        }
    }
    .btn{
        background:#578B02;
        border-color:#578B02;
        color:white;
    }
    form{
        box-shadow: 0 9px 14px rgba(0,0,0,0.2);
        margin-top: 1rem;
    }
    .button{
        z-index: 1;
        cursor: pointer;
        position: relative;
        font-size: 1.4rem;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        height: 48px;
        border: 1px solid;
        border-radius: unset;
        padding: 0 15px;
        line-height: 46px;
        display: inline-block;
        vertical-align: middle;
        touch-action: manipulation;
        user-select: none;
        transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        color: #fff;
        background-color: $orange;
        border-color: $orange;
        &.small{
            height: 32px;
            line-height: 30px;
            font-size: 0.9rem;
            padding: 0 7px;
        }
    }
    .button-ghost{
        color: $orange;
        background-color: transparent;
        border: 1px solid $orange;
    }

    .addAddress--btn {
        background: none;
        border: none;
        color: $green;
    }

    .checkout__delivery-info{
            &__list{
                margin-top: 1rem;
            }
            &__addresses{
                position: relative;
                padding: 8px 16px 16px;
                border: 1px solid #ebebeb;
                margin: 0;
                background-color: #fff;
                cursor: pointer;
                transition: background-color 0.1s linear;
                height: 100%;
                &.isActive{
                    border: 1px solid $orange;
                }
            }
            &__item{}
        &__action-buttons{}
        &__delete-modal{
            &-wrapper{
                position: absolute;
                background-color: #fff;
                height: 99%;
                width: 99%;
                top: 1%;
                left: 1%;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
            }

        }
        &__address-line{
            font-size:16px;
        }
        &__address-link{
            font-size: 1.2rem;
            color: #c2c2c2;
            width: 24px;
            height: 24px;
            margin-left:3px;

            &__action{
                display: flex;
                justify-content: flex-end;
                margin-bottom: 8px;
            }
            &--cancel{
                color:$orange;
            }
            &--edit{
                color:$orange;
            }
        }
    }

    .delivery-info__delete-modal{
        &__text{
            position: relative;
            float: left;
            width: 100%;
            min-height: 1px;
            padding-left: 12px;
            padding-right: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            padding-right: 24px;
            margin: 0;
        }
        &__button{
            position: relative;
            float: left;
            width: 50%;
            min-height: 1px;
            padding-left: 12px;
            padding-right: 12px;
            .button{
                width:100%
            }
            &.small{

            }
        }
        &__like-yes{}
        &__like-no{}
    }

</style>