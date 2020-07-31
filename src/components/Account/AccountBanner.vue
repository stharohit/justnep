<template>
    <div>
       <div class="accountBanner-container">
           <figure class="banner-image">
               <figure class="profile-image">
                   <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
               </figure>
           </figure>
       </div>
    </div>
</template>

<script>

    export default {
        name: "AccountBanner"
    }
</script>

<style scoped lang="scss">
    .accountBanner-container{
        margin-bottom: 4.5%;
        .banner-image{
            background:url(../../assets/banner.png) no-repeat;
            background-size:cover;
            height:250px;
            position:relative;

        }
        .profile-image{
            position:absolute;
            bottom:-28%;
            left:50%;
            transform:translateX(-50%);
            height:150px;
            width: 150px;
            border-radius:50%;
            overflow:hidden;
            box-shadow: 0 9px 14px rgba(0,0,0,0.2);
            img{
                height:100%;
                width:100%;
            }
        }
    }
</style>