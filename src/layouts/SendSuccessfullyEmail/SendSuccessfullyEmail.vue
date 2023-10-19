<script lang="ts">
// Import Custom Components
import CardItem from "@/components/UI/CardItem.vue";
import YellowBackground from "@/components/UI/YellowBackground.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import {animate} from "motion";
import router from "@/router";

export default {
  mounted() {
/*    const animation = animate(
        '.card',
        {opacity: 1, transform: 'scale(1)'},
        {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
    )*/
  },
  data() {
    return {
      cardTitle: 'Send successfully',
      cardDescription: "A message has been sent to your email. Please check your email",
      emailLabel: 'Enter Email',
      emailPlaceholder: "example@example.com",
      invalidEmail: 'Email is not valid !',
      emailValid: 'default',
      email:''
    }
  },
  emits: ['submit-button'],
  components: {BaseButton, YellowBackground, CardItem},
  methods: {
    // Putting value of Email text input to variable
    handleEmailInputValueUpdated(value: string) {
      this.email = value
    },
    submittedButton() {
      this.$emit("submit-button");
    },
    submittedClicked(){
      router.push('signin');
    }
  }
}

</script>

<template>
  <!-- begin::Forgot Password With Email Card -->
  <!-- begin::Description of Card -->
  <CardItem class="card mt-10">
    <!-- begin::Body of Card -->
    <template v-slot:cardBody>
      <!-- Testing Section-->
      <div class="flex flex-col gap-10 justify-center aling-center items-center">
        <div>
          <img class="" src='@/components/svg/Icons/Envelope.svg' alt="Send Email Successfully"/>
        </div>

        <div class="flex flex-col justify-center align-center items-center text-center">
          <h1 class="text-[24px] font-[900] text-yellow-800">{{ cardTitle }}</h1>
          <p class="text-yellow-800 font-medium">
            {{ cardDescription }}
          </p>
        </div>
      </div>
      <!-- Testing Section -->
      <BaseButton
          text="ok"
          bgColor="green"
          textColor="green"
          @buttonClicked="submittedClicked"
      >
      </BaseButton>
    </template>
    <!-- end::Body of Card -->
  </CardItem>
  <!-- end::Forgot Password With Email Card -->
  <!-- end::Container -->
</template>