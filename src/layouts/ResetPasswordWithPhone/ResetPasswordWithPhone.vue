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
      cardDescription: "An 4 digit code has been sent to your mobile.",
      phoneLabel: 'Enter your phone',
      phonePlaceholder: "9380354358",
      invalidPhone: 'Phone is not valid !',
      phoneValid: 'default',

    }
  },
  emits: ['change-to-email'],
  components: {BaseButton, YellowBackground, CardItem},
  methods: {
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    changeToEmail() {
      this.$emit('change-to-email')
    },
  }
}

</script>

<template>
  <!-- begin::Reset Password With Phone Card -->
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
        <label class="block text-sm leading-6">{{ phoneLabel }}</label>
        <div class="flex rounded-l-xl rounded-r-none">
          <v-combobox
              :items="['+98', '+1', '+8']"
              variant="outlined"
              density="compact"
          ></v-combobox>
          <!-- begin::Phone Text Input -->
          <TextInput class="rounded-l-xl rounded-r-none"
                     id="phone"
                     label="phone"
                     type="number"
                     :placeholder="phonePlaceholder"
                     required="true"
                     autocomplete="phone"
                     :color="phoneValid"
                     @input-value-updated="handlePhoneInputValueUpdated"
          >
            <template v-slot:helpText>
              <small
                  :class="phoneValid == 'red' ? '' : 'hidden'"
                  class="form-text text-muted text-red-500"
              >
                {{ invalidPhone }}
              </small>
            </template>
          </TextInput>
          <!-- end::Phone Text Input -->
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
            text="Reset password with email"
            bgColor="green"
            textColor="green"
            isOutline="true"
            @buttonClicked="changeToEmail()"
        ></BaseButton>
      </div>
    </template>
    <!-- end::Additional Section -->
  </CardItem>
  <!-- end::Reset Password With Phone Card -->
  <!-- end::Container -->
</template>