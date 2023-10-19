<script lang="ts">
import ChangeableDataItem from '@/components/UI/ChangeableDataItem.vue'
import MobileBox from "@/components/UI/MobileBox.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {
    BaseButton,
    ChangeableDataItem,
    MobileBox
  },
  data(){
    return{
      editPhone: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    district: {
      type: String,
      default: ''
    },
    zipCode: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="relative bg-white shadow-md stroke-1 w-[564px] m-5 rounded-lg p-6 flex flex-col gap-6">
    <h2 class="text-[18px] font-bold">{{ title }}</h2>
    <div class="w-full flex flex-col gap-4">
      <ChangeableDataItem :isChange="editPhone" label="Phone" text="09174281364" @buttonClicked="editPhone = !editPhone">
        <template v-slot:container>
          <div class="flex gap-2">
            <MobileBox></MobileBox>
            <BaseButton text="Cancel"
                        width="auto"
                        bgColor="gray"
                        textColor="gray"
                        :font-size=12
                        isOutline="true"
                        @buttonClicked="editPhone = !editPhone"
            ></BaseButton>
            <BaseButton text="Send Code"
                        width="auto"
                        bgColor="green"
                        textColor="green"
                        isOutline="false"
                        :font-size=12
            ></BaseButton>
          </div>
        </template>
      </ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="Email" text="name@example.com"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="Address" text="Tehran"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="Country" text="Iran"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="City" text="Tehran"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="State" text="Tehran"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="District" text="SaadatAbad"></ChangeableDataItem>
      <ChangeableDataItem :isChange="false" label="ZipCode" text="5484684579"></ChangeableDataItem>

    </div>
  </div>
</template>

<style>
BaseButton {
  font-size: 12px !important;
}
</style>