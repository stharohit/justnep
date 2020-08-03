<template>
  <div class="login-signup">
    <div
      v-on:click="addActive"
      style="padding:10px;color:red;float:right; margin-bottom:20px; cursor: pointer;"
    >
      X
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
        <input
          placeholder="Email"
          type="text"
          class="form-control"
          name="email"
          id="email"
          autocomplete="off"
        />
      </div>
      <div class="floating-label">
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          class="form-control"
          autocomplete="off"
        />
      </div>
      <button
        type="submit"
        class="btn btn-orange d-block"
        onClick="return false;"
      >
        Log in
      </button>
      <div class="d-block pt-3" target="_blank">
        Have not a Account?
        <a href="javascript:void(0)" class="signup link" v-on:click="toggle"
          >SignUp Now</a
        >
      </div>
    </form>

    <form action class="log-in pt-5" autocomplete="off" v-else>
      <div class="py-5">
        <h4>
          We are
          <span>Here To</span>
        </h4>
        <p>Welcome back! Log in to your account to view</p>
      </div>
      <div class="floating-label">
        <input
          placeholder="Name"
          type="text"
          class="form-control"
          name="name"
          id="name"
          autocomplete="off"
        />
      </div>
      <input
        placeholder="Email"
        type="text"
        class="form-control"
        name="email"
        id="email"
        autocomplete="off"
      />

      <div class="floating-label">
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          class="form-control"
          autocomplete="off"
        />
      </div>
      <button
        type="submit"
        class="btn btn-orange d-block"
        onClick="return false;"
      >
        Sign Up
      </button>
      <div class="d-block pt-3">
        Already Have a Account
        <a href="javascript:void(0)" class="signup link" v-on:click="toggle"
          >Login Now</a
        >
      </div>
    </form>
  </div>
</template>

<script>
// import { type } from "os";
export default {
  name: "login",
  props: {
    addActive: {
      type: Function
    }
  },
  data() {
    return {
      // hidden: true,
      login: true
    };
  },
  methods: {
    hide() {
      this.isHidden = !this.isHidden;
    },
    toggle() {
      this.login = !this.login;
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
.login-signup {
  background: #fff;
  max-width: 400px;
  height: 100vh;
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99999;
}
</style>
