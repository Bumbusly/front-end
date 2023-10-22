<script lang="ts">

import MobileBox from "@/components/UI/MobileBox.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import CrossSvg from "@/components/svg/Icons/cross.vue"
import TickSvg from "@/components/svg/Icons/tick.vue"

export default {
  components: {BaseButton, MobileBox, CrossSvg, TickSvg},
  emits: ['submitClicked', 'cancelClicked'],
  methods: {
    submitClick() {
      this.$emit('submitClicked')
    },
    cancelClick() {
      this.$emit('cancelClicked')
    },
  }
}
</script>

<template>
  <div class="flex gap-2">
    <MobileBox></MobileBox>
    <BaseButton text="Cancel"
                width="auto"
                bgColor="gray"
                textColor="gray"
                :font-size=12
                isOutline="true"
                @buttonClicked="cancelClick()">
    <template v-slot:buttonIcon>
      <CrossSvg class="fill-gray-500"></CrossSvg>
    </template>
    </BaseButton>
    <BaseButton text="Send Code"
                width="auto"
                bgColor="green"
                textColor="green"
                isOutline="false"
                :font-size=12
                @buttonClicked="submitClick()">
      <template v-slot:buttonIcon>
        <TickSvg class=""></TickSvg>
      </template>
    </BaseButton>
  </div>
</template>