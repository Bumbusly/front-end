<script lang="ts">
// Code of View
export default {
  props: {
    cardName: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  components: {},
  methods: {},
  mounted() {}
}
</script>

<template>
  <!-- begin::Card Container -->
  <div
    class="w-[374px] lg:w-1/4 m-1 bg-white rounded-2xl sm:border border-yellow-800 px-7 py-5 flex flex-col gap-5"
  >
    <!-- begin::Main Section -->
    <div class="flex flex-col gap-6">
      <!-- begin::Card Header -->
      <div class="flex flex-col gap-1">
        <!-- begin::Card Name and Card Image -->
        <div class="flex flex-row justify-between align-center items-center">
          <!-- begin::Card Name -->
          <h1 class="text-[24px] font-[900] text-yellow-800">{{ cardName }}</h1>
          <!-- end::Card Name -->
          <!-- begin::Card Image -->
          <slot name="cardImage"></slot>
          <!-- end::Card Image -->
        </div>
        <!-- end::Card Name and Card Image -->
        <!-- begin::Description of Card -->
        <slot name="cardDescription"> </slot>
        <!-- end::Description of Card -->
      </div>
      <!-- end::Card Header -->
      <!-- begin::Card Body -->
      <slot name="cardBody"> </slot>
      <!-- end::Card Body -->
    </div>
    <!-- end::Main Section -->
    <!-- begin::More Section (Additional Options) -->
    <slot name="cardAdditional"> </slot>
    <!-- end::More Section (Additional Options) -->
  </div>
  <!-- end::Card Container -->
</template>