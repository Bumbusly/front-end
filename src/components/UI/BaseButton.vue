<script lang="ts">
export default {
  props: {
    isOutline: {
      type: String,
      default: 'false'
    },
    link: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: 'Button'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    bgColor: {
      type: String,
      default: 'blue'
    }
  },
  emits: ['buttonClicked'],
  methods: {
    onClick() {
      this.$emit('buttonClicked')
    },
    buttonClass() {
      if (this.isOutline == 'false')
        return `text-${this.textColor}-50 bg-${this.bgColor}-500 border-${this.bgColor}-300 hover:text-${this.bgColor}-100 hover:bg-${this.bgColor}-400 hover:border-${this.bgColor}-500`
      else
        return `text-${this.textColor}-600 border-${this.bgColor}-700 hover:text-${this.bgColor}-900 hover:bg-${this.bgColor}-100 hover:border-${this.bgColor}-400`
    }
  }
}
</script>

<template>
  <RouterLink v-if="link != null" :to="link">
    <button :class="buttonClass()" class="w-full py-[10px] text-sm rounded-lg border border-1">
      {{ text }}
    </button>
  </RouterLink>

  <button
    v-if="link == null"
    :class="buttonClass()"
    class="w-full py-[10px] text-sm rounded-lg border border-1"
    v-on:click.prevent="onClick()"
  >
    {{ text }}
  </button>
</template>
