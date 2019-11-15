<template>
    <div>
        <AccountBanner/>
        <div class="page-header">
            <div class="container">
                <button class="returnBack-btn"><i class="icofont-rounded-left"></i></button>
                <h3>Settings</h3>
            </div>
        </div>
        <div class="settings">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 setting__nav sidenav--left">
                        <ul class="nav flex-md-column flex-row">
                            <li class="active"><a href=""><img src="../../assets/settingsicons/avatar.svg" alt=""><span class="setting__links">Edit Profile</span></a></li>
                            <li><a href=""><img src="../../assets/settingsicons/padlock.svg" alt=""><span class="setting__links">Security</span></a></li>
                            <li><a href=""><img src="../../assets/settingsicons/history.svg" alt=""><span class="setting__links">Order History</span></a></li>
                            <li><a href=""><img src="../../assets/settingsicons/heart.svg" alt=""><span class="setting__links">Favourites</span></a></li>
                            <li><a href=""><img src="../../assets/settingsicons/placeholder.svg" alt=""><span class="setting__links">Saved Addresses</span></a></li>
                            <li><a href=""><img src="../../assets/settingsicons/logout.svg" alt=""><span class="setting__links">Logout</span></a></li>
                        </ul>
                    </div>
                    <div class="col-md-9 sidenav--right">
                        <!--<AccountProfile/>-->
                        <!--<AccountSecurity/>-->
                        <!--<AccountFavourite/>-->
                        <AccountAddress/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountBanner from './AccountBanner.vue'
    // import AccountProfile from './AccountProfile.vue'
    // import AccountSecurity from './AccountSecurity.vue'
    // import AccountFavourite from './AccountFavourite.vue'
    import AccountAddress from './AccountAddress.vue'

    export default {
        name: "Index",
        components: {
            AccountBanner,
            // AccountProfile,
            // AccountSecurity
            // AccountFavourite
            AccountAddress
        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900&display=swap');

    input,button{

        &:focus{
            box-shadow:none;
            border:1px solid #578B02;
        }
    }

    .page-header {
        text-align: center;
        /*background: #FAFAFA;*/
        .container {
            position: relative;
        }

        .returnBack-btn {
            font-weight: bold;
            font-size: 2rem;
            position: absolute;
            left: 0;
            top: 60%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
        }

        h3 {
            padding: 30px 0 20px;
            font-size: 2.2rem;
            color: rgba(0, 0, 0, 0.7);
            /*font-family: proximaReg;*/
            font-weight: 900;
            font-family: 'Noto Sans JP', sans-serif;
        }
    }
    .settings{
        margin-top:1rem;
        margin-bottom:1rem;
        .container{
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
        }
    }
    .setting__nav{
        border-right: 1px solid rgba(0,0,0,0.06);
        ul{
            margin:0 -15px;
            li{
                &.active{
                    a{
                        font-weight: bold;
                        &:before{
                            content:'';
                            height:100%;
                            width:5px;
                            background:#578B02;
                            position:absolute;
                            left:0;
                            top:0;
                            border-radius:5px;
                        }
                    }
                }
                a{
                    padding: 20px 15px;
                    display:block;
                    position:relative;
                    img{
                        width:24px;
                        margin-right: 10px;
                    }
                }
            }
        }

    }

    .sidenav--right{
        margin-top: 2rem;
    }


</style>