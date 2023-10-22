<script lang="ts">
import EditSvg from '@/components//svg/Icons/edit.vue'

export default {
  components: {
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
    isChange:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('buttonClicked')
    },
    isChangeTheme(){
      if(this.isChange){
        return ' bg-gray-100 p-4 rounded-lg'
      }else{
        return ''
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2" :class="isChangeTheme()">
    <h2 class="text-gray-500">{{ label }}</h2>
    <div class="flex justify-between">
      <h3 v-if="!isChange">{{ text }}</h3>
      <slot name="container" v-if="isChange"></slot>
      <EditSvg v-on:click.prevent="onClick()" v-if="!isChange" class="cursor-pointer w-[25px] h-[25px] p-1 fill-blue-600 hover:bg-blue-200 rounded-full"/>
    </div>
  </div>
</template>
