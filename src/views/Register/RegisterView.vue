<script setup lang="ts">
import "./RegisterViewStyle.scss";
import UsaFlag from '../../components/svg/Flags/UsaFlag.vue'
</script>

<template>
  <div id="main-container" class="w-screen h-screen flex justify-center align-center items-center">
    <div class="background w-screen sm:h-screen absolute h-4/6 sm:top-0 -top-52"></div>
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
          <div id="email-input">
            <label for="email" class="block text-sm font-medium leading-6 text-yellow-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required placeholder="name@example.com"
                class="block w-full rounded-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div id="password-input">
            <label for="password" class="block text-sm font-medium leading-6 text-yellow-900">Password</label>
            <div class="relative mt-2 flex flex-row justify-between align-center items-center w-full ">
              <input id="password" name="password" type="password" autocomplete="password" required
                placeholder="••••••••••"
                class="block w-full h-full rounded-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
              <svg class="absolute right-2" width="16" height="14" viewBox="0 0 16 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_173_17)">
                  <path
                    d="M1.66685 8.48477C1.29892 8.05731 1.04463 7.54722 0.926666 6.99999C0.926666 6.22222 4.1 2.33333 8.06667 2.33333M14.096 5.28888C14.6121 5.75451 14.995 6.34441 15.2067 6.99999C15.2067 7.77777 12.8267 11.6667 8.06667 11.6667C7.81756 11.6667 7.5748 11.6558 7.33839 11.6355M1.72 13.2222L14.4133 0.777771M10.4467 6.99999C10.4467 7.61883 10.1959 8.21232 9.74958 8.64991C9.30324 9.08749 8.69788 9.33333 8.06667 9.33333C7.43545 9.33333 6.83009 9.08749 6.38375 8.64991C5.93742 8.21232 5.68667 7.61883 5.68667 6.99999C5.68667 6.38115 5.93742 5.78766 6.38375 5.35008C6.83009 4.91249 7.43545 4.66666 8.06667 4.66666C8.69788 4.66666 9.30324 4.91249 9.74958 5.35008C10.1959 5.78766 10.4467 6.38115 10.4467 6.99999Z"
                    stroke="#854D0E" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_173_17">
                    <rect width="15.8667" height="14" fill="white" transform="translate(0.133331)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div id="location-input">
            <label for="language" class="text-sm font-medium leading-6 text-yellow-900">Select language</label>
            <div class="flex">
              <div id="country-input">
                <div class="flex items-center">
                  <label for="country"
                    class="flex flex-row justify-center align-center items-center cursor-pointer rounded-l-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 gap-2">
                    <UsaFlag></UsaFlag>
                    <label for="country" class="block text-sm font-medium leading-6 text-yellow-900">
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
                  class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col mt-1 border border border-yellow-200">
                  <div class="cursor-pointer group">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">Germony</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 border-yellow-600 group-hover:bg-gray-100">Greece</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">Iran</a>
                  </div>
                  <div class="cursor-pointer group border-t">
                    <a
                      class="block p-2 border-transparent border-l-4 group-hover:border-yellow-600 group-hover:bg-gray-100">France</a>
                  </div>
                </div>
              </div>
              <div id="state-input">
                <div class="flex items-center">
                  <label for="state"
                    class="flex flex-row justify-center align-center items-center cursor-pointer rounded-r-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
                    <label for="state" class="block text-sm font-medium leading-6 text-yellow-900">State</label>
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
          <filled-button text="Signup"></filled-button>
          <div class="flex items-center mb-4">
            <input id="terms-acknowledge" type="checkbox" value=""
              class="w-6 h-6 text-yellow-600 bg-yellow-100 border-yellow-300 rounded-xl focus:ring-yellow-500 focus:ring-2 accent-yellow-500">
            <label for="terms-acknowledge" class="ml-2 text-sm font-normal text-yellow-900">
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
</div></template>