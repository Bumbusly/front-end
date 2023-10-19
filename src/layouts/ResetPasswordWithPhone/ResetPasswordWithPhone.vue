<script lang="ts">
// Import Styles Of This Layout
import './ResetPasswordWithPhoneStyle.scss'

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
  created(){
    this.interval = setInterval(this.startTimer, 5000)
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
      code: '    ',
      resendText: 'Resend',
      dataFromPaste: [''],
      interval: store.state.resetPasswordTimer,
      keysAllowed: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
  components: {BaseButton, YellowBackground, CardItem},
  methods: {
    startTimer(){
      store.commit('setTimer', store.state.resetPasswordTimer - 1)
    },
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    changeToPhone() {
      this.$emit('change-to-phone')
    },
    changeToNewPass() {
      this.$emit('change-to-newPass')
    },
    handleDelete(event: Event) {
      //keydown event = move to previous element then only delete number
      let value = (event.target as HTMLInputElement).value;
      let currentActiveElement = event.target as HTMLInputElement;
      if (!value)
        (currentActiveElement.previousElementSibling as HTMLElement)?.focus();
    },
    onPaste(event: Event) {
      this.dataFromPaste = ((event as ClipboardEvent).clipboardData
          ?.getData("text")
          .trim() || "")
          .split("");
      if (this.dataFromPaste) {
        for (const num of this.dataFromPaste) {
          if (!this.keysAllowed.includes(num)) event.preventDefault();
        }
      }
    },
    resetTimer(){
      store.commit('setTimer', 120)
    },
    isNumber(event: Event) {
      (event.currentTarget as HTMLInputElement).value = "";
      const keyPressed: string = (event as KeyboardEvent).key;
      if (!this.keysAllowed.includes(keyPressed)) {
        event.preventDefault();
      }
    },
    handleInput(event: Event) {
      const inputType = (event as InputEvent).inputType;
      let currentActiveElement = event.target as HTMLInputElement;
      if (inputType === "insertText")
        (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
      if (inputType === "insertFromPaste" && this.dataFromPaste) {
        for (const num of this.dataFromPaste) {
          let id: number = parseInt(currentActiveElement.id.split("_")[1]);
          currentActiveElement.value = num;
          const cipherChars = [...this.code]; // convert into array
          cipherChars[id] = num; // alter array
          this.code = cipherChars.join(''); // convert back into string
          if (currentActiveElement.nextElementSibling) {
            currentActiveElement =
                currentActiveElement.nextElementSibling as HTMLInputElement;
            (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
          }
        }
      }
    }
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
      <img
          width="50"
          height="55"
          alt="bumbusly logo"
          src="./../../assets/media/images/Logo/Bumbusly.svg"
      />
    </template>
    <!-- end::Icon of Card (Bumbusly) -->
    <!-- begin::Body of Card -->
    <template v-slot:cardBody>

      <!-- Testing Section-->
      <div class="parent">
        <div class="child">
          <form class="grid grid-cols-4 gap-2">
            <input class="aspect-video"
                   v-for="(n, index) in code"
                   :key="index"
                   type="number"
                   pattern="\d*"
                   :id="'input_' + index"
                   maxlength="1"
                   v-model="code[index]"
                   @input="handleInput"
                   @keypress="isNumber"
                   @keydown.delete="handleDelete"
                   @paste="onPaste"
            />
          </form>
        </div>
      </div>
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
        <h2 class="text-clickable">Don’t have a code? <span class="text-green-500 font-bold" @click="resetTimer()">{{ resendText}}</span></h2>
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
input[type="number"] {
  text-align: center;
  border: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  border-color: #D2D5DA;
}

input[type="number"]:focus {
  border-width: 2px;
  border-color: #ffc107;
}

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