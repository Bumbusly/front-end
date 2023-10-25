<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 p-1">
    <h2 class="text-gray-500">{{ label }}</h2>
    <h3>{{text}}</h3>
  </div>
</template>