<script lang="ts">
// Import Styling of This View
import './RegisterViewStyle.scss'

// Import Custom Components
import YellowBackground from './../../components/YellowBackground.vue'
import CardItem from '../../components/UI/CardItem.vue'

// Import Axious API
import axios from 'axios'

// Import Toast Library and Setup
import { useToast } from 'vue-toastification'
const toast = useToast()

// Import Router
import router from './../../router'

// Content Of View
export default {
  data() {
    return {
      // Card Attributes
      cardTitle: 'Register',
      cardDescription: 'Enter your information to register',
      //Labels
      usernameLabel: 'Username',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      cPasswordLabel: 'Confirm Passowrd',
      // Check Validation
      usernameValid: 'default',
      emailValid: 'default',
      passwordValid: 'default',
      cPasswordValid: 'default',
      // Errors of validations
      invalidUsername: 'Username not valid !',
      invalidEmail: 'Email not valid !',
      invalidPassword: 'Password not valid !',
      invalidCPassword: 'Confirm Password not Match !',
      // Variables
      username: '',
      emailAddress: '',
      password: '',
      cPassword: '',
      // Posted Request Data
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
      const expression: RegExp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i
      const username: string = this.username
      const result: boolean = expression.test(username)
      console.log('username is ' + this.username + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Email Address
    validateEmaill() {
      // Validate Email Regex
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const email: string = this.emailAddress
      const result: boolean = expression.test(email)
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Password
    validatePassword() {
      // Validate Password Regex
      const expression: RegExp =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
      const password: string = this.password
      const result: boolean = expression.test(password)
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Confirm Password
    validateCPassword() {
      const cPassword: string = this.cPassword
      const result: boolean = this.password === cPassword
      console.log(
        'confirm password is ' + this.cPassword + ' ' + (result ? 'correct' : 'incorrect')
      )
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
    // Putting value of Confirm Password text input to variable
    handleCPasswordInputValueUpdated(value: string) {
      this.cPassword = value
    },
    // Login Button Clicked Function
    registerClicked() {
      if (this.validateUsername()) {
        this.usernameValid = 'green'
      } else {
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
        this.passwordValid = 'red'
      }
      if (this.validateCPassword()) {
        this.cPasswordValid = 'green'
      } else {
        this.cPasswordValid = 'red'
      }
      if (
        this.validateUsername() &&
        this.validateEmaill() &&
        this.validatePassword() &&
        this.validateCPassword()
      ) {
        this.register()
      }
    },
    async register() {
      try {
        const url = 'https://bb.abansoft.ir/api/v1/account/s'
        const body = {
          username: this.username,
          password: this.password,
          email: this.emailAddress
        }
        const headers: object = {
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(url, body, headers)
        this.post = data
        if (this.post.content === true) {
          toast.success('Your account has been successfully created, please login.')
          router.push('/login')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Bumbusly | Register Page'
      }
    }
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
    <CardItem :card-name="cardTitle">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 text-[14px] font-[500]">{{ cardDescription }}</p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <img src="./../../assets/media/images/Logo/Bumbusly.svg" />
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <!-- begin::Username Component -->
        <div>
          <!-- begin::Username Label -->
          <label class="block text-sm leading-6">{{ usernameLabel }}</label>
          <!-- end::Username Label -->
          <!-- begin::Username Text Input -->
          <text-input
            id="username"
            label="Username"
            type="text"
            placeholder="BillGates"
            required="true"
            autocomplete="username"
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
          <!-- end::Username Text Input -->
        </div>
        <!-- end::Username Component -->
        <!-- begin::Email Componenet -->
        <div>
          <!-- begin::Email Address Label -->
          <label class="block text-sm leading-6">Email Address</label>
          <!-- end::Email Address Label -->
          <!-- begin::Email Text Input -->
          <text-input
            id="email"
            label="Email Address"
            type="email"
            placeholder="example@gmail.com"
            required="true"
            autocomplete="email"
            :color="emailValid"
            @input-value-updated="handleEmailInputValueUpdated"
          >
            <template v-slot:helpText>
              <small
                :class="emailValid == 'red' ? '' : 'hidden'"
                class="form-text text-muted text-red-500"
              >
                {{ invalidEmail }}
              </small>
            </template>
          </text-input>
          <!-- end::Email Text Input -->
        </div>
        <!-- end::Email Componenet -->
        <!-- begin::Password Component -->
        <div>
          <!-- begin::Password Label -->
          <label class="block text-sm leading-6">Password</label>
          <!-- end::Password Label -->
          <!-- begin::Password Text Input -->
          <text-input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••••"
            required="true"
            autocomplete="password"
            :color="passwordValid"
            hidden="true"
            @input-value-updated="handlePasswordInputValueUpdated"
          >
            <template v-slot:helpText>
              <small
                :class="passwordValid == 'red' ? '' : 'hidden'"
                class="form-text text-muted text-red-500"
              >
                {{ invalidPassword }}
                !</small
              >
            </template>
          </text-input>
          <!-- end::Password Text Input -->
        </div>
        <!-- end::Password Component -->
        <!-- begin::Confirm Password Component -->
        <div>
          <!-- begin::Confirm Password Label -->
          <label class="block text-sm leading-6">Confirm Password</label>
          <!-- end::Confirm Password Label -->
          <!-- begin::Confirm Password Text Input -->
          <text-input
            id="cPassword"
            label="confirm Password"
            type="password"
            placeholder="••••••••••"
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
                !</small
              >
            </template>
          </text-input>
          <!-- end::Password Text Input -->
        </div>
        <!-- end::Password Component -->
        <!-- begin::Select Menu of Country -->
        <div>
          <label for="language" class="text-sm font-medium leading-6 text-gray-900"
            >Choose Language</label
          >
          <SelectMenu></SelectMenu>
        </div>
        <!-- end::Select Menu of Country -->
        <BaseButton
          text="Register"
          bgColor="green"
          textColor="green"
          @buttonClicked="registerClicked()"
        ></BaseButton>
        <div class="flex items-center mb-4">
          <input
            id="terms-acknowledge"
            type="checkbox"
            value=""
            class="w-6 h-6 text-green-600 = rounded-xl focus:ring-green-500 focus:ring-2 accent-green-500"
          />
          <label for="terms-acknowledge" class="ml-2 text-sm font-normal text-gray-800">
            I acknowledge I have read the
            <a class="condition-link font-medium"> Terms & Conditions </a>
            and
            <a class="condition-link font-medium"> Online Privacy Policy </a>
          </label>
        </div>
      </template>
      <!-- end::Body of Card -->
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <hr-div text="Already have an account?"></hr-div>
          <BaseButton
            text="Login"
            link="login"
            bgColor="green"
            textColor="green"
            isOutline="true"
          ></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
    </CardItem>
    <!-- end::Register Card -->
  </form>
  <!-- end::Container (Register Form) -->
</template>