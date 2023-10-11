<script lang="ts">
// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/YellowBackground.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import {animate} from "motion";

export default {
  mounted() {
    const animation = animate(
        '.card',
        {opacity: 1, transform: 'scale(1)'},
        {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
    )
  },
  data() {
    return {
      cardTitle: 'Forgot Password',
      cardDescription: "Enter your email and we'll send you a link to reset your password.",
      emailLabel: 'Enter Email',
      emailPlaceholder: "example@example.com",
      invalidEmail: 'Email is not valid !',
      emailValid: 'default',

    }
  },
  emits: ['change-to-email'],
  components: {BaseButton, YellowBackground, CardItem},
  methods: {
    // Putting value of Email text input to variable
    handleEmailInputValueUpdated(value: string) {
      this.email = value
    },
    changeToPhone() {
      this.$emit('change-to-phone')
    },
  }
}

</script>

<template>
  <!-- begin::Forgot Password With Email Card -->
  <!-- begin::Description of Card -->
  <CardItem :cardName="cardTitle" class="card">
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

      <!-- Testing Section-->
      <div>
        <label class="block text-sm leading-6">{{ emailLabel }}</label>
        <div class="flex w-full">
          <!-- begin::Email Text Input -->
          <TextInput class="w-full"
                     id="email"
                     label="email"
                     type="email"
                     :placeholder="emailPlaceholder"
                     required="true"
                     autocomplete="email"
                     :color="emailValid"
                     @input-value-updated="handleEmailInputValueUpdated">
            <template v-slot:helpText>
              <small
                  :class="emailValid == 'red' ? '' : 'hidden'"
                  class="form-text text-muted text-red-500"
              >
                {{ invalidEmail }}
              </small>
            </template>
          </TextInput>
          <!-- end::Email Text Input -->
        </div>
      </div>
      <!-- Testing Section -->
      <BaseButton
          text="Send"
          bgColor="green"
          textColor="green"
          @buttonClicked=""
      >
      </BaseButton>
    </template>
    <!-- end::Body of Card -->
    <!-- begin::Additional Section -->
    <template v-slot:cardAdditional>
      <div class="flex flex-col gap-2">
        <BaseButton
            text="Reset password with phone"
            bgColor="green"
            textColor="green"
            isOutline="true"
            @buttonClicked="changeToPhone()"
        ></BaseButton>
      </div>
    </template>
    <!-- end::Additional Section -->
  </CardItem>
  <!-- end::Forgot Password With Email Card -->
  <!-- end::Container -->
</template>