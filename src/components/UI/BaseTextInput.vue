<script lang="ts">
import OpenEye from '../svg/Eye/Visible.vue'
import CloseEye from '../svg/Eye/Invisible.vue'

export default {
  data() {
    return {
      isShow: false,
      inputValue: ""
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: String,
      required: false,
      default: 'false'
    },
    autoComplete: {
      type: String,
      required: false,
      default: 'false'
    },
    color: {
      type: String as () => "default" | "red" | "green",
      required: false,
      default: 'default'
    },
    hidden: {
      type: String,
      required: false,
      default: 'false'
    },

  },
  methods: {
    changeType() {
      this.isShow = !this.isShow;
    },
    updateInputValue() {
      this.$emit('input-value-updated', this.inputValue);
    },
    setColor() {
      if (this.color === 'default') {
        return this.setDefaultColor();
      } else if (this.color === 'red') {
        return this.setRedColor()
      } else {
        return this.setGreenColor()
      }
    },
    setDefaultColor() {
      /*return `text-gray-800 ring-gray-500 placeholder:text-gray-500`;*/
      return `text-gray-800 dark:text-gray-100 ring-gray-500 placeholder:text-gray-500`;
    },
    setRedColor() {
      return `ring-red-500`;
      /*return `text-red-800 ring-red-500 placeholder:text-red-500`;*/
    },
    setGreenColor() {
      /*return `text-green-800 ring-green-500 placeholder:text-green-500`;*/
      return `ring-gray-500`;
    },
  },
  components: {
    OpenEye,
    CloseEye
  },
  mounted() {
    const inputElement = this.$refs[this.id] as HTMLInputElement;
    inputElement.classList.add('text-' + this.color + '-900');
  }
}
</script>

<template>
  <div :id="id + '-container'" class="flex flex-col gap-2">
    <label v-if="label != ''" class="block text-sm leading-6">{{ label }}</label>
    <div class="relative flex flex-row justify-between align-center items-center w-full">
      <input v-model="inputValue" @input="updateInputValue" :ref="id" :type="isShow == true ? 'text' : type"
             autocomplete=false :placeholder="placeholder" required=false :obscureText="isShow"
             :class="setColor()"
             class="block w-full rounded-lg py-2 px-2 shadow-sm ring-[1.5px] focus:ring-1 sm:text-sm sm:leading-6">
      <div v-if="hidden == 'true'" class="flex align-center items-center justify-center">
        <CloseEye class="h-4 w-4" v-if="isShow === true" @click="changeType()"></CloseEye>
        <OpenEye class="h-4 w-4" v-if="isShow === false" @click="changeType()"></OpenEye>
      </div>
    </div>
    <slot name="helpText" class="hidden"></slot>
  </div>
</template>