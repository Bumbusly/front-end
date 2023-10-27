<script lang="ts">
import EditSvg from '@/components//svg/Icons/edit.vue'
import BeeLoader from "@/components/UI/BeeLoader.vue";

export default {
  components: {
    BeeLoader,
    EditSvg
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    isChange: {
      type: Boolean,
      default: false
    },
    isWaiting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('buttonClicked')
    },
    isChangeTheme() {
      if (this.isChange) {
        return ' bg-gray-100 p-4 rounded-lg'
      } else {
        return ''
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 p-1 rounded-lg" :class="isChangeTheme()">
      <div class="flex justify-between">
        <h2 class="text-gray-500">{{ label }}</h2>
        <EditSvg v-on:click.prevent="onClick()" v-if="(!isChange && !isWaiting)"
                 class="cursor-pointer w-[25px] h-[25px] p-1 fill-blue-600 hover:bg-blue-200 rounded-full"/>
        <!-- begin::Loading Compoennt -->
        <BeeLoader v-if="isWaiting"></BeeLoader>
        <!-- end::Loading Compoennt -->
      </div>
      <div class="flex justify-between">
        <h3 v-if="!isChange">{{ text }}</h3>
        <slot name="container" v-if="isChange"></slot>
      </div>
  </div>
</template>
