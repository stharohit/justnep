<template>
    <div class="profileTab">
        <form action="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <figure class="profilePic rounded-circle">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                            </figure>
                        </div>
                        <div class="col-md-9">
                            <span>Edit profile photo</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <figure class="coverPic rounded">
                                <img class="rounded" src="../../assets/banner.png" alt="">
                            </figure>
                        </div>
                        <div class="col-md-6">
                            <span>Edit cover photo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="firstname">Firstname</label>
                        <input type="text" class="form-control" id="firstname" value="susant">
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="lastname">Lastname</label>
                        <input type="text" class="form-control" id="lastname" value="shrestha" >
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="phoneno">Phone number</label>
                        <input type="number" class="form-control" id="phoneno" value="9808883404" >
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" value="susantshrestha@hotmail.com" disabled >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-right mb-3">
                    <button type="button" class="btn">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AccountProfile"
    }
</script>

<style scoped lang="scss">

    %box-shadow{
        box-shadow: 0 9px 14px rgba(0,0,0,0.2);
    }
    input,button{

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
    .profileTab{
        .profilePic{
            height:70px;
            width:70px;
            @extend %box-shadow;
            img{
                width:100%;
                height:100%;
            }
        }
        .coverPic{
            @extend %box-shadow;
            img{
                width: 100%;
                height: 60px;
                object-fit: cover;
            }
        }
    }
</style>