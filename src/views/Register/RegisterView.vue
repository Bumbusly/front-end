<script lang="ts">

// Import Styling of This View
import "./RegisterViewStyle.scss";

// Import Components
import UsFlag from './../../components/svg/CountryFlags/US.vue'
import YellowBackground from "./../../components/YellowBackground.vue";
import GrFlag from './../../components/svg/CountryFlags/GE.vue'
import CardItem from '../../components/UI/CardItem.vue'

// Code of View
export default {
  components: {
    UsFlag,
    GrFlag,
    YellowBackground,
    CardItem
  },
  methods: {

  },
  mounted() {

  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Bumbusly | Register Page';
      }
    },
  }
}

</script>

<template>
  <!-- begin::Container -->
  <div class="w-screen h-screen flex justify-center align-center items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Register Card -->
    <!-- begin::Description of Card -->
    <CardItem cardName="Register">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 font-medium">Enter your information</p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <img src="./../../assets/media/images/Logo/Bumbusly.svg">
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <!-- begin::Email Text Input -->
        <text-input id="email" label="Email Address" type="email" placeholder="example@gmail.com" required=true
          autocomplete="email">
        </text-input>
        <!-- end::Email Text Input -->
        <!-- begin::Password Text Input -->
        <text-input id="password" label="Password" type="password" placeholder="••••••••••" required=true
          autocomplete="password" hidden=true>
        </text-input>
        <!-- end::Password Text Input -->
        <!-- begin::Select Menu of Country -->
        <div>
          <label for="language" class="text-sm font-medium leading-6 text-gray-900">Choose Language</label>
          <SelectMenu></SelectMenu>
        </div>
        <!-- end::Select Menu of Country -->
        <BaseButton text="Register" bgColor="green" textColor="green"></BaseButton>
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
      </template>
      <!-- end::Body of Card -->
    </CardItem>
    <!-- end::Register Card -->
  </div>
  <!-- end::Container -->
</template>