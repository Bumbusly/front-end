<!-- Create User Success Toast Component -->

<script lang="ts">
import TickCircleGreen from "@/components/svg/Icons/tick_circle_green.vue"

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
    TickCircleGreen
  }
};
</script>


<template>
  <div class="container">
    <div class="flex flex-col gap-0">
      <div class="flex align-center items-center gap-2">
        <TickCircleGreen class="fill-green-500"></TickCircleGreen>
        <h2 class="font-semibold text-[14px]">Signup Successfully</h2>
      </div>
      <div>
        <h2>Once your account is successfully created, you can log in to your account through the login section</h2>
      </div>
    </div>
  </div>
</template>


<style>
.Vue-Toastification__toast--success {
  padding: 16px 16px;
  background: white;
  border-radius: 16px;
  border: 1px solid #4ADE80;
  color: #16A34A;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.Vue-Toastification__toast--success  > .Vue-Toastification__progress-bar{
  background: #16A34A;
  height: 2px;
}

.Vue-Toastification__toast--success  > .Vue-Toastification__close-button {
  color: #16A34A;
}
</style>