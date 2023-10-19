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
    isWaiting: {
      type: Boolean,
      default: false
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'full'
    },
    fontSize: {
      type: Number,
      default: 14
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
        return `text-${this.textColor}-500 border-${this.bgColor}-500 hover:text-${this.bgColor}-900 hover:bg-${this.bgColor}-100 hover:border-${this.bgColor}-400`
    },
    setWidth() {
      return ' w-' + this.width + ' '
    },
    setFontSize() {
      return ' text-[' + this.fontSize + 'px] '
    }
  }
}
</script>

<template>
  <RouterLink v-if="link != null" :to="link">
    <button :class="buttonClass() + setWidth() + setFontSize()" class="py-[10px] rounded-lg border-1">
      {{ text }}
    </button>
  </RouterLink>

  <button
      v-if="link == null"
      :class="buttonClass() + setWidth() + setFontSize()"
      class="px-2 rounded-lg border-1 flex justify-center items-center align-center"
      :disabled="isWaiting || isDisable"
      v-on:click.prevent="onClick()"
  >
    <!-- begin::Loading Compoennt -->
    <BeeLoader v-if="isWaiting"></BeeLoader>
    <!-- end::Loading Compoennt -->
    <h3 v-if="!isWaiting">{{ text }}</h3>
  </button>
</template>

<style>

svg {
  display: flex;
  height: 40px;
}

button {
  white-space: nowrap;
}

button > h3 {
  padding: 10px 0 10px 0;
}

.border-green-700 {
  border-style: solid;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(21 128 61) !important;
}

.border-green-500 {
  border-style: solid;
  border-width: 1px;
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.border-gray-500 {
  border-style: solid;
  border-width: 1px;
  --tw-text-opacity: 1;
}
</style>