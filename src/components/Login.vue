<template>
    <div v-if="hidden">
        <div class="overlay" v-on:click="hide"></div>
        <div class="login-signup">
            <div v-on:click="hide" style="padding:10px;color:red;float:right; margin-bottom:20px; cursor: pointer;">X
            </div>

            <form action class="log-in pt-5" autocomplete="off" v-if="login">
                <div class="py-5">
                    <h4>
                        We are
                        <span>Here To</span>
                    </h4>
                    <p>Welcome back! Log in to your account to view</p>
                </div>
                <div class="floating-label">
                    <input placeholder="Email" type="text" class="form-control" name="email" id="email"
                        autocomplete="off" />
                </div>
                <div class="floating-label">
                    <input placeholder="Password" type="password" name="password" id="password" class="form-control"
                        autocomplete="off" />
                </div>
                <button type="submit" class="btn btn-orange d-block" onClick="return false;">Log in</button>
                <div class="d-block pt-3" target="_blank">Have not a Account?
                    <a href="javascript:void(0)" class="signup link" v-on:click="toggle">SignUp Now</a>
                </div>
            </form>

            <form action class="log-in pt-5" autocomplete="off" v-else="">
                <div class="py-5">
                    <h4>
                        We are
                        <span>Here To</span>
                    </h4>
                    <p>Welcome back! Log in to your account to view</p>
                </div>
                <div class="floating-label">
                    <input placeholder="Name" type="text" class="form-control" name="name" id="name"
                        autocomplete="off" />
                </div>
                <input placeholder="Email" type="text" class="form-control" name="email" id="email"
                    autocomplete="off" />
     
                <div class="floating-label">
                    <input placeholder="Password" type="password" name="password" id="password" class="form-control"
                        autocomplete="off" />
                </div>
        <button type="submit" class="btn btn-orange d-block" onClick="return false;">Sign Up</button>
        <div class="d-block pt-3" >Already Have a Account
            <a href="javascript:void(0)" class="signup link" v-on:click="toggle">Login Now</a>
        </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "login",

        data() {
            return {
                hidden: true,
                login: true
            };
        },
        methods: {
            hide() {
                this.hidden = !this.hidden;
            },
            toggle() {
                this.login = !this.login

            }
        }
    };
</script>
<style lang="scss" scoped>
    input {
        border: none;
        border-bottom: 1px solid rgb(246, 104, 46);
        border-radius: 0;
        margin-bottom: 20px;
    }

    input:focus,
    input:hover,
    input:active {
        outline: none;
        border-color: rgb(246, 104, 46);
        box-shadow: none;
        border-bottom: 1px solid rgb(246, 104, 46);
    }

    .btn.btn-orange {
        border-radius: 0;

        &:hover {
            border-radius: 0;
        }
    }

    .signup.link {
        color: rgb(246, 104, 46);
    }

    .active .login-signup {
        transform: translateX(0) !important;
        transition: all ease 0.5s;
    }

    .login-signup {
        background: #fff;
        max-width: 400px;
        height: 100vh;
        padding: 30px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        transform: translateX(100%);
        transition: all ease 0.5s;
    }
</style>