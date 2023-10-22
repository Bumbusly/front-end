<script lang="ts">

// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/UI/YellowBackground.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
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
      cardTitle: 'New Password',
      cardDescription: "Enter your new password below.",
      passwordLabel: 'Password',
      cPasswordLabel: 'Confirm Password',
      passwordPlaceholder: '••••••••••',
      passwordValid: 'default',
      cPasswordValid: 'default',
      invalidCPassword: 'Password is not Match !',
      phone:'',
      password: '',
      cPassword: '',
    }
  },
  components: {BaseButton, YellowBackground, CardItem},
  emits: ['submit-button'],
  methods: {
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    submittedClicked() {
      this.$emit('submit-button')
    },
    // Validate Confirm Password
    validateCPassword() {
      const cPassword = this.cPassword
      const result = this.password === cPassword && cPassword != ''
      console.log(
          'confirm password is ' + this.cPassword + ' ' + (result ? 'correct' : 'incorrect')
      )
      return result
    },
    // Putting value of Password text input to variable
    handlePasswordInputValueUpdated(value: string) {
      this.password = value
    },
    // Putting value of Confirm Password text input to variable
    handleCPasswordInputValueUpdated(value: string) {
      this.cPassword = value
    },
    changePasswordClicked(){
      if (this.validateCPassword()) {
        this.cPasswordValid = 'green'
        this.passwordValid = 'green'
      } else {
        this.cPasswordValid = 'red'
        this.passwordValid = 'red'
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

      <!-- begin::Password Component -->
      <div>
        <!-- begin::Password Text Input -->
        <TextInput
            id="password"
            type="password"
            :label="passwordLabel"
            :placeholder="passwordPlaceholder"
            required="true"
            autocomplete="password"
            :color="passwordValid"
            hidden="true"
            @input-value-updated="handlePasswordInputValueUpdated"
        >
        </TextInput>
        <!-- end::Password Text Input -->
      </div>
      <!-- end::Password Component -->
      <!-- begin::Confirm Password Component -->
      <div>
        <!-- begin::Confirm Password Text Input -->
        <TextInput
            id="cPassword"
            type="password"
            :label="cPasswordLabel"
            :placeholder="passwordPlaceholder"
            required="true"
            autocomplete="password"
            :color="cPasswordValid"
            hidden="true"
            @input-value-updated="handleCPasswordInputValueUpdated"
        >
          <template v-slot:helpText>
            <small
                :class="cPasswordValid == 'red' ? '' : 'hidden'"
                class="form-text text-muted text-red-500"
            >
              {{ invalidCPassword }}
            </small>
          </template>
        </TextInput>
        <!-- end::Password Text Input -->
      </div>
      <!-- end::Confirm Password Component -->

      <BaseButton
          text="Change Password"
          :isDisable="false"
          bgColor="green"
          textColor="green"
          @buttonClicked="submittedClicked()"
      >
      </BaseButton>
    </template>
    <!-- end::Body of Card -->
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