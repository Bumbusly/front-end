<script lang="ts">

import IRFlag from '@/components/svg/CountryFlags/IR.vue'
import USFlag from '@/components/svg/CountryFlags/US.vue'
import NZFlag from '@/components/svg/CountryFlags/NZ.vue'

export default {
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
      countries: [
        {name: "Iran", flag: "https://flagcdn.com/w320/ir.png", phone: "+98"},
        {name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png", phone: "+64"},
        {name: "United States", flag: "https://flagcdn.com/w320/us.png", phone: "+1"},
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
    filteredCountries() {
      return this.countries.filter((country) =>
          country.phone.toLowerCase().includes(this.searchText.toLowerCase())
          || country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
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
      return `text-gray-800 ring-gray-500 placeholder:text-gray-500`;
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
    selectCountry(country: any) {
      // Handle country selection here
      // You can close the dropdown or perform other actions as needed.
      this.isOpen = false;
      this.searchText = country.phone;
    },
  },
};
</script>

<template>
  <div>
    <div class="flex">
      <div
          :class="setColor()"
          class="combobox flex w-3/5 text-gray-800 ring-gray-500 placeholder:text-gray-500 shadow-sm ring-[1.5px] hover:ring-gray-900 rounded-l-lg">
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
        <div class="dropdown bg-white border-gray-500 border" v-show="isOpen">
          <div
              v-for="(country, index) in filteredCountries"
              :key="index"
              @click="selectCountry(country)"
              @focusout="closeDrowpdown()"
              class="country-option hover:bg-yellow-100"
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
          v-model="inputValue"
          @input="updateInputValue"
          :class="setColor()"
          type="number"
          class="block w-full py-2 px-2 shadow-sm border-radius-right text-gray-800 ring-gray-500 placeholder:text-gray-500 ring-[1.5px] focus:ring-gray-900 rounded-r-lg">
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
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.2rem;
  width: -webkit-fill-available;
  border-radius: 5px;
  z-index: 200;
}

.country-option {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
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
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.3em;
  white-space: nowrap;
  font-weight: bold;
}

.country-phone {
  color: #777;
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
