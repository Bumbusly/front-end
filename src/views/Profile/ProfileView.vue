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

import {useStore} from 'vuex'

export default {
  computed: {},
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      isloading: false,
      activeCard: 'ProfileCantact',
      needAuthintication: false
    }
  },
  components: {
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
    AuthenticationFailed
  },
  methods: {
    logoutClicked() {
      console.log(this.store.state)
      this.storeData("", "", "", false)
      this.reloadPage()
    },
    storeData(username: string, token: string, refereshToken: string, isAuth: boolean) {
      this.store.commit('setUsername', username)
      this.store.commit('setToken', token)
      this.store.commit('setRefereshToken', refereshToken)
      this.store.commit('setIsAuthenticated', isAuth)
    },
    reloadPage() {
      window.location.reload()
    },
    clickMenuItem(this) {
      console.log(this)
    }
  }
}
</script>

<template>
  <div class="flex bg-gray-50">
    <!--begin::Sidebar-->
    <Sidebar></Sidebar>
    <!--begin::Right Section-->
    <div class="w-5/6">
      <!--begin::Header (Top Section)-->
      <div class="flex justify-between shadow-md px-6 py-4 w-100">
        <div>
        </div>
        <div class="flex right-0 align-center items-center justify-center gap-4">
          <h2>Devon Wills</h2>
          <img class="w-[46px] h-[46px] rounded-full" src="@/assets/media/images/profile.png">
        </div>
      </div>
      <!--end::Header (Top Section)-->
      <!--begin::Body Section-->
      <div class="flex h-screen">
        <div class="w-[174px] flex flex-col gap-1 m-5">
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
        <div class="w-full">
          <AuthenticationWarning v-if="activeCard == 'AuthenticationWarning'"></AuthenticationWarning>
          <AuthenticationWaiting v-if="activeCard == 'AuthenticationWaiting'"></AuthenticationWaiting>
          <AuthenticationFailed v-if="activeCard == 'AuthenticationFailed'"></AuthenticationFailed>
          <ProfilePersonalCard
              v-if="activeCard == 'ProfilePersonal'"
              title="Personal Info"
              name="Devon"
              midName="Reid"
              lastName="Wills"
              gender="male"
              birthday="1999/06/30"
              :isVerified="true">
          </ProfilePersonalCard>
          <ProfileContactCard
              v-if="activeCard == 'ProfileCantact'"
              title="Contact Info">
          </ProfileContactCard>
        </div>
      </div>
      <!--end::Body Section-->
    </div>
    <!--end::Right Section-->
  </div>
</template>
