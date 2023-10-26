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
    this.getProfile()
  },
  computed: {},
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      isloading: false,
      activeCard: 'AuthenticationWarning',
      needAuthintication: false,
      isLoading: false,
      username: '',
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
      zipCode: '',
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
      // console.log(this.store.state)
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
    clickMenuItem(this) {
      // console.log(this)
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
          console.log(data)
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
        console.log(error)
        this.isLoading = false
      }
    },
    async setProfile(firstName: string, midName: string, lastName: string, phone: string, email: string, address: string, country: string, city: string, state: string, zipCode: string) {
      this.isLoading = true
      try {
        const url: string = 'https://bb.abansoft.ir/api/v1/user/'
        const body = {
          username: this.username,
          phoneNumber: phone,
          firstName: firstName,
          midName: midName,
          lastName: lastName,
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.store.getters.token}`;
        const {data} = await axios.post(url, body)
        if (data.hasError === false) {

        }
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    },
  }
}
</script>

<template>
  <div class="flex">
    <!--begin::Sidebar-->
    <Sidebar class="hidden lg:flex"></Sidebar>
    <!--begin::Right Section-->
    <div class="w-full lg:w-5/6">
      <!--begin::Header (Top Section)-->
      <div
          class="flex justify-between shadow-none lg:shadow-md lg:h-[80px] px-6 py-5 lg:px-6 lg:py-4 w-100 bg-gray-50 lg:bg-[#FFFFFF] dark:bg-gray-900 sticky">
        <BaseButton
            classes="hidden lg:block"
            ref="logoutButton"
            text="Logout"
            bgColor="red"
            width="auto"
            textColor="red"
            @buttonClicked="logoutClicked()"
        >
        </BaseButton>
        <div
            class="flex right-0 align-center items-center w-full my-2 mx-0 lg:w-auto justify-between lg:justify-center gap-4 text-gray-900 dark:text-gray-50">
          <h2 class="text-[14px] hidden lg:flex">Devon Wills</h2>
          <SidebarSvg class="fill-gray-600 lg:hidden"></SidebarSvg>
          <h2 class="text-[16px] font-[600] lg:hidden">Profile</h2>
          <PersonSvg class="w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] fill-gray-500 rounded-full"
                     v-if="store.state.avatar == ''"></PersonSvg>
          <!--<img class="w-[46px] h-[46px] rounded-full" src="@/assets/media/images/profile.png">-->
        </div>
      </div>
      <!--end::Header (Top Section)-->
      <!--begin::Body Section-->
      <div class="flex flex-col lg:flex-row h-screen bg-gray-50 dark:bg-gray-800">
        <div
            class="w-screen lg:w-[174px] flex justify-center lg:flex-col m-1 lg:m-5 text-gray-900 dark:text-gray-50 gap-2 absolute z-50">
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
                address=""
                :country="country"
                :city="city"
                :state="state"
                district=""
                zip-code=""
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
    </div>
    <!--end::Right Section-->
  </div>
</template>
