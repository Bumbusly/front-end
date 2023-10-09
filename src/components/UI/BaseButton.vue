<script lang="ts">
import BeeLoader from "@/components/UI/BeeLoader.vue";

export default {
  components: {BeeLoader},
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
    },
    isDisable: {
      type: Boolean,
      default: false
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
    class="w-full text-sm rounded-lg border border-1 flex justify-center items-center align-center"
    :disabled="isDisable"
    v-on:click.prevent="onClick()"
  >
    <!-- begin::Loading Compoennt -->
    <BeeLoader v-if="isDisable"></BeeLoader>
    <!-- end::Loading Compoennt -->
    <h3 v-if="!isDisable">{{ text }}</h3>
  </button>
</template>

<style>
svg{
  display: flex;
  height: 40px;
}

button > h3 {
  padding: 10px 0 10px 0;
}
</style>