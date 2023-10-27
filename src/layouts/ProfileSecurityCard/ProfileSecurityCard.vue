<script lang="ts">

import ConfirmChangePhoneContactInfo from "@/layouts/ConfirmChangePhoneContactInfo/ConfirmChangePhoneContactInfo.vue";
import ChangeableDataItem from "@/components/UI/ChangeableDataItem.vue";
import ChangePhoneContactInfo from "@/layouts/ChangePhoneContactInfo/ChangePhoneContactInfo.vue";

export default {
  data(){
    return {
      editUsername: false,
      editPassword: false,
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: '••••••••••'
    }
  },
  components: {ChangePhoneContactInfo, ChangeableDataItem, ConfirmChangePhoneContactInfo}
}
</script>

<template>
  <div
      class="relative shadow-md stroke-1 lg:w-[564px] rounded-2xl p-6 flex flex-col gap-6 bg-[#FFFFFF] dark:bg-gray-900 text-gray-900 dark:text-gray-50">
    <h2 class="text-[18px] font-bold">{{ title }}</h2>
    <div class="w-full flex flex-col gap-4">
      <ChangeableDataItem :isChange="editUsername" label="Username" :text="username"
                          @buttonClicked="editUsername = !editUsername">
        <template v-slot:container>

        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editPassword" label="Password" :text="password"
                          @buttonClicked="editPassword = !editPassword">
        <template v-slot:container>

        </template>
      </ChangeableDataItem>

    </div>
  </div>
</template>
