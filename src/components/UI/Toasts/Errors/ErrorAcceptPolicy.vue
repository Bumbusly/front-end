<!-- Accept Policy Error Toast Component -->

<script lang="ts">
import CrossCircleRed from "@/components/svg/Icons/cross_circle_red.vue"

export default {
  props: {
    toastId: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    clicked() {
      console.log("clicked")
    }
  },
  components: {
    CrossCircleRed
  }
};
</script>


<template>
  <div class="container m-2">
    <div class="flex flex-col gap-0">
    <div class="flex align-center items-center gap-2">
      <CrossCircleRed class="fill-red-500"></CrossCircleRed>
        <h2 class="font-semibold text-[14px]">Accept Terms & Conditions</h2>
    </div>
      <div>
        <h2>To register and work with the site, you must read and accept the rules and regulations of the site</h2>
      </div>
    </div>
  </div>
</template>


<style>
.Vue-Toastification__toast--error {
  padding: 16px 16px;
  background: white;
  border-radius: 16px;
  border: 1px solid #F87171;
  color: #B91C1C;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.Vue-Toastification__toast--error  > .Vue-Toastification__progress-bar{
  background: #B91C1C;
  height: 2px;
}

.Vue-Toastification__toast--error  > .Vue-Toastification__close-button {
  color: #B91C1C;
}
</style>