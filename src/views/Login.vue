<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 finegirl overall">
      </div>
      <div class="col-md-8 ">
        <div class="signin-div ">
          <h3 class="text-center ">Sign in</h3>
          <p class="text-center ">welcome back! please sign in to Dr Cloud</p>

          <form @submit.prevent="signin()">
            <div class="form-group ">
              <label for="email text-left">E-mail address</label>
              <input v-model="email" type="email " name="email " id="signin-email " class="form-control ">
            </div>
            <div class="form-group ">
              <label for="password ">Password</label>
              <input v-model="password" type="password " name="password " id="signin-password " class="form-control ">
              <small class="float-right my-3 ">Forgot password?</small>
            </div>
            <button class="btn-danger btn-block btn " id="sign-in-btn ">Sign in</button>
          </form>
          <p class="text-center my-3 ">Don't have an account yet?
            <span>Sign up!</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Authentications from "../Authentications";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    signin() {
      axios
        .post("http://localhost:3000/signin", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.user) {
            this.$root.auth = response.data.user;
            this.$router.push("account");
          } else if (response.data.code) {
            this.error = response.data.message;
          }
        });
    }
  }
};
</script>


<style scoped>
.finegirl {
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 2%,
      rgba(0, 0, 0, 0.808)
    ),
    url("../assets/bitmap.png");
  background-size: cover;
  background-position: top right;
}

.signin-div {
  width: 400px;
  margin: auto;
  margin-top: 18%;
  font-family: sans-serif;
}
.signin-div form {
  margin-top: 40px;
}
.signin-div form label {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 2px;
  text-align: left;
}
.signin-div form input {
  border-radius: 3px;
  height: 40px;
  font-size: 13px;
  padding-left: 20px;
}
.signin-div form .form-control:focus {
  border-color: #777;
  box-shadow: 0 0 0 0;
}
.signin-div form small {
  font-size: 11px;
}

.signin-div form #sign-in-btn {
  font-size: 14px;
  border-radius: 3px;
  background: #df0019;
}
.signin-div p {
  font-size: 12px;
}
.signin-div p span {
  color: #df0019;
}
.signin-div p span:hover {
  cursor: pointer;
}
</style>


