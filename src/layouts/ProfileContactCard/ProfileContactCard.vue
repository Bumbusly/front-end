<script lang="ts">
import ChangeableDataItem from '@/components/UI/ChangeableDataItem.vue'
import MobileBox from "@/components/UI/MobileBox.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import ChangePhoneContactInfo from "@/layouts/ChangePhoneContactInfo/ChangePhoneContactInfo.vue";
import ConfirmChangePhoneContactInfo from '@/layouts/ConfirmChangePhoneContactInfo/ConfirmChangePhoneContactInfo.vue'
import ChangeEmailContactInfo from "@/layouts/ChangeEmailContactInfo/ChangeEmailContactInfo.vue";
import ConfirmChangeEmailContactInfo from '@/layouts/ConfirmChangePhoneContactInfo/ConfirmChangePhoneContactInfo.vue'
import ChangeAddressContactInfo from "@/layouts/ChangeAddressContactInfo/ChangeAddressContactInfo.vue";
import ChangeCountryContactInfo from "@/layouts/ChangeCountryContactInfo/ChangeCountryContactInfo.vue"
import ChangeCityContactInfo from "@/layouts/ChangeCityContactInfo/ChangeCityContactInfo.vue";
import ChangeDistrictContactInfo from "@/layouts/ChangeDistrictContactInfo/ChangeDistrictContactInfo.vue";
import ChangeZipCodeContactInfo from "@/layouts/ChangeZipCodeContactInfo/ChangeZipCodeContactInfo.vue";
import ChangeStateContactInfo from "@/layouts/ChangeStateContactInfo/ChangeStateContactInfo.vue";

export default {
  components: {
    ChangeAddressContactInfo,
    BaseButton,
    ChangeableDataItem,
    MobileBox,
    ChangePhoneContactInfo,
    ConfirmChangePhoneContactInfo,
    ChangeEmailContactInfo,
    ConfirmChangeEmailContactInfo,
    ChangeCountryContactInfo,
    ChangeCityContactInfo,
    ChangeDistrictContactInfo,
    ChangeStateContactInfo,
    ChangeZipCodeContactInfo,
  },
  data() {
    return {
      editPhone: false,
      editEmail: false,
      editAddress: false,
      editCity: false,
      editState: false,
      editCountry: false,
      editDistrict: false,
      editZipCode: false,
      changePhoneStage: 1,
      changeEmailStage: 1,
      changeAddressStage: 1,
      changeCityStage: 1,
      changeStateStage: 1,
      changeCountryStage: 1,
      changeDistrictStage: 1,
      changeZipCodeStage: 1,
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
    },
    isWaiting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updatePhoneValue(value: string) {
      this.$emit('input-phone-updated', value);
    },
    updateEmailValue(value: string) {
      this.$emit('input-email-updated', value);
    },
    updateAddressValue(value: string) {
      this.$emit('input-address-updated', value);
    },
    updateCountryValue(value: string) {
      this.$emit('input-country-updated', value);
    },
    updateCityValue(value: string) {
      this.$emit('input-city-updated', value);
    },
    updateStateValue(value: string) {
      this.$emit('input-state-updated', value);
    },
    updateDistrictValue(value: string) {
      this.$emit('input-district-updated', value);
    },
    updateZipcodeValue(value: string) {
      this.$emit('input-zipCode-updated', value);
    },
    changeAddress(){
      this.changeAddressStage = 1
      this.editAddress = !this.editAddress
      this.$emit('profile-updated');
    }
  }
}
</script>

<template>
  <div
      class="relative shadow-md stroke-1 lg:w-[564px] rounded-2xl p-6 flex flex-col gap-6 bg-[#FFFFFF] dark:bg-gray-900 text-gray-900 dark:text-gray-50">
    <h2 class="text-[18px] font-bold">{{ title }}</h2>
    <div class="w-full flex flex-col gap-7">
      <ChangeableDataItem :isChange="editPhone" label="Phone" :text="phone"
                          @buttonClicked="editPhone = !editPhone" :isWaiting="isWaiting">
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

      <ChangeableDataItem :isChange="editEmail" label="Email" :text="email" @buttonClicked="editEmail = !editEmail" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeEmailContactInfo v-if="changeEmailStage == 1"
                                  @submitClicked="changeEmailStage = 2"
                                  @cancelClicked="editEmail = !editEmail">
          </ChangeEmailContactInfo>

          <ConfirmChangeEmailContactInfo
              v-if="changeEmailStage == 2"
              @submitClicked="changeEmailStage = 1; editEmail = !editEmail"
              @cancelClicked="changeEmailStage = 1; editEmail = !editEmail">
          </ConfirmChangeEmailContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editAddress" label="Address" :text="address"
                          @buttonClicked="editAddress = !editAddress" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeAddressContactInfo
              v-if="changeAddressStage == 1"
              @submitClicked="changeAddress()"
              @cancelClicked="changeAddressStage = 1; editAddress = !editAddress"
              @input-data="updateAddressValue">
          </ChangeAddressContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editCountry" label="Country" :text="country"
                          @buttonClicked="editCountry = !editCountry" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeCountryContactInfo
              v-if="changeCountryStage == 1"
              @submitClicked="changeCountryStage = 1; editCountry = !editCountry"
              @cancelClicked="changeCountryStage = 1; editCountry = !editCountry"
              @input-data="updateCountryValue">
          </ChangeCountryContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editCity" label="City" :text="city" @buttonClicked="editCity = !editCity" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeCityContactInfo
              v-if="changeCityStage == 1"
              @submitClicked="changeCityStage = 1; editCity = !editCity"
              @cancelClicked="changeCityStage = 1; editCity = !editCity"
              @input-data="updateCityValue">
          </ChangeCityContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editState" label="State" :text="state" @buttonClicked="editState = !editState" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeStateContactInfo
              v-if="changeStateStage == 1"
              @submitClicked="changeStateStage = 1; editState = !editState"
              @cancelClicked="changeStateStage = 1; editState = !editState"
              @input-data="updateStateValue">
          </ChangeStateContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editDistrict" label="District" :text="district"
                          @buttonClicked="editDistrict = !editDistrict" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeDistrictContactInfo
              v-if="changeDistrictStage == 1"
              @submitClicked="changeDistrictStage = 1; editDistrict = !editDistrict"
              @cancelClicked="changeDistrictStage = 1; editDistrict = !editDistrict"
              @input-data="updateDistrictValue">
          </ChangeDistrictContactInfo>
        </template>
      </ChangeableDataItem>

      <ChangeableDataItem :isChange="editZipCode" label="ZipCode" :text="zipCode"
                          @buttonClicked="editZipCode = !editZipCode" :isWaiting="isWaiting">
        <template v-slot:container>
          <ChangeZipCodeContactInfo
              v-if="changeZipCodeStage == 1"
              @submitClicked="changeZipCodeStage = 1; editZipCode = !editZipCode"
              @cancelClicked="changeZipCodeStage = 1; editZipCode = !editZipCode"
              @input-data="updateZipcodeValue"
          >
          </ChangeZipCodeContactInfo>
        </template>
      </ChangeableDataItem>
    </div>
  </div>
</template>

<style>
BaseButton {
  font-size: 12px !important;
}
</style>