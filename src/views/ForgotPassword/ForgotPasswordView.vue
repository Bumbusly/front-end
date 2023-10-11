<script lang="ts">
// Import Styling of This View
import './ForgotPasswordViewStyle.scss'

// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/YellowBackground.vue";

import ForgotPasswordWithPhone from "@/layouts/ForgotPasswordWithPhone/ForgotPasswordWithPhone.vue";
import ForgotPasswordWithEmail from "@/layouts/ForgotPasswordWithEmail/ForgotPasswordWithEmail.vue";
import ResetPasswordWithPhone from "@/layouts/ResetPasswordWithPhone/ResetPasswordWithPhone.vue";

// Import Animation Library
import {animate} from 'motion'
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  computed: {
    test() {

    }
  },
  mounted() {
    const animation = animate(
        '.card',
        {opacity: 1, transform: 'scale(0.95)'},
        {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
    )
  },
  data() {
    return {
      cardTitle: 'Forgot Password',
      cardDescription: 'How would like to recover your account?\n' +
          'We\'ll send a verification code to reset your password.',
      optionSelected: "1",
      selected: 0
    }
  },
  components: {BaseButton, YellowBackground, CardItem, ForgotPasswordWithPhone, ForgotPasswordWithEmail, ResetPasswordWithPhone},
  methods: {
    recoveryMethod() {
      this.selected = this.optionSelected;
    },
    changeToPhone() {
      this.selected = 1;
    },
    changeToEmail() {
      this.selected = 2;
    },
    submittedPhone() {
      this.selected = 3;
    }
  }
}
</script>

<template>
  <!-- begin::Container -->
  <div id="main-container" class="w-screen h-screen flex justify-center align-center items-center overflow-y-hidden">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Forgot Password Card -->
    <!-- begin::Description of Card -->
    <CardItem :cardName="cardTitle" class="card" v-if="selected === 0">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 font-medium">
          {{ cardDescription }}
        </p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <img
            width="45"
            height="50"
            alt="bumbusly logo"
            src="./../../assets/media/images/Logo/Bumbusly.svg"
        />
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <v-radio-group
            v-model="optionSelected"
            column
            @click="test"
        >
          <v-radio
              label="Phone"
              value=1
              color="success"
          ></v-radio>
          <v-radio
              label="Email"
              value=2
              color="success"
          ></v-radio>
        </v-radio-group>
        <BaseButton
            text="Send"
            bgColor="green"
            textColor="green"
            @buttonClicked="recoveryMethod()"
        >
        </BaseButton>
      </template>
      <!-- end::Body of Card -->
    </CardItem>
    <!-- end::Forgot Password Card -->
    <!-- begin::Recover Forgot Password With Email -->
    <ForgotPasswordWithPhone v-if="selected == 1"
                             @submitted-phone="submittedPhone"
                             @change-to-email="changeToEmail"
    ></ForgotPasswordWithPhone>
    <!-- end::Recover Forgot Password With Email -->
    <!-- begin::Recover Forgot Password With Phone -->
    <ForgotPasswordWithEmail v-if="selected == 2"
                             @change-to-phone="changeToPhone"
    ></ForgotPasswordWithEmail>
    <!-- end::Recover Forgot Password With Phone -->
    <!-- begin::Reset Forgot Password With Phone -->
    <ResetPasswordWithPhone v-if="selected == 3"></ResetPasswordWithPhone>
    <!-- end::Reset Forgot Password With Phone -->

  </div>
  <!-- end::Container -->
</template>