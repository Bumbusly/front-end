<script lang="ts">

import {defineComponent} from "vue";
import TickSvg from "@/components/svg/Icons/tick.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import CrossSvg from "@/components/svg/Icons/cross.vue";

export default {
  components: {CrossSvg, BaseButton, TickSvg},
  data(){
    return{
      state: '',
      statePlaceholder: '',
    }
  },
  methods:{
    // Putting value of Email text input to variable
    handleStateInputValueUpdated(value: string) {
      this.state = value
    },
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
  <div class="flex justify-center align-center items-center gap-3 w-full">
    <!-- begin::State Text Input -->
    <TextInput class="w-full"
               id="state"
               type="state"
               :placeholder="statePlaceholder"
               required="true"
               autocomplete="state"
               @input-value-updated="handleStateInputValueUpdated">
    </TextInput>
    <!-- end::State Text Input -->

    <div class="flex justify-center items-center align-center gap-2">
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
      <BaseButton
          width="min"
          text="Save Change"
          bgColor="green"
          textColor="green"
          @buttonClicked="submitClick()">
        <template v-slot:buttonIcon>
          <TickSvg class=""></TickSvg>
        </template>
      </BaseButton>
    </div>
  </div>
</template>