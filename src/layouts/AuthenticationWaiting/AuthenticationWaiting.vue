<script lang="ts">
import HourglassSvg from '@/components/svg/Icons/hourglass.vue'

export default {
  data() {
    return {
      waitingText: 'The authentication result will be announced in about 15 minutes.',
      waitingTextRefresh: 'Please refresh after that.'
    }
  },
  components: {
    HourglassSvg,
  }
}
</script>

<template>
  <div class="w-full h-full flex left-0 justify-center align-center items-center pb-28 absolute lg:relative">
    <div class="flex flex-col gap-6 justify-center align-center items-center m-10">
      <HourglassSvg class="fill-gray-500"></HourglassSvg>
      <div class="flex flex-col justify-center align-center items-center text-center">
        <h3 class="text-gray-500 text-[14px]">{{ waitingText }}</h3>
        <h3 class="text-gray-500 text-[14px]">{{ waitingTextRefresh }}</h3>
      </div>
    </div>
  </div>
</template>