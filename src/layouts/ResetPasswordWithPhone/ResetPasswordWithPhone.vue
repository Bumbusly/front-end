<script lang="ts">
// Import Styles Of This Layout
import './ResetPasswordWithPhoneStyle.scss'
import FourDigitValidation from "@/components/UI/FourDigitValidation.vue";

// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/UI/YellowBackground.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import {animate} from "motion";
import store from '../../store'
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  unmounted() {
    clearInterval(this.interval)
  },
  created() {
      this.interval = setInterval(this.startTimer, 1000)
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
      cardTitle: 'Reset Password',
      cardDescription: "4 digits code has been sent to your mobile.",
      phoneLabel: 'Enter your phone',
      phonePlaceholder: "9380354358",
      phone: '',
      invalidPhone: 'Phone is not valid !',
      phoneValid: 'default',
      resendText: 'Resend',
      dataFromPaste: [''],
      interval: store.state.resetPasswordTimer,
      minutes: store.state.resetPasswordTimer / 60,
      seconds: store.state.resetPasswordTimer % 60
    }
  },
  computed: {
    Minutes() {
      this.minutes = Math.floor(store.state.resetPasswordTimer / 60)
      return this.minutes
    },
    Seconds() {
      this.seconds = store.state.resetPasswordTimer % 60
      return this.seconds
    },
  },
  components: {BaseButton, YellowBackground, CardItem, FourDigitValidation},
  methods: {
    startTimer() {
      if(store.state.resetPasswordTimer > 0){
        store.commit('setTimer', store.state.resetPasswordTimer - 1)
      }
    },
    // Putting value of Phone text input to variable
    changeToPhone() {
      this.$emit('change-to-phone')
    },
    changeToNewPass() {
      this.$emit('change-to-newPass')
    },
    resetTimer() {
      store.commit('setTimer', 120)
    },
  }
}
</script>

<template>
  <!-- begin::Reset Password With Phone Card -->
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
      <FourDigitValidation></FourDigitValidation>
      <!-- Testing Section -->

      <BaseButton
          text="Verify"
          :isDisable="false"
          bgColor="green"
          textColor="green"
          @buttonClicked="changeToNewPass()"
      >
      </BaseButton>

      <div class="my-5 flex flex-col justify-center items-center align-center text-center text-gray-600 gap-2">
        <h2>{{ String(Minutes).padStart(2, '0') }} : {{ String(Seconds).padStart(2, '0') }}</h2>
        <h2 class="text-clickable">Don’t have a code? <span class="text-green-500 font-bold"
                                                            @click="resetTimer()">{{ resendText }}</span></h2>
      </div>
    </template>
    <!-- end::Body of Card -->
    <!-- begin::Additional Section -->
    <template v-slot:cardAdditional>
      <HrDivision text="Wrong phone number?"></HrDivision>
      <BaseButton
          text="Edit phone number"
          bgColor="green"
          textColor="green"
          isOutline="true"
          @buttonClicked="changeToPhone()"
      ></BaseButton>
    </template>
    <!-- end::Additional Section -->
  </CardItem>
  <!-- end::Reset Password With Phone Card -->
  <!-- end::Container -->
</template>

<style scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>