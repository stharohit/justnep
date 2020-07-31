<template>
    <div class="profileSecurity">
        <form action="" >
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="oldPassword">Old password</label>
                        <input type="password" class="form-control" id="oldPassword" >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="newPassword">New password</label>
                        <input type="password" class="form-control" id="newPassword" >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="confirmPassword">Comfirm password</label>
                        <input type="password" class="form-control" id="confirmPassword" >
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
        name: "AccountSecurity"
    }
</script>

<style scoped lang="scss">
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
</style>