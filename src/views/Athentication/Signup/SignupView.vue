<script lang="ts">
// Import Styling of This View
import './SignupViewStyle.scss'

// Import Animation Library
import {animate} from 'motion'

// Import Custom Components
import YellowBackground from '@/components/UI/YellowBackground.vue'
import CardItem from '@/components/UI/CardItem.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'
import MobileBox from '@/components/UI/MobileBox.vue'
import ChangeThemeButton from "@/components/UI/ChangeThemeButton.vue";
import BumbuslyLogo from "@/components/UI/BumbuslyLogo.vue";
import ErrorAcceptPolicy from "@/components/UI/Toasts/Errors/ErrorAcceptPolicy.vue";
import SuccessCreateUser from "@/components/UI/Toasts/Success/SuccessCreateUser.vue";

import {useStore} from "vuex";
import store from "@/store";

// Import Axious API
import axios from 'axios'

// Import Toast Library and Setup
import {useToast} from 'vue-toastification'

const toast = useToast()

// Import Router
import router from './../../router'

// Content Of View
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
      // Card Attributes
      cardTitle: 'Sign up',
      cardDescription: 'Enter your information to signup',
      // Labels
      mobileLabel: 'Mobile',
      passwordLabel: 'Password',
      cPasswordLabel: 'Confirm Password',
      // Placeholders
      phonePlaceholder: 'mobile',
      passwordPlaceholder: '••••••••••',
      // Check Validation
      firstTryPhone: true,
      firstTryPassword: true,
      phoneValid: 'default',
      passwordValid: 'default',
      cPasswordValid: 'default',
      agreementValid: false,
      // Errors of validations
      invalidPhone: 'Mobile is not valid !',
      /*invalidPassword: 'Password is not Match !',*/
      invalidCPassword: 'Confirm Password is not Match !',
      // Variables
      phone: '',
      password: '',
      cPassword: '',
      countryCode: '',
      isLoading: false,
      selected: null,
      options: ['list', 'of', 'options']
    }
  },
  components: {
    BumbuslyLogo,
    ChangeThemeButton,
    YellowBackground,
    CardItem,
    BeeLoader,
    MobileBox,
    ErrorAcceptPolicy,
    SuccessCreateUser
  },
  computed: {},
  methods: {
    // Validate Phone
    validatePhone() {
      // Validate Phone
      const result = (this.phone != '')
      // console.log('phone is ' + this.phone + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Validate Confirm Password
    validateCPassword() {
      const cPassword = this.cPassword
      const result = this.password === cPassword && cPassword != ''
      // console.log('confirm password is ' + this.cPassword + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phoneValid = 'default'
      this.phone = value
    },
    // Putting value of Country text input to variable
    handleCountryInputValueUpdated(value: string) {
      // console.log(value)
      this.countryCode = value
    },
    // Putting value of Password text input to variable
    handlePasswordInputValueUpdated(value: string) {
      this.passwordValid = 'default'
      this.password = value
    },
    // Putting value of Confirm Password text input to variable
    handleCPasswordInputValueUpdated(value: string) {
      this.cPasswordValid = 'default'
      this.cPassword = value
    },
    // Signin Button Clicked Function
    signupClicked() {
      this.firstTryPhone = false
      this.firstTryPassword = false
      if (this.validatePhone()) {
        this.phoneValid = 'green'
      } else {
        this.phoneValid = 'red'
      }
      /*      if (this.validatePassword()) {
              this.passwordValid = 'green'
            } else {
              this.passwordValid = 'red'
              toast.error(
                  'Password should be minimum eight characters, at least one letter, one number and one special character'
              )
            }*/
      if (this.validateCPassword()) {
        this.cPasswordValid = 'green'
        this.passwordValid = 'green'
      } else {
        this.cPasswordValid = 'red'
        this.passwordValid = 'red'
      }
      if (!this.agreementValid) {
        toast.error(ErrorAcceptPolicy, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: false,
          rtl: false
        });
      }
      if (
          this.validatePhone() &&
          /*this.validatePassword() &&*/
          this.validateCPassword() &&
          this.agreementValid
      ) {
        this.signup()
      }
    },
    async signup() {
      this.isLoading = true
      try {
        const url = 'https://bb.abansoft.ir/api/v1/account/s'
        const body = {
          username: this.countryCode + this.phone,
          phoneNumber: this.countryCode + this.phone,
          password: this.password,
        }
        const headers: Object = {
          'Content-Type': 'application/json'
        }
        const {data} = await axios.post(url, body, headers)
        if (data.content === true) {
          toast.success(SuccessCreateUser, {
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: false,
            rtl: false
          });
          this.isLoading = false
          router.push('/signin')
        }
      } catch (error) {
        toast.error('It is not possible to create a user account with the entered information')
        this.isLoading = false
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Bumbusly | Signup Page'
      }
    }
  }
}
</script>

<template>
  <!-- begin::Container (Signup Form) -->
  <form class="w-screen h-screen flex justify-center sm:align-center sm:items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->

    <!--begin::Change Theme Button-->
    <ChangeThemeButton></ChangeThemeButton>
    <!--end::Change Theme Button-->

    <!-- begin::Signup Card -->
    <!-- begin::Description of Card -->
    <CardItem :card-name="cardTitle" class="card mt-10 aspect-[3/4]">
      <template v-slot:cardDescription>
        <p class="text-yellow-800 text-[14px] font-[500]">{{ cardDescription }}</p>
      </template>
      <!-- end::Description of Card -->
      <!-- begin::Icon of Card (Bumbusly) -->
      <template v-slot:cardImage>
        <BumbuslyLogo></BumbuslyLogo>
      </template>
      <!-- end::Icon of Card (Bumbusly) -->
      <!-- begin::Body of Card -->
      <template v-slot:cardBody>
        <div class="flex flex-col gap-4">

          <!--Test Section-->
          <MobileBox
              id="phone"
              :color="phoneValid"
              @input-country-updated="handleCountryInputValueUpdated"
              @input-value-updated="handlePhoneInputValueUpdated">
            <template v-slot:helpText>
              <small
                  :class="phoneValid == 'red' ? '' : 'hidden'"
                  class="form-text text-muted text-red-500"
              >
                {{ invalidPhone }}
              </small>
            </template>
          </MobileBox>
          <!--Test Section-->

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
              text="Sign up"
              bgColor="green"
              textColor="green"
              :isWaiting="isLoading"
              @buttonClicked="signupClicked()"
          >
          </BaseButton>
          <div class="flex items-center mb-4">
            <input
                id="terms-acknowledge"
                type="checkbox"
                class="w-6 h-6 text-green-600 = rounded-xl focus:ring-green-500 focus:ring-2 accent-green-500"
                v-model="agreementValid"
            />
            <label for="terms-acknowledge" class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-50">
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
              text="Sign in"
              link="signin"
              bgColor="green"
              textColor="green"
              isOutline="true"
          ></BaseButton>
        </div>
      </template>
      <!-- end::Additional Section -->
    </CardItem>
    <!-- end::Signup Card -->
  </form>
  <!-- end::Container (Signup Form) -->
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>