<script lang="ts">

// Import Axious API
import axios from 'axios'

export default {
  mounted() {
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    })
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
      flagUrl: 'https://flagcdn.com/w320/ir.png',
      countries: [
        {
          "id": "IRN",
          "commonName": "Iran",
          "officialName": "Islamic Republic of Iran",
          "currencyName": "Iranian rial",
          "currencySymbol": "﷼",
          "nameInLanguages": [
            {
              "lang": "per",
              "official": null,
              "common": null
            }
          ],
          "flag": "https://flagcdn.com/w320/ir.png",
          "dialingCode": "+98"
        },
        // Add more countries with flags and phone numbers
      ],
    };
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
          country.dialingCode.toLowerCase().includes(this.searchText.toLowerCase())
          || country.commonName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },

    /*   filteredCountries() {
        return this.countries.filter((country) =>
            country.commonName.includes(this.searchText)
        );
      },*/

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
      this.isOpen = !this.isOpen;
    },
    filterCountries() {
      this.isOpen = true;
      this.$emit('input-country-updated', this.selectedPrefixPhone);
      // This method is called when the user types in the search box
      // Update the filteredCountries computed property.
    },
    selectCountry(country: any) {
      // Handle country selection here
      // You can close the dropdown or perform other actions as needed.
      this.isOpen = false;
      this.searchText = country.dialingCode;
      this.selectedPrefixPhone = country.dialingCode;
      this.flagUrl = country.flag
      this.$emit('input-country-updated', this.selectedPrefixPhone);
    },
  },
};
</script>

<template>
  <div>
    <div class="flex flex-col relative">
      <div class="flex gap-0">
        <div
            :class="setColor()"
            class="combobox remove-right-border flex w-[130px] text-gray-800 ring-gray-500 placeholder:text-gray-500 shadow-sm ring-[1.5px] hover:ring-gray-900 dark:hover:ring-gray-50 rounded-l-lg justify-center align-center">
          <div class="pl-3">
            <img class="w-[40px] h-[20px] aspect-[3/4] rounded-md" :src="flagUrl">
          </div>
          <input
              class="customInput py-2 px-1 mt-[0.9px]"
              type="text"
              v-model="searchText"
              @click="toggleDropdown"
              @input="filterCountries"
              placeholder="+98"
          />
        </div>
        <input
            :placeholder="mobilePlaceholder"
            v-model="inputValue"
            @input="updateInputValue"
            :class="setColor()"
            @click="closeDrowpdown()"
            type="number"
            class="block w-full py-2 px-2 shadow-sm remove-left-border border-radius-right text-gray-800 ring-gray-500 placeholder:text-gray-500 ring-[1.5px] focus:ring-gray-900 dark:focus:ring-gray-50 rounded-r-lg dark:text-gray-50">
      </div>
      <div
          class="dropdown h-[236px] overflow-y-scroll bg-[#FFFFFF] dark:bg-gray-700 border-gray-500 border mt-2 rounded-lg flex flex-col gap-3 p-4 shadow-md"
          v-show="isOpen">
        <div
            v-for="(country, index) in filteredCountries"
            :key="index"
            @click="selectCountry(country)"
            @focusout="closeDrowpdown()"
            class="country-option p-5 h-[42px] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
        >
          <img :src="country.flag" :alt="country.commonName" class="w-[24px] h-[24px] mr-2 rounded-full"/>
          <div class="country-info flex gap-1 text-gray-500 dark:text-gray-400">
            <div class="country-name">{{ country.commonName }}</div>
            <div class="country-phone">{{ country.dialingCode }}</div>
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
}

.customInput {
  border: none;
}

.border-radius-right {
  border-radius: 0px !important;
  border-bottom-right-radius: 5px !important;
  border-top-right-radius: 5px !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #e5e5e5;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.remove-left-border {
  clip-path: inset(-5px -5px -5px 0px);
}

.remove-right-border {
  border-right: 1px solid rgba(255, 255, 255, 0.58) !important;
}
</style>
