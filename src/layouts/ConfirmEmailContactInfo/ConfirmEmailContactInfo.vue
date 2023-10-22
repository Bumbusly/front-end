<script lang="ts">
import FourDigitValidation from '@/components/UI/FourDigitValidation.vue'
import {useStore} from "vuex";
import store from "@/store";
import BaseButton from "@/components/UI/BaseButton.vue";
import TickSvg from "@/components/svg/Icons/tick.vue";
import CrossSvg from "@/components/svg/Icons/cross.vue";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  unmounted() {
    clearInterval(this.timer)
  },
  created() {
    this.resetTimer()
    this.timer = setInterval(this.startTimer, 1000)
  },
  data() {
    return {
      resendText: 'Resend',
      timer: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  computed: {
    Minutes() {
      this.minutes = Math.floor(store.state.resetPasswordTimer / 60)
      return this.minutes
    },
    Seconds() {
      this.seconds = store.state.resetPasswordTimer % 60
      return this.seconds
    },
  },
  methods: {
    startTimer() {
      if (store.state.resetPasswordTimer > 0) {
        store.commit('setTimer', store.state.resetPasswordTimer - 1)
      }
    },
    resetTimer() {
      store.commit('setTimer', 120)
    },
    submitClick() {
      this.$emit('submitClicked')
    },
    cancelClick() {
      this.$emit('cancelClicked')
    },
  },
  components: {
    CrossSvg,
    TickSvg,
    BaseButton,
    FourDigitValidation
  }
}

</script>


<template>
  <div class="flex flex-col">
    <div class="flex gap-2">
      <FourDigitValidation></FourDigitValidation>
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
          text="Save Change"
          bgColor="green"
          textColor="green"
          @buttonClicked="submitClick()">
        <template v-slot:buttonIcon>
          <TickSvg class=""></TickSvg>
        </template>
      </BaseButton>
    </div>
    <div class="mt-4 flex text-left text-gray-900 gap-2 text-[14px]">
      <h2>{{ String(Minutes).padStart(2, '0') }} : {{ String(Seconds).padStart(2, '0') }}</h2>
      <h2>| </h2>
      <h2 class="text-clickable">Don’t have a code? <span class="text-green-500 font-bold text-[14px]"
                                                          @click="resetTimer()">{{ resendText }}</span></h2>
    </div>
  </div>
</template>