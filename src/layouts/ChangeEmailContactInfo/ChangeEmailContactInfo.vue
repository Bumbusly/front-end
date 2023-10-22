<script lang="ts">

import TickSvg from "@/components/svg/Icons/tick.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import CrossSvg from "@/components/svg/Icons/cross.vue";

export default {
  components: {CrossSvg, BaseButton, TickSvg},
  data(){
    return{
      email:'',
      emailPlaceholder: 'name@example.com',
      emailValid: 'default',
      invalidEmail: 'Email is not valid !',
    }
  },
  methods:{
    // Putting value of Email text input to variable
    handleEmailInputValueUpdated(value: string) {
      this.email = value
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
    <!-- begin::Email Text Input -->
    <TextInput class="w-full"
               id="email"
               type="email"
               :placeholder="emailPlaceholder"
               required="true"
               autocomplete="email"
               :color="emailValid"
               @input-value-updated="handleEmailInputValueUpdated">
      <template v-slot:helpText>
        <small
            :class="emailValid == 'red' ? '' : 'hidden'"
            class="form-text text-muted text-red-500"
        >
          {{ invalidEmail }}
        </small>
      </template>
    </TextInput>
    <!-- end::Email Text Input -->

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