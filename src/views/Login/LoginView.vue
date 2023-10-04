<script lang="ts">
// Import Styling of This View
import './LoginViewStyle.scss'

// Import Custom Components
import YellowBackground from '../../components/YellowBackground.vue'
import CardItem from '../../components/UI/CardItem.vue'

// Import Axious API
import axios from 'axios'

// Import Toast Library
import { useToast } from 'vue-toastification'
// Get toast interface
const toast = useToast()

// Content Of View
export default {
  data() {
    return {
      // Card Attributes
      cardTitle: 'Login',
      cardDescription: 'Enter enter your username and password',

      // Check Validation
      usernameValid: 'default',
      emailValid: 'default',
      passwordValid: 'default',

      // Errors of validations
      invalidUsername: 'Username not valid !',
      invalidEmail: 'Email not valid !',
      invalidPassword: 'Password not valid !',

      // Variables
      username: '',
      emailAddress: '',
      password: ''
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
      const expression: RegExp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i
      const username: string = this.username
      const result: boolean = expression.test(username)
      console.log('username is ' + this.username + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Email Address
    validateEmaill() {
      // Valida Email Regex
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const email: string = this.emailAddress
      const result: boolean = expression.test(email)
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Password
    validatePassword() {
      // Valid Password Regex
      const expression: RegExp =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
      const password: string = this.password
      const result: boolean = expression.test(password)
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'))
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
    loginClicked() {
      if (this.validateUsername()) {
        this.usernameValid = 'green'
      } else {
        toast.error('Username should be at least 4 characters')
        this.usernameValid = 'red'
      }
      if (this.validateEmaill()) {
        this.emailValid = 'green'
      } else {
        this.emailValid = 'red'
      }
      if (this.validatePassword()) {
        this.passwordValid = 'green'
      } else {
        toast.error(
          'Password should be minimum eight characters, at least one letter, one number and one special character'
        )
        this.passwordValid = 'red'
      }
      if (this.validateUsername() && this.validatePassword()) {
        this.testApi()
      }
    },
    async testApi() {
      try {
        const url = 'https://bb.abansoft.ir/api/v1/account/'
        const body = {
          username: this.username,
          password: this.password,
          rememberMe: true
        }
        const headers: object = {
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(url, body, headers)
        this.post = data
        toast.success('You Logged Succesfully')
      } catch (error) {
        toast.error('Username or Password is Wrong')
        this.usernameValid = 'red'
        this.passwordValid = 'red'
        console.log(error)
      }
    }
  },
  // Set Title of Page
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Bumbusly | Login Page'
      }
    }
  }
}
</script>

<template>
  <!-- begin::Container -->
  <div id="main-container" class="w-screen h-screen flex justify-center align-center items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Register Card -->
    <!-- begin::Description of Card -->
    <CardItem :cardName="cardTitle">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 font-medium">
          {{ cardDescription }}
        </p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <img src="./../../assets/media/images/Logo/Bumbusly.svg" />
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <!-- begin::Username Label -->
        <label for="username" class="block text-sm leading-6"></label>
        <!-- end::Username Label -->
        <!-- begin::Username Text Input -->
        <text-input
          id="uesrname"
          label="Username"
          type="username"
          placeholder="mosfazli"
          required="true"
          autocomplete="true"
          :color="usernameValid"
          @input-value-updated="handleUsernameInputValueUpdated"
        >
          <template v-slot:helpText>
            <small
              :class="usernameValid == 'red' ? '' : 'hidden'"
              class="form-text text-muted text-red-500"
            >
              {{ invalidUsername }}
            </small>
          </template>
        </text-input>
        <!-- end::Email Text Input -->
        <!-- begin::Password Text Input -->
        <text-input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••••"
          required="true"
          autocomplete="true"
          :color="passwordValid"
          hidden="true"
          @input-value-updated="handlePasswordInputValueUpdated"
        >
          <template v-slot:helpText>
            <small
              :class="passwordValid == 'red' ? '' : 'hidden'"
              class="form-text text-muted text-red-500"
            >
              Password not valid!
            </small>
          </template>
        </text-input>
        <!-- end::Password Text Input -->
        <!-- begin::Login Button -->
        <BaseButton
          ref="loginButton"
          text="Login"
          bgColor="green"
          textColor="green"
          @buttonClicked="loginClicked()"
        >
        </BaseButton>
        <!-- end::Login Button -->
        <!-- begin::Forgot Password -->
        <div class="flex items-center mb-1">
          <a
            class="text-red-700 underline font-bold flex align-center items-center justify-center text-center w-full"
          >
            <h2>Forgot password ?</h2>
          </a>
        </div>
        <!-- end::Forgot Password -->
      </template>
      <!-- end::Body of Card -->
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <hr-div text="or"></hr-div>
          <BaseButton
            text="Register"
            link="register"
            bgColor="green"
            textColor="green"
            isOutline="true"
          ></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
    </CardItem>
    <!-- end::Register Card -->
  </div>
  <!-- end::Container -->
</template>