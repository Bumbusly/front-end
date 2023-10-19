<script lang="ts">

import LockSvg from "@/components/svg/Icons/lock.vue"

export default {
  emits: ['buttonClicked'],
  components: {
    LockSvg
  },
  data() {
    return {}
  },
  props: {
    menuTitle: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isLock: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('buttonClicked')
    },
  }
}

</script>

<template>
  <div v-if="isActive == false && isLock== false" v-on:click.prevent="onClick()"
       class="w-full flex justify-left align-center items-center gap-2 px-2 py-1 hover:ring-1 rounded-lg hover:bg-yellow-300 hover:bg-opacity-10 ring-yellow-600 hover:ring-opacity-40 fill-yellow-600">
    <slot name="menu-icon"></slot>
    <h2 class="text-[14px] text-gray-900">{{ menuTitle }}</h2>
  </div>

  <div v-if="isActive == false && isLock == true"
       class="w-full flex justify-between align-center items-center gap-2 px-2 py-1 rounded-lg fill-yellow-600">
    <div class="flex align-center items-center gap-2">
      <slot name="menu-icon"></slot>
      <h2 class="text-[14px] text-gray-900">{{ menuTitle }}</h2>
    </div>
    <LockSvg class="w-[20px] h-[20px] fill-gray-500 mb-1"></LockSvg>
  </div>

  <div v-if="isActive == true && isLock == false"
       class="w-full flex justify-left align-center items-center gap-2 px-2 py-1 bg-yellow-400 bg-opacity-20 rounded-lg fill-yellow-600 ring-1 ring-yellow-600">
    <slot name="menu-icon"></slot>
    <h2 class="text-[14px] text-gray-900 text-yellow-600">{{ menuTitle }}</h2>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
}
</style>