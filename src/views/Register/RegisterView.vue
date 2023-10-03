<script lang="ts">

// Import Styling of This View
import "./RegisterViewStyle.scss";

// Import Custom Components
import YellowBackground from "./../../components/YellowBackground.vue";
import CardItem from '../../components/UI/CardItem.vue'

// Import Axious API
import axios from 'axios'

// Content Of View
export default {
  data() {
    return {
      viewTitle: "Register",
      viewDescription: "Enter your information",
      invalidUsername: "Username not valid !",
      invalidEmail: "Email not valid !",
      invalidPassword: "Password not valid !",
      username: "",
      emailAddress: "",
      password: "",
      usernameValid: "default",
      emailValid: "default",
      passwordValid: "default",
      post: null
    }
  },
  components: {
    YellowBackground,
    CardItem
  },
  methods: {
    // Validate Username
    validateUsername() {
      // Validate Username
      const expression: RegExp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i;
      const username: string = this.username;
      const result: boolean = expression.test(username);
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'));
      return result
    },
    // Validate Email Address
    validateEmaill() {
      // Validate Email Regex
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const email: string = this.emailAddress;
      const result: boolean = expression.test(email);
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'));
      return result
    },
    // Validate Password
    validatePassword() {
      // Validate Password Regex
      const expression: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      const password: string = this.password;
      const result: boolean = expression.test(password);
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'));
      return result
    },
    // Putting value of Username text input to variable
    handleUsernameInputValueUpdated(value: string) {
      this.username = value
    },
    // Putting value of Email text input to variable
    handleEmailInputValueUpdated(value: string) {
      this.emailAddress = value
    },
    // Putting value of Password text input to variable
    handlePasswordInputValueUpdated(value: string) {
      this.password = value
    },
    // Login Button Function
    registerClicked() {
      if (this.validateUsername()) {
        this.usernameValid = 'green'
      } else {
        this.usernameValid = 'red'
      }
      if (this.validateEmaill()) {
        this.emailValid = 'green'
      } else {
        this.emailValid = 'red';
      }
      if (this.validatePassword()) {
        this.passwordValid = 'green'
      } else {
        this.passwordValid = 'red'
      }
      if (this.validateUsername() && this.validateEmaill() && this.validatePassword()) {
        this.testApi()
      }
    }
    ,
    async testApi() {
      try {
        const url = "https://bb.abansoft.ir/api/v1/account/s";
        const body = {
          "username": this.username,
          "password": this.password,
          "email": this.emailAddress,
        }
        const headers : object = {
          'Content-Type': 'application/json',
        }
        const { data } = await axios.post(url, body, headers);
        this.post = data;
      } catch (error) {
        console.log(error);
      }
    },
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
  <!-- begin::Container (Register Form) -->
  <form class="w-screen h-screen flex justify-center align-center items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Register Card -->
    <!-- begin::Description of Card -->
    <CardItem :card-name="viewTitle">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 font-medium">{{ viewDescription }}</p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <img src="./../../assets/media/images/Logo/Bumbusly.svg">
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <!-- begin::Username Text Input -->
        <text-input id="username" label="Username" type="text" placeholder="Mr.X" required=true autocomplete="username"
          :color="usernameValid" @input-value-updated="handleUsernameInputValueUpdated">
          <template v-slot:helpText>
            <small :class="usernameValid == 'red' ? '' : 'hidden'" class="form-text text-muted text-red-500">
              {{ invalidUsername }}
            </small>
          </template>
        </text-input>
        <!-- end::Username Text Input -->
        <!-- begin::Email Text Input -->
        <text-input id="email" label="Email Address" type="email" placeholder="example@gmail.com" required=true
          autocomplete="email" :color="emailValid" @input-value-updated="handleEmailInputValueUpdated">
          <template v-slot:helpText>
            <small :class="emailValid == 'red' ? '' : 'hidden'" class="form-text text-muted text-red-500">
              {{ invalidEmail }}
            </small>
          </template>
        </text-input>
        <!-- end::Email Text Input -->
        <!-- begin::Password Text Input -->
        <text-input id="password" label="Password" type="password" placeholder="••••••••••" required=true
          autocomplete="password" :color="passwordValid" hidden=true
          @input-value-updated="handlePasswordInputValueUpdated">
          <template v-slot:helpText>
            <small :class="passwordValid == 'red' ? '' : 'hidden'" class="form-text text-muted text-red-500">
              {{ invalidPassword }}
              !</small>
          </template>
        </text-input>
        <!-- end::Password Text Input -->
        <!-- begin::Select Menu of Country -->
        <div>
          <label for="language" class="text-sm font-medium leading-6 text-gray-900">Choose Language</label>
          <SelectMenu></SelectMenu>
        </div>
        <!-- end::Select Menu of Country -->
        <BaseButton text="Register" bgColor="green" textColor="green" @buttonClicked="registerClicked()"></BaseButton>
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
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <hr-div text="Already have an account?"></hr-div>
          <BaseButton text="Login" link="login" bgColor="green" textColor="green" isOutline="true"></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
    </CardItem>
    <!-- end::Register Card -->
  </form>
  <!-- end::Container (Register Form) -->
</template>