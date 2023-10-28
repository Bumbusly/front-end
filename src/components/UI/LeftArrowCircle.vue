<script lang="ts">
import ArrowSvg from '@/components/svg/Icons/arrow.vue'

export default {
  props: {
    isRight: {
      type: 'boolean',
      default: false
    }
  }
  data() {
    return {}
  },
  components: {
    ArrowSvg
  }
}

</script>

<template>
  <div v-if=""
      class="flex justify-center align-center items-center rounded-full border-2 border-yellow-200 bg-yellow-400 w-[28px] h-[28px] fill-gray-900">
    <ArrowSvg class="fill-inherit"></ArrowSvg>
  </div>
</template>