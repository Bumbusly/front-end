<script lang="ts">
// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/UI/YellowBackground.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import MobileBox from "@/components/UI/MobileBox.vue";
import {animate} from "motion";

import {useStore} from "vuex";
import store from "@/store";


export default {
  setup() {
    const store = useStore()
    return {store}
  },
  mounted() {
    /*    const animation = animate(
            '.card',
            {opacity: 1, transform: 'scale(1)'},
            {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
        )*/
  },
  data() {
    return {
      cardTitle: 'Forgot Password',
      cardDescription: "Enter your mobile and we'll send you a link to reset your password.",
      phoneLabel: 'Enter your mobile',
      phonePlaceholder: "mobile",
      invalidPhone: 'Phone is not valid !',
      phoneValid: 'default',
      phone: ''
    }
  },
  emits: ['change-to-email', 'submitted-phone'],
  components: {BaseButton, YellowBackground, CardItem, MobileBox},
  methods: {
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    changeToEmail() {
      this.$emit('change-to-email')
    },
    submittedPhone() {
      this.$emit('submitted-phone')
    },
  },
}

</script>

<template>
  <!-- begin::Signup Card -->
  <!-- begin::Description of Card -->
  <CardItem :cardName="cardTitle" class="card mt-10">
    <template v-slot:cardDescription>
      <p class="text-yellow-800 font-medium">
        {{ cardDescription }}
      </p>
    </template>
    <!-- end::Description of Card -->
    <!-- begin::Icon of Card (Bumbusly) -->
    <template v-slot:cardImage>
      <img  v-if="store.getters.getTheme == true"
            width="50"
            height="55"
            alt="bumbusly logo"
            src="./../../assets/media/images/Logo/Bumbusly.svg"/>

      <img  v-if="store.getters.getTheme == false"
            width="50"
            height="55"
            alt="bumbusly logo"
            src="./../../assets/media/images/Logo/Bumbusly-light.png"/>
    </template>
    <!-- end::Icon of Card (Bumbusly) -->
    <!-- begin::Body of Card -->
    <template v-slot:cardBody>

      <!-- Testing Section-->
      <MobileBox></MobileBox>
      <!-- Testing Section -->

      <BaseButton
          text="Send"
          bgColor="green"
          textColor="green"
          @buttonClicked="submittedPhone()"
      >
      </BaseButton>
    </template>
    <!-- end::Body of Card -->
    <!-- begin::Additional Section -->
    <template v-slot:cardAdditional>
      <HrDivision text="Reset password by email"></HrDivision>
      <div class="flex flex-col gap-2">
        <BaseButton
            text="Switch to Email"
            bgColor="green"
            textColor="green"
            isOutline="true"
            @buttonClicked="changeToEmail()"
        ></BaseButton>
      </div>
    </template>
    <!-- end::Additional Section -->
  </CardItem>
  <!-- end::Signup Card -->
  <!-- end::Container -->
</template>