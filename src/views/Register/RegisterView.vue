<script setup lang="ts">
// Import Styling of This View
import "./RegisterViewStyle.scss";

// Import Components
import UsaFlag from '../../components/svg/Flags/UsaFlag.vue'
import BaseTextInput from '../../components/BaseTextInput.vue'
import YellowBackground from "../../components/YellowBackground.vue";
</script>

<template>
  <div id="main-container" class="w-screen h-screen flex justify-center align-center items-center">
    <YellowBackground></YellowBackground>
    <div id="register-container" class="w-[374px] m-1 bg-white rounded-2xl sm:border border-yellow-800 px-7 py-5">
      <div id="register-container__top" class="flex flex-col gap-6">
        <div id="register-header" class="flex flex-col gap-4">
          <div id="register-header__title" class="flex flex-row justify-between align-center items-center">
            <h1 class="text-[40px] font-bold text-yellow-800">Register</h1>
            <img src="../../assets/media/images/Logo/Bumbusly.svg">
          </div>
          <div id="register-header__description">
            <p class="text-yellow-800 font-medium">Enter your information to register</p>
          </div>
        </div>
        <div id="register-body" class="flex flex-col gap-4">

          <BaseTextInput id="email" label="Email Address" type="email" placeholder="example@gmail.com" required=true
            autocomplete="email">
          </BaseTextInput>

          <BaseTextInput id="password" label="Password" type="password" placeholder="••••••••••" required=true
            autocomplete="password" hidden=true>
          </BaseTextInput>

          <div id="location-input">
            <label for="language" class="text-sm font-medium leading-6 text-gray-900">Select language</label>
            <div class="flex">
              <div id="country-input">
                <div class="flex items-center">
                  <label for="country"
                    class="flex flex-row justify-center align-center items-center cursor-pointer rounded-l-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 gap-2">
                    <UsaFlag></UsaFlag>
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">
                      USA
                    </label>
                    <svg class="w-4 h-4 mx-1 fill-current rotate-180" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </label>
                </div>
                <input type="checkbox" name="country" id="country" class="hidden peer" />
                <div
                  class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col mt-1 border border border-gray-200">
                  <div class="cursor-pointer group">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-gray-600 group-hover:bg-gray-100">Germony</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-gray-600 border-gray-600 group-hover:bg-gray-100">Greece</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-gray-600 group-hover:bg-gray-100">Iran</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-gray-600 group-hover:bg-gray-100">France</a>
                  </div>
                </div>
              </div>
              <div id="state-input">
                <div class="flex items-center">
                  <label for="state"
                    class="flex flex-row justify-center align-center items-center cursor-pointer rounded-r-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
                    <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                    <svg class="w-4 h-4 mx-1 fill-current rotate-180" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </label>
                </div>
                <input type="checkbox" name="state" id="state" class="hidden peer" />
                <div
                  class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col mt-1 border border-gray-200">
                  <div class="cursor-pointer group">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">Germony</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 border-yellow-600 group-hover:bg-gray-100">Javascript</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">Node</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">PHP</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <filled-button text="Register" bgColor="green" textColor="white"></filled-button>
          <div class="flex items-center mb-4">
            <input id="terms-acknowledge" type="checkbox" value=""
              class="w-6 h-6 text-green-600 = rounded-xl focus:ring-green-500 focus:ring-2 accent-green-500">
            <label for="terms-acknowledge" class="ml-2 text-sm font-normal text-gray-800">
              I acknowledge I have read the
              <a class="condition-link font-medium">
                Terms & Conditions
              </a>
              and
              <a class="condition-link font-medium">
                Online Privacy Policy
              </a>
            </label>
          </div>
        </div>
      </div>
      <div id="register-container__bottom" class="flex flex-col gap-2">
        <hr-div text="Already have an account?"></hr-div>
        <outlined-button text="Login" link="login"></outlined-button>
      </div>
    </div>
  </div>
</template>