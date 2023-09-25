<script lang="ts">

// Import Styling of This View
import "./LoginViewStyle.scss";

// Import Custom Components
import YellowBackground from "../../components/YellowBackground.vue";

export default {
  data() {
    return {
      emailAddress: "",
      password: ""
    }
  },
  components: {
    YellowBackground
  },
  methods: {
    validateEmaill() {
      // Valid Email Regex
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const email: string = this.emailAddress;
      const result: boolean = expression.test(email);
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'));
    },
    validatePassword() {
      // Valid Password Regex
      const expression: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
      const password: string = this.password;
      const result: boolean = expression.test(password);
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'));
    },
    handleEmailInputValueUpdated(value) {
      this.emailAddress = value
    },
    handlePasswordInputValueUpdated(value) {
      this.password = value
    },
    loginClicked() {
      this.validateEmaill();
      this.validatePassword();
    }
  },
}
</script>

<template>
  <div id="main-container" class="w-screen h-screen flex justify-center align-center items-center">
    <YellowBackground></YellowBackground>
    <div id="login-container" class="w-[374px] m-1 bg-white rounded-2xl sm:border border-yellow-800 px-7 py-5">
      <div id="login-container__top" class="flex flex-col gap-6">
        <div id="login-header" class="flex flex-col gap-4">
          <div id="login-header__title" class="flex flex-row justify-between align-center items-center">
            <h1 class="text-[40px] font-bold text-yellow-800">Login</h1>
            <img src="../../assets/media/images/Logo/Bumbusly.svg">
          </div>
          <div id="login-header__description">
            <p class="text-yellow-800 font-medium">Enter enter your email and password</p>
          </div>
        </div>
        <div id="login-body" class="flex flex-col gap-4">

          <text-input id="email" label="Email Address" type="email" placeholder="example@gmail.com" required=true
            autocomplete="email" @input-value-updated="handleEmailInputValueUpdated">
          </text-input>

          <text-input id="password" label="Password" type="password" placeholder="••••••••••" required=true
            autocomplete="password" hidden=true @input-value-updated="handlePasswordInputValueUpdated">
          </text-input>

          <base-button text="Login" bgColor="green" textColor="green" isOutline="false" v-on:buttonClicked="loginClicked"></base-button>
          <div class="flex items-center mb-4">
            <a class="text-red-700 underline font-bold flex align-center items-center justify-center text-center w-full">
              <h2>Forgot password ?</h2>
            </a>
          </div>
        </div>
      </div>
      <div id="login-container__bottom" class="flex flex-col gap-2">
        <hr-div text="OR"></hr-div>
        <base-button text="Register" link="register" bgColor="green" textColor="green" isOutline="true"></base-button>
      </div>
    </div>
  </div>
</template>