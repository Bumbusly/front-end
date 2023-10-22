<script lang="ts">

import IRFlag from '@/components/svg/CountryFlags/IR.vue'
import USFlag from '@/components/svg/CountryFlags/US.vue'
import NZFlag from '@/components/svg/CountryFlags/NZ.vue'

// Import Axious API
import axios from 'axios'
import router from "@/router";

export default {
  mounted() {
    this.getCountries()
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'default'
    },
  },
  data() {
    return {
      isOpen: false,
      searchText: "",
      inputValue: '',
      mobilePlaceholder: 'Mobile',
      selectedPrefixPhone: '',
      countries: [
        {
          "id": "PYF",
          "commonName": "French Polynesia",
          "officialName": "French Polynesia",
          "nativeOfficialName": "Polynésie française",
          "nativeCommonName": "Polynésie française",
          "currencyName": "CFP franc",
          "currencySymbol": "₣",
          "region": "Oceania",
          "latLang": [
            17.6797,
            149.4068
          ],
          "gmUrl": "https://goo.gl/maps/xgg6BQTRyeQg4e1m6",
          "osmUrl": "https://www.openstreetmap.org/relation/3412620",
          "timezones": [
            "UTC-10:00",
            "UTC-09:30",
            "UTC-09:00"
          ],
          "nameInLanguages": [
            {
              "lang": "per",
              "official": "پُلی‌نِزی فرانسه",
              "common": "پُلی‌نِزی فرانسه"
            }
          ],
          "flag": "https://flagcdn.com/w320/pf.png"
        }
        // Add more countries with flags and phone numbers
      ],
    };
  },
  components: {
    IRFlag,
    NZFlag,
    USFlag
  },
  computed: {
    /*filteredCountries() {
      return this.countries.filter((country) =>
          country.phone.toLowerCase().includes(this.searchText.toLowerCase())
          || country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },*/

    filteredCountries() {
     return this.countries.filter((country) =>
         country.commonName.includes(this.searchText)
     );
   },

  },
  methods: {
    async getCountries() {
      try {
        const url = 'https://bb.abansoft.ir/api/v1/country'
        const headers: Object = {
          'Content-Type': 'application/json'
        }
        const {data} = await axios.get(url, headers)
        if (true) {
          this.countries = data.content
        }
      } catch (error) {
      }
    },
    setColor() {
      if (this.color === 'default') {
        return this.setDefaultColor();
      } else if (this.color === 'red') {
        return this.setRedColor()
      } else {
        return this.setGreenColor()
      }
    },
    setDefaultColor() {
      /*return `text-gray-800 ring-gray-500 placeholder:text-gray-500`;*/
      return `text-gray-800 dark:text-gray-100 ring-gray-500 placeholder:text-gray-500`;
    },
    setRedColor() {
      return `ring-red-500`;
      /*return `text-red-800 ring-red-500 placeholder:text-red-500`;*/
    },
    setGreenColor() {
      /*return `text-green-800 ring-green-500 placeholder:text-green-500`;*/
      return `ring-gray-500`;
    },
    updateInputValue() {
      this.$emit('input-value-updated', this.inputValue);
    },
    closeDrowpdown() {
      // console.log("close dropdown");
      this.isOpen = false;
    },
    toggleDropdown() {
      this.searchText = '';
      this.isOpen = !this.isOpen;
    },
    filterCountries() {
      this.$emit('input-country-updated', this.selectedPrefixPhone);
      // This method is called when the user types in the search box
      // Update the filteredCountries computed property.
    },
    selectCountry(country: any) {
      // Handle country selection here
      // You can close the dropdown or perform other actions as needed.
      this.isOpen = false;
      this.searchText = country.commonName;
      this.selectedPrefixPhone = country.flag;
      this.$emit('input-country-updated', this.selectedPrefixPhone);
    },
  },
};
</script>

<template>
  <div>
    <div class="flex flex-col relative">
      <div class="flex">
        <div
            :class="setColor()"
            class="combobox flex w-3/5 text-gray-800 ring-gray-500 placeholder:text-gray-500 shadow-sm ring-[1.5px] hover:ring-gray-900 dark:hover:ring-gray-50 rounded-l-lg">
          <div class="pl-3">
            <IRFlag v-if="searchText == '+98'"/>
            <USFlag v-if="searchText == '+1'"/>
            <NZFlag v-if="searchText == '+64'"/>
          </div>
          <input
              class="customInput py-2 px-1"
              type="text"
              v-model="searchText"
              @click="toggleDropdown"
              @input="filterCountries"
              placeholder="Country"
          />
        </div>
        <input
            :placeholder="mobilePlaceholder"
            v-model="inputValue"
            @input="updateInputValue"
            :class="setColor()"
            type="number"
            class="block w-full py-2 px-2 shadow-sm border-radius-right text-gray-800 ring-gray-500 placeholder:text-gray-500 ring-[1.5px] focus:ring-gray-900 dark:focus:ring-gray-50 rounded-r-lg dark:text-gray-50">
      </div>
      <div
          class="dropdown h-[236px] overflow-y-scroll bg-[#FFFFFF] dark:bg-gray-700 border-gray-500 border mt-2 rounded-lg flex flex-col gap-2 p-4 shadow-md"
          v-show="isOpen">
        <div
            v-for="(country, index) in filteredCountries"
            :key="index"
            @click="selectCountry(country)"
            @focusout="closeDrowpdown()"
            class="country-option p-5 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg"
        >
          <img :src="country.flag" :alt="country.commonName" class="w-[30px] h-[24px] mr-2"/>
          <div class="country-info flex gap-2">
<!--            <div class="country-phone">{{ country.phone }}</div>-->
            <div class="country-name">{{ country.commonName }}</div>
          </div>
        </div>
      </div>
    </div>
    <slot name="helpText"></slot>
  </div>
</template>


<style scoped>
.combobox {
  position: relative;
  cursor: pointer;
  z-index: 2;
}

input {
  width: 100%;
  outline: none;
}

.dropdown {
  position: absolute;
  top: 2.5rem;
  width: -webkit-fill-available;
  z-index: 200;
}

.country-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.country-option:last-child {
  border-bottom: none;
}


.country-info {
  flex: 1;
}

.country-name {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.3em;
  white-space: nowrap;
  font-weight: bold;
}

.customInput {
  border: none;
}

.border-radius-right {
  border-radius: 0px !important;
  border-bottom-right-radius: 5px !important;
  border-top-right-radius: 5px !important;
}
</style>
