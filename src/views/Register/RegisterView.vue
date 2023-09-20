<script setup lang="ts">
import "./RegisterViewStyle.scss";
import LineDivision from "../../components/VerticalDividing.vue"
import YellowButton from "../../components/YellowButton.vue"
import TransparentButton from "../../components/TransparentButton.vue"
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
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="14" rx="2" fill="white" />
                      <mask id="mask0_259_102" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="14">
                        <rect width="20" height="14" rx="2" fill="white" />
                      </mask>
                      <g mask="url(#mask0_259_102)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M20 0H0V0.933333H20V0ZM20 1.86667H0V2.8H20V1.86667ZM0 3.73333H20V4.66667H0V3.73333ZM20 5.6H0V6.53333H20V5.6ZM0 7.46667H20V8.4H0V7.46667ZM20 9.33333H0V10.2667H20V9.33333ZM0 11.2H20V12.1333H0V11.2ZM20 13.0667H0V14H20V13.0667Z"
                          fill="#D02F44" />
                        <rect width="8.57143" height="6.53333" fill="#46467F" />
                        <g filter="url(#filter0_d_259_102)">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.90477 1.4C1.90477 1.65773 1.69158 1.86667 1.42858 1.86667C1.16559 1.86667 0.952393 1.65773 0.952393 1.4C0.952393 1.14227 1.16559 0.933334 1.42858 0.933334C1.69158 0.933334 1.90477 1.14227 1.90477 1.4ZM3.80954 1.4C3.80954 1.65773 3.59634 1.86667 3.33334 1.86667C3.07035 1.86667 2.85715 1.65773 2.85715 1.4C2.85715 1.14227 3.07035 0.933334 3.33334 0.933334C3.59634 0.933334 3.80954 1.14227 3.80954 1.4ZM5.23811 1.86667C5.5011 1.86667 5.7143 1.65773 5.7143 1.4C5.7143 1.14227 5.5011 0.933334 5.23811 0.933334C4.97511 0.933334 4.76192 1.14227 4.76192 1.4C4.76192 1.65773 4.97511 1.86667 5.23811 1.86667ZM7.61906 1.4C7.61906 1.65773 7.40586 1.86667 7.14287 1.86667C6.87988 1.86667 6.66668 1.65773 6.66668 1.4C6.66668 1.14227 6.87988 0.933334 7.14287 0.933334C7.40586 0.933334 7.61906 1.14227 7.61906 1.4ZM2.38096 2.8C2.64396 2.8 2.85715 2.59107 2.85715 2.33333C2.85715 2.0756 2.64396 1.86667 2.38096 1.86667C2.11797 1.86667 1.90477 2.0756 1.90477 2.33333C1.90477 2.59107 2.11797 2.8 2.38096 2.8ZM4.76192 2.33333C4.76192 2.59107 4.54872 2.8 4.28573 2.8C4.02273 2.8 3.80954 2.59107 3.80954 2.33333C3.80954 2.0756 4.02273 1.86667 4.28573 1.86667C4.54872 1.86667 4.76192 2.0756 4.76192 2.33333ZM6.19049 2.8C6.45348 2.8 6.66668 2.59107 6.66668 2.33333C6.66668 2.0756 6.45348 1.86667 6.19049 1.86667C5.9275 1.86667 5.7143 2.0756 5.7143 2.33333C5.7143 2.59107 5.9275 2.8 6.19049 2.8ZM7.61906 3.26667C7.61906 3.5244 7.40586 3.73333 7.14287 3.73333C6.87988 3.73333 6.66668 3.5244 6.66668 3.26667C6.66668 3.00893 6.87988 2.8 7.14287 2.8C7.40586 2.8 7.61906 3.00893 7.61906 3.26667ZM5.23811 3.73333C5.5011 3.73333 5.7143 3.5244 5.7143 3.26667C5.7143 3.00893 5.5011 2.8 5.23811 2.8C4.97511 2.8 4.76192 3.00893 4.76192 3.26667C4.76192 3.5244 4.97511 3.73333 5.23811 3.73333ZM3.80954 3.26667C3.80954 3.5244 3.59634 3.73333 3.33334 3.73333C3.07035 3.73333 2.85715 3.5244 2.85715 3.26667C2.85715 3.00893 3.07035 2.8 3.33334 2.8C3.59634 2.8 3.80954 3.00893 3.80954 3.26667ZM1.42858 3.73333C1.69158 3.73333 1.90477 3.5244 1.90477 3.26667C1.90477 3.00893 1.69158 2.8 1.42858 2.8C1.16559 2.8 0.952393 3.00893 0.952393 3.26667C0.952393 3.5244 1.16559 3.73333 1.42858 3.73333ZM2.85715 4.2C2.85715 4.45773 2.64396 4.66667 2.38096 4.66667C2.11797 4.66667 1.90477 4.45773 1.90477 4.2C1.90477 3.94227 2.11797 3.73333 2.38096 3.73333C2.64396 3.73333 2.85715 3.94227 2.85715 4.2ZM4.28573 4.66667C4.54872 4.66667 4.76192 4.45773 4.76192 4.2C4.76192 3.94227 4.54872 3.73333 4.28573 3.73333C4.02273 3.73333 3.80954 3.94227 3.80954 4.2C3.80954 4.45773 4.02273 4.66667 4.28573 4.66667ZM6.66668 4.2C6.66668 4.45773 6.45348 4.66667 6.19049 4.66667C5.9275 4.66667 5.7143 4.45773 5.7143 4.2C5.7143 3.94227 5.9275 3.73333 6.19049 3.73333C6.45348 3.73333 6.66668 3.94227 6.66668 4.2ZM7.14287 5.6C7.40586 5.6 7.61906 5.39107 7.61906 5.13333C7.61906 4.8756 7.40586 4.66667 7.14287 4.66667C6.87988 4.66667 6.66668 4.8756 6.66668 5.13333C6.66668 5.39107 6.87988 5.6 7.14287 5.6ZM5.7143 5.13333C5.7143 5.39107 5.5011 5.6 5.23811 5.6C4.97511 5.6 4.76192 5.39107 4.76192 5.13333C4.76192 4.8756 4.97511 4.66667 5.23811 4.66667C5.5011 4.66667 5.7143 4.8756 5.7143 5.13333ZM3.33334 5.6C3.59634 5.6 3.80954 5.39107 3.80954 5.13333C3.80954 4.8756 3.59634 4.66667 3.33334 4.66667C3.07035 4.66667 2.85715 4.8756 2.85715 5.13333C2.85715 5.39107 3.07035 5.6 3.33334 5.6ZM1.90477 5.13333C1.90477 5.39107 1.69158 5.6 1.42858 5.6C1.16559 5.6 0.952393 5.39107 0.952393 5.13333C0.952393 4.8756 1.16559 4.66667 1.42858 4.66667C1.69158 4.66667 1.90477 4.8756 1.90477 5.13333Z"
                            fill="url(#paint0_linear_259_102)" />
                        </g>
                      </g>
                      <defs>
                        <filter id="filter0_d_259_102" x="0.952393" y="0.933334" width="6.66669" height="5.66667"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feOffset dy="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_259_102" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_259_102" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_259_102" x1="0.952393" y1="0.933334" x2="0.952393" y2="5.6"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#F0F0F0" />
                        </linearGradient>
                      </defs>
                    </svg>
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
          <YellowButton text="Signup"></YellowButton>
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
      <LineDivision text="Already have an account?"></LineDivision>
      <TransparentButton text="Login" link="login"></TransparentButton>
    </div>
  </div>
</div></template>