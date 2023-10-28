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
import ProfileView from "@/layouts/Profile/ProfileView.vue"
import WalletView from "@/layouts/wallet/WalletView.vue"

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
      showSidebar: false,
      selectTab: 'Wallet'
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
    ProfileView,
    WalletView
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
    reloadPage() {
      window.location.reload()
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
  <div class="flex">
    <!--begin::Sidebar-->
    <Sidebar class="lg:flex lg:w-auto lg:relative absolute z-50" :class="{ hidden: showSidebar }"></Sidebar>
    <!--begin::Right Section-->
    <div class="w-full" :class="showSidebar == true ? 'brightness-100' : 'brightness-50'" @click="closeSidebar">
      <!--begin::Header (Top Section)-->
      <div
          class="flex shadow-none lg:shadow-md lg:h-[80px] px-6 py-5 bg-gray-50 lg:bg-[#FFFFFF] dark:bg-gray-800">
        <div
            class="flex right-0 align-center items-center w-full my-2 mx-0 lg:w-auto justify-between lg:justify-center gap-4 text-gray-900 dark:text-gray-50">
          <h2 class="text-[14px] hidden lg:flex">Devon Wills</h2>
          <div class="pr-5 z-10" @click="openSidebar">
            <SidebarSvg class="fill-gray-600 lg:hidden"></SidebarSvg>
          </div>
          <h2 class="text-[16px] font-[600] lg:hidden">{{selectTab}}</h2>
          <PersonSvg class="w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] fill-gray-500 rounded-full"
                     v-if="store.state.avatar == ''"></PersonSvg>
          <!--<img class="w-[46px] h-[46px] rounded-full" src="@/assets/media/images/profile.png">-->
        </div>
      </div>
      <!--end::Header (Top Section)-->
      <!--begin::Body Section-->
      <ProfileView v-if="selectTab == 'Profile'"></ProfileView>
      <WalletView v-if="selectTab == 'Wallet'"></WalletView>
      <!--end::Body Section-->
    </div>
    <!--end::Right Section-->
  </div>
</template>
