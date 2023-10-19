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
  <div class="w-full h-full flex justify-center align-center items-center pb-24">
    <div class="flex flex-col gap-6 justify-center align-center items-center">
      <FailedSvg class="fill-red-500"></FailedSvg>
      <h3 class="text-gray-500 text-[14px]">{{ failedText }}</h3>
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