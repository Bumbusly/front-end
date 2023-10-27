<script lang="ts">
import FailedSvg from '@/components/svg/Icons/failed.vue'
import BaseButton from "@/components/UI/BaseButton.vue";
// Import Vuex Store
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      failedText: 'The authentication operation encountered a problem and failed. Try again.'
    }
  },
  components: {
    BaseButton,
    FailedSvg,
  },
  methods: {
    authorizeUser() {
      window.location = this.store.state.authUrl
    }
  }
}
</script>

<template>
  <div class="w-full h-full flex left-0 justify-center align-center items-center pb-28 fixed lg:relative">
    <div class="flex flex-col gap-6 justify-center align-center items-center m-10">
      <FailedSvg class="fill-red-500"></FailedSvg>
      <h3 class="text-gray-500 text-[14px] text-center">{{ failedText }}</h3>
      <div class="w-[139px]">
        <BaseButton
            text="Authentication"
            bgColor="yellow"
            textColor="yellow"
            @buttonClicked="authorizeUser()">
        </BaseButton>
      </div>
    </div>
  </div>
</template>