<script lang="ts">
import ErrorSvg from '@/components/svg/Icons/error.vue'
import BaseButton from "@/components/UI/BaseButton.vue";

// Import Vuex Store
import {useStore} from 'vuex'

export default {
  data() {
    return {
      errorText: 'Prior to accessing the profile settings, it is necessary to authenticate.'
    }
  },
  setup() {
    const store = useStore()
    return {store}
  },
  components: {
    BaseButton,
    ErrorSvg,
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
    <div class="flex flex-col gap-6 justify-center align-center items-center m-4">
      <ErrorSvg class="fill-gray-500"></ErrorSvg>
      <h3 class="text-gray-500 text-[14px] text-center">{{ errorText }}</h3>
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