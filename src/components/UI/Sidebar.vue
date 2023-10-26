<script lang="ts">

import {defineComponent} from "vue";
import SavingSvg from "@/components/svg/Icons/saving.vue";
import PaymentsSvg from "@/components/svg/Icons/payments.vue";
import SyncSvg from "@/components/svg/Icons/sync.vue";
import MoveDownSvg from "@/components/svg/Icons/move_down.vue";
import PersonSvg from "@/components/svg/Icons/person.vue";
import MenuItem from "@/components/UI/MenuItem.vue";
import HomeSvg from "@/components/svg/Icons/home.vue";
import SidebarItem from "@/components/UI/SidebarItem.vue";
import BumbuslyLogo from "@/components/UI/BumbuslyLogo.vue"

import {useStore} from "vuex";
import store from "@/store";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  components: {HomeSvg, MenuItem, PersonSvg, MoveDownSvg, SyncSvg, PaymentsSvg, SavingSvg,SidebarItem, BumbuslyLogo}
}
</script>

<template>
  <!--begin::Sidebar-->
  <div class="flex flex-col w-1/6 h-screen shadow-md p-6 gap-6 lg:border-2 border-opacity-50 z-50 border-gray-200 bg-[#ffffff] dark:bg-gray-900 dark:border-gray-900 text-gray-900 dark:text-gray-50">
    <!--begin::Logo-->
    <div class="flex align-center items-center">
      <BumbuslyLogo></BumbuslyLogo>
      <h2 class="text-[16px] font-black">bumbusly</h2>
    </div>
    <!--end::Logo-->
    <!--begin::Sidebar Options-->
    <div>
      <div class="flex flex-col items-start gap-2">
        <SidebarItem item-title="Dashboard" :isActive="false">
          <template v-slot:item-icon>
            <HomeSvg class="fill-inherit mb-1"></HomeSvg>
          </template>
        </SidebarItem>
        <SidebarItem item-title="Profile" :isActive="true">
          <template v-slot:item-icon>
            <PersonSvg class="fill-inherit mb-1"></PersonSvg>
          </template>
        </SidebarItem>
        <SidebarItem item-title="New Transfer" :isActive="false">
          <template v-slot:item-icon>
            <MoveDownSvg class="fill-inherit mb-1"></MoveDownSvg>
          </template>
        </SidebarItem>
        <SidebarItem item-title="Transfers" :isActive="false">
          <template v-slot:item-icon>
            <SyncSvg class="fill-inherit mb-1"></SyncSvg>
          </template>
        </SidebarItem>
        <SidebarItem item-title="Current Payment Requests" :isActive="false">
          <template v-slot:item-icon>
            <PaymentsSvg class="fill-inherit mb-1"></PaymentsSvg>
          </template>
        </SidebarItem>
        <SidebarItem item-title="Payment Request" :isActive="false">
          <template v-slot:item-icon>
            <SavingSvg class="fill-inherit mb-1"></SavingSvg>
          </template>
        </SidebarItem>
      </div>
    </div>
    <!--end::Sidebar Options-->
  </div>
  <!--end::Sidebar-->
</template>