<script lang="ts">
// Import Styling of This View
import './SignupViewStyle.scss'

// Import Animation Library
import {animate} from 'motion'

// Import Custom Components
import YellowBackground from '@/components/YellowBackground.vue'
import CardItem from '@/components/UI/CardItem.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'

// Import Axious API
import axios from 'axios'

// Import Toast Library and Setup
import {useToast} from 'vue-toastification'
const toast = useToast()

// Import Router
import router from './../../router'

// Content Of View
export default {
  mounted() {
    const animation = animate(
        '.card',
        {opacity: 1, transform: 'scale(0.95)'},
        {delay: 0.05, duration: 0.3, easing: [0.17, 0.55, 0.55, 1]}
    )
  },
  data() {
    return {
      // Card Attributes
      cardTitle: 'Signup',
      cardDescription: 'Enter your information to signup',
      // Labels
      mobileLabel: 'Mobile',
      passwordLabel: 'Password',
      cPasswordLabel: 'Confirm Password',
      // Placeholders
      phonePlaceholder: '9380354358',
      passwordPlaceholder: '••••••••••',
      // Check Validation
      phoneValid: 'default',
      passwordValid: 'default',
      cPasswordValid: 'default',
      agreementValid: false,
      // Errors of validations
      invalidPhone: 'Phone is not valid !',
      /*invalidPassword: 'Password is not Match !',*/
      invalidCPassword: 'Confirm Password is not Match !',
      // Variables
      phone: '',
      password: '',
      cPassword: '',
      isLoading: false,
    }
  },
  components: {
    YellowBackground,
    CardItem,
    BeeLoader,
  },
  computed: {},
  methods: {
    // Validate Phone
/*    validatePhone() {
      // Validate Phone
      const phoneExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
      const result = phoneExp.test(this.phone)
      console.log('phone is ' + this.phone + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },*/

    // Validate Password
/*    validatePassword() {
      // Validate Password Regex
      const passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
      const result = passExp.test(this.password)
      console.log('password is ' + this.password + ' ' + (result ? 'correct' : 'incorrect'))
      return result
    },*/
    // Validate Confirm Password
    validateCPassword() {
      const cPassword = this.cPassword
      const result = this.password === cPassword && cPassword != ''
      console.log(
          'confirm password is ' + this.cPassword + ' ' + (result ? 'correct' : 'incorrect')
      )
      return result
    },
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    // Putting value of Password text input to variable
    handlePasswordInputValueUpdated(value: string) {
      this.password = value
    },
    // Putting value of Confirm Password text input to variable
    handleCPasswordInputValueUpdated(value: string) {
      this.cPassword = value
    },
    // Signin Button Clicked Function
    signupClicked() {
/*      if (this.validatePhone()) {
        this.phoneValid = 'green'
      } else {
        this.phoneValid = 'red'
        toast.error('Phone should be at least 4 characters')
      }*/
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
      }
      if (
          /*this.validatePhone() &&*/
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
          usenname: this.phone.toString(),
          password: this.password,
        }
        const headers: Object = {
          'Content-Type': 'application/json'
        }
        const {data} = await axios.post(url, body, headers)
        if (data.content === true) {
          toast.success('Your account has been successfully created, please sign in')
          this.isLoading = false
          router.push('/signin')
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
        document.title = to.meta.title || 'Bumbusly | Signup Page'
      }
    }
  }
}
</script>

<template>
  <!-- begin::Loading Compoennt -->
  <BeeLoader v-if="isLoading"></BeeLoader>
  <!-- end::Loading Compoennt -->
  <!-- begin::Container (Signup Form) -->
  <form class="w-screen h-screen flex justify-center sm:align-center sm:items-center">
    <!-- begin::Background -->
    <YellowBackground></YellowBackground>
    <!-- end::Background -->
    <!-- begin::Signup Card -->
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
          <!-- begin::Phone Component -->
          <div>
            <label class="block text-sm leading-6">{{ mobileLabel }}</label>
            <div class="flex">
              <v-combobox class=""
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
          <!-- end::Phone Component -->
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
<!--                <small
                    :class="passwordValid == 'red' ? '' : 'hidden'"
                    class="form-text text-muted text-red-500"
                >
                  {{ invalidPassword }}
                </small>-->
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
          <BaseButton
              text="Signup"
              bgColor="green"
              textColor="green"
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
              text="Signin"
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