<script>

import IRFlag from '@/components/svg/CountryFlags/IR.vue'
import USFlag from '@/components/svg/CountryFlags/US.vue'
import NZFlag from '@/components/svg/CountryFlags/NZ.vue'

export default {
  data() {
    return {
      isOpen: false,
      searchText: "",
      mobilePlaceholder: 'Mobile',
      countries: [
        {name: "Iran", flag: "https://flagcdn.com/w320/ir.png", phone: "+98"},
        {name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png", phone: "+64"},
        {name: "United States", flag: "https://flagcdn.com/w320/us.png", phone: "+1"},
        // Add more countries with flags and phone numbers
      ],
    };
  },
  components : {
    IRFlag,
    NZFlag,
    USFlag
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
          country.phone.toLowerCase().includes(this.searchText.toLowerCase())
          || country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    closeDrowpdown() {
      console.log("close dropdown");
      this.isOpen = false;
    },
    toggleDropdown() {
      this.searchText = '';
      this.isOpen = !this.isOpen;
    },
    filterCountries() {
      // This method is called when the user types in the search box
      // Update the filteredCountries computed property.
    },
    selectCountry(country) {
      // Handle country selection here
      // You can close the dropdown or perform other actions as needed.
      this.isOpen = false;
      this.searchText = country.phone;
    },
  },
};
</script>

<template>
  <div class="flex">
  <div class="combobox flex w-3/5 text-gray-800  ring-gray-500 placeholder:text-gray-500 shadow-sm ring-[1.5px] hover:ring-gray-900 rounded-l-lg">
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
    <div class="dropdown" v-show="isOpen">
      <div
          v-for="(country, index) in filteredCountries"
          :key="index"
          @click="selectCountry(country)"
          @focusout="closeDrowpdown()"
          class="country-option"
      >
        <img :src="country.flag" :alt="country.name" class="country-flag"/>
        <div class="country-info">
          <div class="country-name">{{ country.name }}</div>
          <div class="country-phone">{{ country.phone }}</div>
        </div>
      </div>
    </div>
  </div>
  <input
      :placeholder="mobilePlaceholder"
      type="number"
      class="block w-full py-2 px-2 shadow-sm border-radius-right text-gray-800 ring-gray-500 placeholder:text-gray-500 ring-[1.5px] focus:ring-gray-900 rounded-r-lg">
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
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: max-content;
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 20;
}

.country-option {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.country-option:last-child {
  border-bottom: none;
}

.country-flag {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.country-info {
  flex: 1;
}

.country-name {
  font-weight: bold;
}

.country-phone {
  color: #777;
}

.customInput {
  border: none;
}

.border-radius-right{
  border-radius: 0 !important;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
}
</style>
