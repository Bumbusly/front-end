<script lang="ts">
export default {
  data() {
    return {}
  },
  props: {
    itemTitle: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div v-if="isActive == false" class="w-[240px] h-[40px] flex justify-left align-center items-center gap-2 px-2 py-1 hover:ring-1 rounded-lg hover:bg-yellow-300 hover:bg-opacity-10 ring-yellow-600 hover:ring-opacity-40 fill-yellow-600">
    <slot name="item-icon"></slot>
    <h2 class="text-[14px]">{{itemTitle}}</h2>
  </div>

  <div v-if="isActive" class="w-[240px] h-[40px] flex justify-left align-center items-center gap-2 bg-yellow-500 rounded-lg border-solid border-2 border-yellow-600 px-2 border-opacity-25 fill-gray-50">
    <slot name="item-icon"></slot>
    <h2 class="text-[14px] text-gray-50">{{itemTitle}}</h2>
  </div>
</template>


<style scoped>
div {
  cursor: pointer;
}
</style>