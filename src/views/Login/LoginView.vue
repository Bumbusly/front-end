<script setup lang="ts">
// Import Styling of This View
import "./LoginViewStyle.scss";

import YellowBackground from "../../components/YellowBackground.vue";
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
            autocomplete="email">
          </text-input>

          <text-input id="password" label="Password" type="password" placeholder="••••••••••" required=true
            autocomplete="password" hidden=true>
          </text-input>

          <filled-button text="Login" bgColor="green" textColor="white"></filled-button>
          <div class="flex items-center mb-4">
            <a class="text-red-700 underline font-bold flex align-center items-center justify-center text-center w-full">
              <h2>Forgot password ?</h2>
            </a>
          </div>
        </div>
      </div>
      <div id="login-container__bottom" class="flex flex-col gap-2">
        <hr-div text="OR"></hr-div>
        <outlined-button text="Signup" link="register"></outlined-button>
      </div>
    </div>
  </div>
</template>