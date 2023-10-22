<template>
  <div class="grid grid-cols-4 gap-2">
    <input
        ref="digits[1]"
        v-model="digits[1]"
        type="number"
        pattern="\d*"
        class="border rounded-lg border-gray-300 dark:border-gray-600"
        :maxlength="1"
        @input="handleInput(1)"
        @keydown.backspace="handleBackspace(1)"
    />
    <input
        ref="digits[2]"
        v-model="digits[2]"
        type="number"
        pattern="\d*"
        class="border rounded-lg border-gray-300 dark:border-gray-600"
        :maxlength="1"
        @input="handleInput(2)"
        @keydown.backspace="handleBackspace(2)"
    />
    <input
        ref="digits[3]"
        v-model="digits[3]"
        type="number"
        pattern="\d*"
        class="border rounded-lg border-gray-300 dark:border-gray-600"
        :maxlength="1"
        @input="handleInput(3)"
        @keydown.backspace="handleBackspace(3)"
    />
    <input
        ref="digits[4]"
        v-model="digits[4]"
        type="number"
        pattern="\d*"
        class="border rounded-lg border-gray-300 dark:border-gray-600"
        :maxlength="1"
        @input="handleInput(4)"
        @keydown.backspace="handleBackspace(4)"
    />
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      digits: ['', '', '', ''],
      isValidCode: false,
    };
  },
  methods: {
    handleInput(index: number) {
      if (parseInt(this.digits[1]) > 10) {
        this.digits[1] = (parseInt(this.digits[1]) % 10).toString()
      }
      if (parseInt(this.digits[2]) > 10) {
        this.digits[2] = (parseInt(this.digits[2]) % 10).toString()
      }
      if (parseInt(this.digits[3]) > 10) {
        this.digits[3] = (parseInt(this.digits[3]) % 10).toString()
      }
      if (parseInt(this.digits[4]) > 10) {
        this.digits[4] = (parseInt(this.digits[4]) % 10).toString()
      }

      if (index < 1 || index > 4) return;

      // Dynamically get the digit's value and update the next input
      let currentDigit = this.digits[index];
      if (currentDigit.length > 1) {
        // Remove all but the first digit
        currentDigit = currentDigit.charAt(0);
        this.digits[index] = currentDigit;
      }

      if (index < 4 && currentDigit) {
        // Focus on the next input
        this.$nextTick(() => {
          const nextInput = this.$refs['digits[' + (index + 1) + ']']
          if (nextInput instanceof HTMLInputElement) {
            nextInput.focus();
          }
        });
      }
    },
    handleBackspace(index: number) {
      if (index <= 1 || index > 4) return;

      // Focus on the previous input when Backspace is pressed and the input is empty
      if (!this.digits[index] && this.digits[index - 1]) {
        this.$nextTick(() => {
          const previousInput = this.$refs['digits[' + (index - 1) + ']'];
          if (previousInput instanceof HTMLInputElement) {
            previousInput.focus();
          }
        });
      }
    },
    validateCode() {
      // Check if all digits are filled and if they are numeric
      const code = this.digits[1] + this.digits[2] + this.digits[3] + this.digits[4];
      this.isValidCode = code.length === 4 && /^\d{4}$/.test(code);
    },
  },
}
</script>

<style scoped>
input[type="number"] {
  text-align: center;
  height: 40px;
}

input[type="number"]:focus {
  border-width: 2px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

:is(.dark .dark\:border-gray-600){
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;
}
</style>
