<script lang="ts">
// Import Styling of This View
import './LoginViewStyle.scss'

// Import Animation Library
import { animate } from 'motion'

// Import Custom Components
import YellowBackground from '../../components/YellowBackground.vue'
import CardItem from '../../components/UI/CardItem.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'

// Import axios API
import axios from 'axios'

// Import Toast Library
import { useToast } from 'vue-toastification'
// Get toast interface
const toast = useToast()

// Import Vuex Store
import { useStore } from 'vuex'

// Import Router
import router from './../../router'

// Content Of View
export default {
  mounted() {
    const animation = animate(
      '.card',
      { opacity: 1, transform: 'none' },
      { delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1] }
    )
  },
  setup() {
    const store = useStore()
    return { store }
  },
  data() {
    return {
      // Card Attributes
      cardTitle: 'Login',
      cardDescription: 'Enter enter your username and password',
      //Labels
      usernameLabel: 'Username',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      // Check Validation
      usernameValid: 'default',
      emailValid: 'default',
      passwordValid: 'default',
      // Errors of validations
      invalidUsername: 'Username should be at least 4 characters !',
      invalidEmail: 'Email not valid !',
      invalidPassword: 'Password not valid !',
      // Variables
      username: '',
      emailAddress: '',
      password: '',
      isLoading: false,
    }
  },
  components: {
    YellowBackground,
    CardItem,
    BeeLoader
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
        this.usernameValid = 'red'
      }
      if (this.validateEmaill()) {
        this.emailValid = 'green'
      } else {
        this.emailValid = 'red'
        // toast.error('Email not valid')
      }
      if (this.validatePassword()) {
        this.passwordValid = 'green'
      } else {
        this.passwordValid = 'red'
      }
      if (this.validateUsername() && this.validatePassword()) {
        this.login()
      }
    },
    async login() {
      this.isLoading = true
      try {
        const url: string = 'https://bb.abansoft.ir/api/v1/account/'
        const body: object = {
          username: this.username,
          password: this.password,
          rememberMe: true
        }
        const headers: object = {
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(url, body, headers)
        console.log(data)
        if (data.hasError === false) {
          this.storeData(
            this.username,
              data.content.token,
              data.content.refereshToken,
            true
          )
          toast.success('You Logged Succesfully')
          router.push('/profile')
          this.isLoading = false
        }
      } catch (error) {
        toast.error('Username or Password is Wrong')
        this.usernameValid = 'default'
        this.passwordValid = 'default'
        console.log(error)
        this.isLoading = false
      }
    },
    keymonitor(event: any) {
      if (event.key == 'Enter') {
        this.loginClicked()
      }
    },
    storeData(username: string, token: string, refereshToken: string, isAuth: boolean) {
      this.store.commit('setUsername', username)
      this.store.commit('setToken', token)
      this.store.commit('setRefereshToken', refereshToken)
      this.store.commit('setIsAuthenticated', isAuth)
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
        <!-- begin::Username Component -->
        <div>
          <!-- begin::Username Label -->
          <label for="username" class="block text-sm leading-6">{{ usernameLabel }}</label>
          <!-- end::Username Label -->
          <!-- begin::Username Text Input -->
          <TextInput
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
          </TextInput>
          <!-- end::Email Text Input -->
        </div>
        <!-- end::Username Component -->
        <!-- begin::Password Component -->
        <div>
          <!-- begin::Password Label -->
          <label for="password" class="block text-sm leading-6">{{ passwordLabel }}</label>
          <!-- end::Password Label -->
          <!-- begin::Password Text Input -->
          <TextInput
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••••"
            required="true"
            autocomplete="true"
            :color="passwordValid"
            hidden="true"
            @input-value-updated="handlePasswordInputValueUpdated"
            v-on:keyup="keymonitor"
          >
            <template v-slot:helpText>
              <small
                :class="passwordValid == 'red' ? '' : 'hidden'"
                class="form-text text-muted text-red-500"
              >
                Password not valid!
              </small>
            </template>
          </TextInput>
          <!-- end::Password Text Input -->
        </div>
        <!-- end::Password Component -->
        <!-- begin::Login Button -->
        <BaseButton
          ref="loginButton"
          text="Login"
          bgColor="green"
          textColor="green"
          :isDisable="isLoading"
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
          <HrDivision text="or"></HrDivision>
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
