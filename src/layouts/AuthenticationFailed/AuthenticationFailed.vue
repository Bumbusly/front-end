<script lang="ts">
import FailedSvg from '@/components/svg/Icons/failed.vue'
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  data() {
    return {
      failedText: 'The authentication operation encountered a problem and failed. Try again.'
    }
  },
  components: {
    BaseButton,
    FailedSvg,
  }
}
</script>

<template>
  <div class="w-full h-full flex left-0 justify-center align-center items-center pb-28 absolute lg:relative">
    <div class="flex flex-col gap-6 justify-center align-center items-center m-10">
      <FailedSvg class="fill-red-500"></FailedSvg>
      <h3 class="text-gray-500 text-[14px] text-center">{{ failedText }}</h3>
      <div class="w-[139px]">
        <BaseButton
            text="Authentication"
            bgColor="yellow"
            textColor="yellow"
        >
        </BaseButton>
      </div>
    </div>
  </div>
</template>