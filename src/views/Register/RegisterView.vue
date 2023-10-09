<script lang="ts">
// Import Styling of This View
import './RegisterViewStyle.scss'

// Import Animation Library
import { animate } from 'motion'

// Import Custom Components
import YellowBackground from '@/components/YellowBackground.vue'
import CardItem from '@/components/UI/CardItem.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'

// Import Axious API
import axios from 'axios'

// Import Toast Library and Setup
import { useToast } from 'vue-toastification'
const toast = useToast()

// Import Router
import router from './../../router'

// Content Of View
export default {
  mounted() {
    const animation = animate(
      '.card',
      { opacity: 1, transform: 'scale(0.95)' },
      { delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1] }
    )
  },
  data() {
    return {
      // Card Attributes
      cardTitle: 'Register',
      cardDescription: 'Enter your information to register',
      // Labels
      usernameLabel: 'Username',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      cPasswordLabel: 'Confirm Passowrd',
      // Placeholders
      usernamePlaceholder: 'BillGates',
      emailPlaceholder: 'example@gmail.com',
      passwordPlaceholder: '••••••••••',
      // Check Validation
      usernameValid: 'default',
      emailValid: 'default',
      passwordValid: 'default',
      cPasswordValid: 'default',
      agreementValid: false,
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
      const usernameExp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i
      const result = usernameExp.test(this.username)
      console.log('username is ' + this.username + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Email Address
    validateEmaill() {
      // Validate Email Regex
      const emailExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const result = emailExp.test(this.emailAddress)
      console.log('e-mail is ' + this.emailAddress + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Password
    validatePassword() {
      // Validate Password Regex
      const passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
      const result = passExp.test(this.password)
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'))
      return result
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
        toast.error('Username should be at least 4 characters')
      }
      if (this.validateEmaill()) {
        this.emailValid = 'green'
      } else {
        this.emailValid = 'red'
        toast.error('Email not valid')
      }
      if (this.validatePassword()) {
        this.passwordValid = 'green'
      } else {
        this.passwordValid = 'red'
        toast.error(
          'Password should be minimum eight characters, at least one letter, one number and one special character'
        )
      }
      if (this.validateCPassword()) {
        this.cPasswordValid = 'green'
      } else {
        this.cPasswordValid = 'red'
        toast.error('Confirmed password is not valid')
      }
      if (!this.agreementValid) {
        toast.error('To register on the site, you must accept its rules.')
      }
      if (
        this.validateUsername() &&
        this.validateEmaill() &&
        this.validatePassword() &&
        this.validateCPassword() &&
        this.agreementValid
      ) {
        this.register()
      }
    },
    async register() {
      this.isLoading = true
      try {
        const url = 'https://bb.abansoft.ir/api/v1/account/s'
        const body = {
          username: this.username,
          password: this.password,
          email: this.emailAddress
        }
        const headers: Object = {
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(url, body, headers)
        if (data.content === true) {
          toast.success('Your account has been successfully created, please login')
          router.push('/login')
          this.isLoading = false
        }
      } catch (error) {
        toast.error('It is not possible to create a user account with the entered information')
        console.log(error)
        this.isLoading = false
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
  <!-- begin::Loading Compoennt -->
  <BeeLoader v-if="isLoading"></BeeLoader>
  <!-- end::Loading Compoennt -->
  <!-- begin::Container (Register Form) -->
  <form class="w-screen h-screen flex justify-center align-center items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Register Card -->
    <!-- begin::Description of Card -->
    <CardItem :card-name="cardTitle" class="card">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 text-[14px] font-[500]">{{ cardDescription }}</p>
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
        <div class="flex flex-col gap-4">
          <!-- begin::Username Component -->
          <div>
            <!-- begin::Username Label -->
            <label class="block text-sm leading-6">{{ usernameLabel }}</label>
            <!-- end::Username Label -->
            <!-- begin::Username Text Input -->
            <TextInput
              id="username"
              label="Username"
              type="text"
              :placeholder="usernamePlaceholder"
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
            </TextInput>
            <!-- end::Username Text Input -->
          </div>
          <!-- end::Username Component -->
          <!-- begin::Email Componenet -->
          <div>
            <!-- begin::Email Address Label -->
            <label class="block text-sm leading-6">{{ emailLabel }}</label>
            <!-- end::Email Address Label -->
            <!-- begin::Email Text Input -->
            <TextInput
              id="email"
              type="email"
              :placeholder="emailPlaceholder"
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
            </TextInput>
            <!-- end::Email Text Input -->
          </div>
          <!-- end::Email Componenet -->
          <!-- begin::Password Component -->
          <div>
            <!-- begin::Password Label -->
            <label class="block text-sm leading-6">{{ passwordLabel }}</label>
            <!-- end::Password Label -->
            <!-- begin::Password Text Input -->
            <TextInput
              id="password"
              type="password"
              :placeholder="passwordPlaceholder"
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
                </small>
              </template>
            </TextInput>
            <!-- end::Password Text Input -->
          </div>
          <!-- end::Password Component -->
          <!-- begin::Confirm Password Component -->
          <div>
            <!-- begin::Confirm Password Label -->
            <label class="block text-sm leading-6">{{ cPasswordLabel }}</label>
            <!-- end::Confirm Password Label -->
            <!-- begin::Confirm Password Text Input -->
            <TextInput
              id="cPassword"
              type="password"
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
          <!-- end::Password Component -->
          <!-- begin::Select Menu of Country -->
          <div>
            <label for="language" class="text-sm font-medium leading-6 text-gray-900">
              Select Language
            </label>
            <div class="flex w-full">
            <SelectMenu clas1s="w-full rounded-l-lg overflow-hidden"></SelectMenu>
            <SelectMenu class="w-full rounded-r-lg overflow-hidden"></SelectMenu>
          </div>
          </div>
          <!-- end::Select Menu of Country -->
          <BaseButton
            text="Register"
            bgColor="green"
            textColor="green"
            @buttonClicked="registerClicked()"
          >
          </BaseButton>
          <div class="flex items-center mb-4">
            <input
              id="terms-acknowledge"
              type="checkbox"
              class="w-6 h-6 text-green-600 = rounded-xl focus:ring-green-500 focus:ring-2 accent-green-500"
              v-model="agreementValid"
            />
            <label for="terms-acknowledge" class="ml-2 text-sm font-normal text-gray-800">
              I acknowledge I have read the
              <a class="condition-link font-medium"> Terms & Conditions </a>
              and
              <a class="condition-link font-medium"> Online Privacy Policy </a>
            </label>
          </div>
        </div>
      </template>
      <!-- end::Body of Card -->
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <HrDivision text="Already have an account?"></HrDivision>
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
