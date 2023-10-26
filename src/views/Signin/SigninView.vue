<script lang="ts">
// Import Styling of This View
import './SigninViewStyle.scss'

// Import Animation Library
import {animate} from 'motion'

// Import Custom Components
import YellowBackground from "@/components/UI/YellowBackground.vue"
import CardItem from '@/components/UI/CardItem.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'
import ChangeThemeButton from "@/components/UI/ChangeThemeButton.vue";
import BumbuslyLogo from "@/components/UI/BumbuslyLogo.vue";

// Import axios API
import axios from 'axios'

// Import Toast Library
import {useToast} from 'vue-toastification'
// Get toast interface
const toast = useToast()

// Import Vuex Store
import {useStore} from 'vuex'

// Import Router
import router from './../../router'

// Content Of View
export default {
  mounted() {
    /*    const animation = animate(
            '.card',
            {opacity: 1, transform: 'none'},
            {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
        )*/
  },
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      // Card Attributes
      cardTitle: 'Sign in',
      cardDescription: 'Sign in to your account.',
      //Labels
      emailOrPhoneLabel: 'Email or Mobile',
      passwordLabel: 'Password',
      // Check Validation
      firstTryPhoneOrEmail: true,
      fistTryPassword: true,
      emailOrPhoneValid: 'default',
      passwordValid: 'default',
      // Errors of validations
      invalidPassword: 'Password not valid !',
      // Variables
      emailOrPhone: '',
      isEmail: true,
      password: '',
      isLoading: false,
    }
  },
  components: {
    YellowBackground,
    CardItem,
    BeeLoader,
    ChangeThemeButton,
    BumbuslyLogo
  },
  methods: {
    // Validate Email Address
    validateEmaill() {
      // Valida Email Regex
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const email: string = this.emailOrPhone;
      const result: boolean = expression.test(email);
      // console.log('e-mail is ' + email + ' ' + (result ? 'correct' : 'incorrect'));
      return result
    },
    // Validate Email Or Phone
    validateEmailOrPhone() {
      const result: boolean = this.emailOrPhone.length > 4
      // console.log('Email or Phone is ' + this.emailOrPhone + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Password
    validatePassword() {
      // Valid Password Regex
      /*      const expression: RegExp =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i*/
      const password: string = this.password
      const result: boolean = (password.length > 0)
      // console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Putting value of Email or Phone text input to variable
    handleEmailOrPhoneInputValueUpdated(value: string) {
      this.emailOrPhone = value
      if (this.firstTryPhoneOrEmail == false) {
        this.showValidateMobileOrPhoneInput()
      }
    },
    // Putting value of Password text input to variable
    handlePasswordInputValueUpdated(value: string) {
      this.password = value
      if (this.fistTryPassword == false) {
        this.showValidatePasswordInput()
      }
    },
    showValidateMobileOrPhoneInput() {
      if (this.validateEmaill()) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
      if (this.validateEmailOrPhone()) {
        this.emailOrPhoneValid = 'default'
      } else {
        this.emailOrPhoneValid = 'red'
      }
    },
    showValidatePasswordInput() {
      if (this.validatePassword()) {
        this.passwordValid = 'green'
      } else {
        this.passwordValid = 'red'
      }
    },
    validateInputs() {
      this.showValidateMobileOrPhoneInput()
      this.showValidatePasswordInput()
    },
    // Signin Button Function
    signinClicked() {
      this.firstTryPhoneOrEmail = false
      this.fistTryPassword = false
      this.validateInputs()
      if (this.validatePassword()) {
        this.signin()
      }
    },
    async signin() {
      this.isLoading = true
      try {
        const url: string = 'https://bb.abansoft.ir/api/v1/account/'
        const body: object = {
          provider: 'uid',
          username: this.emailOrPhone,
          password: this.password,
        }
        const headers: object = {
          'Content-Type': 'application/json'
        }
        const {data} = await axios.post(url, body, headers)
        // console.log(data)
        if (data.hasError === false) {
          this.storeData(
              data.content.userID,
              data.content.token,
              data.content.refereshToken,
              data.content.externalAuthStatus,
          )
          toast.success('You Logged Succesfully')
          router.push('/profile')
          this.isLoading = false
        }
      } catch (error) {
        toast.error('Mobile/Email or Password is Wrong')
        this.emailOrPhoneValid = 'default'
        this.passwordValid = 'default'
        console.log(error)
        this.isLoading = false
      }
    },
    keymonitor(event: any) {
      if (event.key == 'Enter') {
        this.signinClicked()
      }
    },
    storeData(userID: string, token: string, refereshToken: string, authenticationStatus: string) {
      this.store.commit('setUserID', userID)
      this.store.commit('setToken', token)
      this.store.commit('setRefereshToken', refereshToken)
      this.store.commit('setAuthenticationStatus', authenticationStatus)
    }
  },
  // Set Title of Page
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Bumbusly | Signin Page'
      }
    }
  }
}
</script>

<template>
  <!-- begin::Container -->
  <form class="w-screen h-screen flex justify-center sm:align-center sm:items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>

    <!--begin::Change Theme Button-->
    <ChangeThemeButton></ChangeThemeButton>
    <!--end::Change Theme Button-->


    <!-- end::Background -->
    <!-- begin::Signin Card -->
    <!-- begin::Description of Card -->
    <CardItem :cardName="cardTitle" class="card mt-10 accept-[4/3]">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 text-[14px] font-[500]">
          {{ cardDescription }}
        </p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <BumbuslyLogo></BumbuslyLogo>
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>

        <!-- begin::Email Or Phone Component -->
        <div class="flex flex-col gap-2">
          <!-- begin::Email or Phone Label -->
          <label class="block text-sm leading-6">{{ emailOrPhoneLabel }}</label>
          <!-- end::Email or Phone Label -->
          <!-- begin::Username Text Input -->
          <TextInput
              id="uesrname"
              type="username"
              placeholder="name@example.com"
              required="true"
              autocomplete="true"
              :color="emailOrPhoneValid"
              @input-value-updated="handleEmailOrPhoneInputValueUpdated"
          >
            <template v-slot:helpText>
              <small
                  :class="emailOrPhoneValid == 'red' ? '' : 'hidden'"
                  class="form-text text-muted text-red-500"
              >
                Email or Phone is invalid !
              </small>
            </template>
          </TextInput>
          <!-- end::Email Text Input -->
        </div>
        <!-- end::Email Or Phone Component -->

        <!-- begin::Password Component -->
        <div class="flex flex-col gap-2">
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
        <!-- begin::Signin Button -->
        <BaseButton
            ref="signinButton"
            text="Sign in"
            bgColor="green"
            textColor="green"
            :isWaiting="isLoading"
            @buttonClicked="signinClicked()"
        >
        </BaseButton>
        <!-- end::Signin Button -->
        <!-- begin::Forgot Password -->
        <RouterLink class="flex items-center mb-1" to="/forgot">
          <a
              class="text-red-700 underline font-bold flex align-center items-center justify-center text-center w-full"
          >
            <h2>Forgot password ?</h2>
          </a>
        </RouterLink>
        <!-- end::Forgot Password -->
      </template>
      <!-- end::Body of Card -->
      <!-- begin::Additional Section -->
      <template v-slot:cardAdditional>
        <div class="flex flex-col gap-2">
          <HrDivision text="or"></HrDivision>
          <BaseButton
              text="Sign up"
              link="signup"
              bgColor="green"
              textColor="green"
              isOutline="true"
          ></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
    </CardItem>
    <!-- end::Signin Card -->
  </form>
  <!-- end::Container -->
</template>
