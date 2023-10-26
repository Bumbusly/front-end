<script lang="ts">
import DataItem from "@/components/UI/DataItem.vue";
import CameraSvg from "@/components/svg/Icons/camera.vue"
import VerifiedSvg from "@/components/svg/Icons/verified.vue"
import PersonSvg from "@/components/svg/Icons/person.vue";
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore()
    return {store}
  },
  components: {PersonSvg, VerifiedSvg, DataItem, CameraSvg},
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    midName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: 'unknown'
    },
    birthday: {
      type: String,
      default: ''
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="relative shadow-md stroke-1 lg:w-[564px] rounded-2xl p-6 flex flex-col gap-7 bg-[#FFFFFF] dark:bg-gray-900 text-gray-900 dark:text-gray-50">
    <div class="relative w-full flex justify-center">
      <div class="lg:absolute relative right-0 top-0 w-[120px] h-[120px] m-4 flex justify-center align-center items-center profile-image-container">
        <img class="w-auto h-auto absolute rounded-full shadow-md profile-image"
             src="@/assets/media/images/profile.png">
        <PersonSvg class="w-auto h-auto absolute shadow-md profile-image fill-gray-500 rounded-full" v-if="store.state.avatar != ''"></PersonSvg>
        <div v-if="isVerified" class="absolute h-[40px] w-[40px] rounded-full bg-yellow-500 right-0 bottom-0 flex justify-center align-cetner items-center">
          <VerifiedSvg class="fill-gray-50"></VerifiedSvg>
        </div>
        <CameraSvg class="fill-gray-900"></CameraSvg>
      </div>
    </div>
    <h2 class="text-[18px] font-bold">{{title}}</h2>
    <DataItem label="Name" :text="name"></DataItem>
    <DataItem label="Middle Name" :text="midName"></DataItem>
    <DataItem label="Last Name" :text="lastName"></DataItem>
    <DataItem label="Gender" :text="gender"></DataItem>
    <DataItem label="Birthday" :text="birthday"></DataItem>
  </div>
</template>

<style scoped>
.profile-image-container ~ .profile-image-container > CameraSvg {
  opacity: 100;
}
.profile-image:hover{
  opacity:0.3 !important;
  transition: 0.4s;
  cursor: pointer;
}
</style>