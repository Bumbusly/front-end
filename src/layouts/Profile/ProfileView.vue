<script lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'
import HomeSvg from '@/components/svg/Icons/home.vue'
import PersonSvg from '@/components/svg/Icons/person.vue'
import MoveDownSvg from '@/components/svg/Icons/move_down.vue'
import SyncSvg from '@/components/svg/Icons/sync.vue'
import PaymentsSvg from '@/components/svg/Icons/payments.vue'
import SavingSvg from '@/components/svg/Icons/saving.vue'
import LocationSvg from '@/components/svg/Icons/location.vue'
import LockSvg from '@/components/svg/Icons/lock.vue'
import MenuItem from '@/components/UI/MenuItem.vue'
import ContactInfoItem from "@/components/UI/DataItem.vue";
import ProfilePersonalCard from "@/layouts/ProfilePersonalCard/ProfilePersonalCard.vue";
import Sidebar from "@/components/UI/Sidebar.vue";
import AuthenticationWarning from "@/layouts/AutenticationWarning/AuthenticationWarning.vue";
import AuthenticationWaiting from "@/layouts/AuthenticationWaiting/AuthenticationWaiting.vue";
import AuthenticationFailed from "@/layouts/AuthenticationFailed/AuthenticationFailed.vue";
import ProfileContactCard from "@/layouts/ProfileContactCard/ProfileContactCard.vue";
import ProfileSecurityCard from "@/layouts/ProfileSecurityCard/ProfileSecurityCard.vue";
import SidebarSvg from "@/components/svg/Icons/sidebar.vue"

import {useStore} from 'vuex'

// Import axios API
import axios from 'axios'

import router from "@/router";

export default {
  mounted() {
    this.checkAthenticationStatus()
    this.getProfile()
    if (window.innerWidth < 768) {
      this.showSidebar = true;
    }
  },
  unmounted() {
    // Cleanup listeners
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {},
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      isLoading: true,
      activeCard: 'AuthenticationWarning',
      needAuthintication: false,
      username: '',
      password: '',
      firstName: '',
      midName: '',
      lastName: '',
      gender: '',
      birthday: '',
      phone: '',
      email: '',
      address: '',
      country: '',
      city: '',
      state: '',
      district: '',
      zipCode: '',
      showSidebar: false,
      newUsername: '',
      newPhone: '',
      newEmail: '',
      newAddress: '',
      newCountry: '',
      newCity: '',
      newState: '',
      newZipCode: '',
      sidebarTemp: true,
      selectTab: 'Profile'
    }
  },
  components: {
    ProfileSecurityCard,
    ProfileContactCard,
    Sidebar,
    BaseButton,
    BeeLoader,
    HomeSvg,
    PersonSvg,
    MoveDownSvg,
    SyncSvg,
    PaymentsSvg,
    SavingSvg,
    LocationSvg,
    LockSvg,
    MenuItem,
    ContactInfoItem,
    ProfilePersonalCard,
    AuthenticationWarning,
    AuthenticationWaiting,
    AuthenticationFailed,
    SidebarSvg,
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 768) {
        this.showSidebar = true;
      } else {
        this.showSidebar = false;
      }
      window.addEventListener('resize', this.handleResize);
    },
    checkAthenticationStatus() {
      /*
      SUCCESS => 1
      RESULT_CAMERA_NOT_SUPPORTED => 2
      RESULT_PERMISSIONS_NOT_GRANTED => 3
      RESULT_UNKNOWN_ERROR => 4
      RESULT_INVALID_PARAMETERS => 5
      RESULT_SABTE_AHVAAL_UNAVAILABLE => 6
      RESULT_ALREADY_APPROVED => 7
      RESULT_MAX_TRY_EXCEEDED => 8
      RESULT_SIGNATURE => 9
      RESULT_LIVENESS => 10
      RESULT_FACE_MATCHING => 11
      */

      /*
      WAIT => AuthenticationWarning
      SUCCESS
      FAILED => AuthenticationFailed
      OTHER => AuthenticationWaiting
      */
      if (this.store.getters.authenticationStatus == 'WAIT') {
        this.activeCard = 'AuthenticationWarning'
        this.needAuthintication = true
      } else if (this.store.getters.authenticationStatus == 'FAILED') {
        this.activeCard = 'AuthenticationFailed'
        this.needAuthintication = true
      } else if (this.store.getters.authenticationStatus == 'SUCCESS') {
        this.activeCard = 'ProfilePersonal'
        this.needAuthintication = false
      } else {
        this.activeCard = 'AuthenticationWaiting'
        this.needAuthintication = true
      }
    },
    logoutClicked() {
      this.logoutStore()
      this.reloadPage()
    },
    storeData(username: string, firstName: string, lastName: string, country: string, province: string, city: string) {
      this.store.commit('setUsername', username)
      this.store.commit('setPhone', "")
      this.store.commit('setFirstName', firstName)
      this.store.commit('setLastName', lastName)
      this.store.commit('setCountry', country)
      this.store.commit('setState', province)
      this.store.commit('setCity', city)
    },
    reloadPage() {
      window.location.reload()
    },
    logoutStore() {
      this.store.commit('setUserID', "")
      this.store.commit('setToken', "")
      this.store.commit('setRefereshToken', "")
      this.store.commit('setIsAuthenticated', false)
      this.store.commit('setAuthenticationStatus', 'WAIT')
    },
    async getProfile() {
      this.isLoading = true
      try {
        const url: string = 'https://bb.abansoft.ir/api/v1/user/' + this.store.getters.userID
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.store.getters.token}`;
        const {data} = await axios.get(url)
        if (data.hasError === false) {
          this.username = data.content.username
          this.firstName = data.content.firstName
          this.midName = data.content.midName
          this.lastName = data.content.lastName
          this.gender = data.content.gender
          this.birthday = data.content.birthday
          this.phone = data.content.phone
          this.email = data.content.email
          this.address = data.content.address
          this.country = data.content.country
          this.city = data.content.city
          this.state = data.content.state
          this.zipCode = data.content.zipCode
          this.isLoading = false
        }
      } catch (error) {
        this.logoutStore()
        console.log(error)
        this.isLoading = false
      }
    },
    async setProfile() {
      this.isLoading = true
      try {
        const url: string = 'https://bb.abansoft.ir/api/v1/user/'
        const body = {
          id: this.store.getters.userID,
          username: this.username,
          password: 'string',
          firstName: this.store.getters.firstName,
          lastName: this.store.getters.lastName,
          avatar: null,
          phoneNumber: '',
          email: this.email,
          countryID: this.country,
          provinceID: this.state,
          cityID: this.city,
          address: this.address,
          zipCode: this.zipCode,
          role: "",
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.store.getters.token}`;
        const {data} = await axios.put(url, body)
        if (data.hasError === false) {

        }
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    },
    // Putting value of Phone text input to variable
    handlePhoneInputValueUpdated(value: string) {
      this.phone = value
    },
    // Putting value of Email text input to variable
    handleEmailInputValueUpdated(value: string) {
      this.email = value
    },
    // Putting value of Address text input to variable
    handleAddressInputValueUpdated(value: string) {
      this.address = value
    },
    // Putting value of Country text input to variable
    handleCountryInputValueUpdated(value: string) {
      this.country = value
    },
    // Putting value of City text input to variable
    handleCityInputValueUpdated(value: string) {
      this.city = value
    },
    // Putting value of State text input to variable
    handleStateInputValueUpdated(value: string) {
      this.state = value
    },
    // Putting value of District text input to variable
    handleDistrictInputValueUpdated(value: string) {
      this.district = value
    },
    // Putting value of ZipCode text input to variable
    handleZipcodeInputValueUpdated(value: string) {
      this.zipCode = value
    },
    openSidebar(event: Event) {
      event.stopPropagation()
      this.showSidebar = false
    },
    closeSidebar(event: Event) {
      event.stopPropagation()
      this.showSidebar = true
    }
  }
}
</script>

<template>
  <!--begin::Body Section-->
  <div class="flex flex-col lg:flex-row h-screen bg-gray-50 dark:bg-gray-800">
    <div
        class="w-screen lg:w-[174px] flex justify-center lg:flex-col m-1 lg:m-5 text-gray-900 dark:text-gray-50 gap-2 absolute z-10">
      <MenuItem menu-title="Personal" :isLock="needAuthintication == true"
                :isActive="activeCard == 'ProfilePersonal'" @buttonClicked="activeCard= 'ProfilePersonal'">
        <template v-slot:menu-icon>
          <PersonSvg class="fill-inherit mb-1"></PersonSvg>
        </template>
      </MenuItem>

      <MenuItem menu-title="Contact" :isLock="needAuthintication == true"
                :isActive="activeCard == 'ProfileCantact'" @buttonClicked="activeCard= 'ProfileCantact'">
        <template v-slot:menu-icon>
          <LocationSvg class="fill-inherit mb-1"></LocationSvg>
        </template>
      </MenuItem>

      <MenuItem menu-title="Security" :isLock="needAuthintication == true"
                :isActive="activeCard == 'ProfileSecurity'" @buttonClicked="activeCard= 'ProfileSecurity'">
        <template v-slot:menu-icon>
          <LockSvg class="fill-inherit mb-1"></LockSvg>
        </template>
      </MenuItem>
    </div>
    <div class="w-full pt-5 relative">
      <AuthenticationWarning v-if="activeCard == 'AuthenticationWarning'"></AuthenticationWarning>
      <AuthenticationWaiting v-if="activeCard == 'AuthenticationWaiting'"></AuthenticationWaiting>
      <AuthenticationFailed v-if="activeCard == 'AuthenticationFailed'"></AuthenticationFailed>
      <div class="lg:relative lg:left-48 absolute left-0 top-16 lg:top-0 px-3 w-screen">
        <ProfilePersonalCard
            v-if="activeCard == 'ProfilePersonal'"
            title="Personal Info"
            :name="firstName"
            :midName="midName"
            :lastName="lastName"
            :gender="gender"
            birthday=""
            :isVerified="true">
        </ProfilePersonalCard>
        <ProfileContactCard
            v-if="activeCard == 'ProfileCantact'"
            title="Contact Info"
            :phone="phone"
            :email="email"
            :address="address"
            :country="country"
            :city="city"
            :state="state"
            district=""
            :zip-code="zipCode"
            :isWaiting="isLoading"
            @profile-updated="setProfile()"
            @input-phone-updated="handlePhoneInputValueUpdated"
            @input-email-updated="handleEmailInputValueUpdated"
            @input-address-updated="handleAddressInputValueUpdated"
            @input-country-updated="handleCountryInputValueUpdated"
            @input-city-updated="handleCityInputValueUpdated"
            @input-state-updated="handleStateInputValueUpdated"
            @input-district-updated="handleDistrictInputValueUpdated"
            @input-zipCode-updated="handleZipcodeInputValueUpdated"
        >
        </ProfileContactCard>
        <ProfileSecurityCard
            v-if="activeCard == 'ProfileSecurity'"
            title="Security Info"
            :username="username"
        >
        </ProfileSecurityCard>
      </div>
    </div>
  </div>
  <!--end::Body Section-->
</template>
