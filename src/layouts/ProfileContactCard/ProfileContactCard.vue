<script lang="ts">


export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    midName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: 'unknown'
    },
    birthday: {
      type: String,
      default: ''
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="relative bg-white shadow-md stroke-1 w-[564px] m-5 rounded-lg p-6 flex flex-col gap-6">
    <h2 class="text-[18px] font-bold">{{title}}</h2>
    <ContactInfoItem label="Name" :text="name"></ContactInfoItem>
    <ContactInfoItem label="Middle Name" :text="midName"></ContactInfoItem>
    <ContactInfoItem label="Last Name" :text="lastName"></ContactInfoItem>
    <ContactInfoItem label="Gender" :text="gender"></ContactInfoItem>
    <ContactInfoItem label="Birthday" :text="birthday"></ContactInfoItem>
  </div>
</template>