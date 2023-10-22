<script lang="ts">
// Import Styling of This View
import './ForgotPasswordViewStyle.scss'

// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/UI/YellowBackground.vue";

import ForgotPasswordWithPhone from "@/layouts/ForgotPasswordWithPhone/ForgotPasswordWithPhone.vue";
import ForgotPasswordWithEmail from "@/layouts/ForgotPasswordWithEmail/ForgotPasswordWithEmail.vue";
import ResetPasswordWithPhone from "@/layouts/ResetPasswordWithPhone/ResetPasswordWithPhone.vue";
import NewPassword from "@/layouts/NewPassword/NewPassword.vue";
import SendSuccessfullyEmail from "@/layouts/SendSuccessfullyEmail/SendSuccessfullyEmail.vue";

// Import Animation Library
import {animate} from 'motion'
import BaseButton from "@/components/UI/BaseButton.vue";

import {useStore} from "vuex";
import store from "@/store";

// Import Router
import router from "@/router";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  computed: {
    test() {

    }
  },
  mounted() {
/*    const animation = animate(
        '.card',
        {opacity: 1, transform: 'scale(0.95)'},
        {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
    )*/
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
  components: {
    BaseButton,
    YellowBackground,
    CardItem,
    ForgotPasswordWithPhone,
    ForgotPasswordWithEmail,
    ResetPasswordWithPhone,
    NewPassword,
    SendSuccessfullyEmail
  },
  methods: {
    recoveryMethod() {
      this.selected = +this.optionSelected;
    },
    changeToPhone() {
      this.selected = 1;
    },
    changeToEmail() {
      this.selected = 2;
    },
    submittedPhone() {
      this.selected = 3;
    },
    submittedNewPass() {
      this.selected = 4;
    },
    submittedEmail() {
      this.selected = 5;
    },
    submittedPassword() {
      router.push('/signin')
    },
    selectedOption(){
      return 'bg-gray-100 dark:bg-gray-600 rounded-lg'
    }
  }
}
</script>

<template>
  <!-- begin::Container -->
  <div id="main-container" class="w-screen h-screen flex justify-center sm:align-center sm:items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Forgot Password Card -->
    <!-- begin::Description of Card -->
    <CardItem :cardName="cardTitle" class="card mt-10" v-if="selected === 0">
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
        <v-radio-group
            v-model="optionSelected"
            column
            @click="test"
        >
          <v-radio
              label="Mobile"
              value=1
              color="success"
              :class="optionSelected == '2' ? '' : selectedOption()"
              class="w-100"
          ></v-radio>
          <v-radio
              label="Email"
              value=2
              color="success"
              class="w-100"
              :class="optionSelected == '1' ? '' : selectedOption()"
          ></v-radio>
        </v-radio-group>
        <BaseButton
            text="Next"
            bgColor="green"
            textColor="green"
            @buttonClicked="recoveryMethod()"
        >
        </BaseButton>
      </template>
      <!-- end::Body of Card -->
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <HrDivision text="Sign in with an account?"></HrDivision>
          <BaseButton
              text="Sign in"
              link="signin"
              bgColor="green"
              textColor="green"
              isOutline="true"
          ></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
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
                             @submitted-email="submittedEmail"
                             @change-to-phone="changeToPhone"
    ></ForgotPasswordWithEmail>
    <!-- end::Recover Forgot Password With Phone -->
    <!-- begin::Reset Forgot Password With Phone -->
    <ResetPasswordWithPhone v-if="selected == 3"
                            @change-to-phone="changeToPhone"
                            @change-to-newPass="submittedNewPass"
    ></ResetPasswordWithPhone>
    <!-- end::Reset Forgot Password With Phone -->
    <!-- begin::New Forgot Password With Phone -->
    <NewPassword v-if="selected == 4"
                            @submit-button="submittedPassword"
    ></NewPassword>
    <!-- end::New Forgot Password With Phone -->
    <!-- begin::Send Email Successfully -->
    <SendSuccessfullyEmail v-if="selected == 5"
                 @submit-button="submittedPassword"
    ></SendSuccessfullyEmail>
    <!-- end::Send Email Successfully -->
  </div>
  <!-- end::Container -->
</template>

<style >
.v-selection-control-group {
  display: flex;
  flex-direction: column;
  gap: 16px !important;
}

.v-selection-control .v-label {
  width: 100%
}

</style>