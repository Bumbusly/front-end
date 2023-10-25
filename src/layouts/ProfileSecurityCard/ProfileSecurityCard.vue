<script lang="ts">

import ConfirmChangePhoneContactInfo from "@/layouts/ConfirmChangePhoneContactInfo/ConfirmChangePhoneContactInfo.vue";
import ChangeableDataItem from "@/components/UI/ChangeableDataItem.vue";
import ChangePhoneContactInfo from "@/layouts/ChangePhoneContactInfo/ChangePhoneContactInfo.vue";

export default {
  data(){
    return {
      editUsername: false,
      username: ''
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {ChangePhoneContactInfo, ChangeableDataItem, ConfirmChangePhoneContactInfo}
}
</script>

<template>
  <div
      class="relative shadow-md stroke-1 w-[564px] rounded-2xl m-3 p-6 flex flex-col gap-6 bg-[#FFFFFF] dark:bg-gray-900 text-gray-900 dark:text-gray-50">
    <h2 class="text-[18px] font-bold">{{ title }}</h2>
    <div class="w-full flex flex-col gap-4">
      <ChangeableDataItem :isChange="editUsername" label="Username" :text="username"
                          @buttonClicked="editUsername = !editUsername">
        <template v-slot:container>
          <ChangePhoneContactInfo v-if="changePhoneStage == 1"
                                  @submitClicked="changePhoneStage = 2"
                                  @cancelClicked="editPhone = !editPhone">
          </ChangePhoneContactInfo>
          <ConfirmChangePhoneContactInfo v-if="changePhoneStage == 2"
                                         @submitClicked="changePhoneStage = 1; editPhone = !editPhone"
                                         @cancelClicked="changePhoneStage = 1; editPhone = !editPhone">
          </ConfirmChangePhoneContactInfo>
        </template>
      </ChangeableDataItem>
    </div>
  </div>
</template>
