<script lang="ts">

// Import Svg files of Flags
import UsFlag from './../svg/CountryFlags/US.vue'
import GrFlag from './../svg/CountryFlags/GE.vue'

// Content Of Component
export default {
    props: {
    },
    components: {
        UsFlag,
        GrFlag
    }
}
</script>

<template>
    <!-- begin::Select Menu -->
    <div>
        <div class="flex items-center">
            <label for="country"
                class="flex flex-row justify-center align-center items-center cursor-pointer rounded-l-md border-0 py-2 px-2 text-yellow-900 shadow-sm ring-1 ring-inset ring-yellow-900 placeholder:text-yellow-700 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 gap-2">
                <UsFlag></UsFlag>
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">
                    USA
                </label>
                <svg class="w-4 h-4 mx-1 fill-current rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </label>
        </div>
        <input type="checkbox" name="country" id="country" class="hidden peer" />
        <div
            class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col mt-1 border border border-gray-200">
            <div class="cursor-pointer group">
                <a
                    class="p-2 border-transparent border-l-4 group-hover:border-gray-600 group-hover:bg-gray-100 flex flex-row justify-center align-center items-center gap-2">
                    <GrFlag></GrFlag>
                    Germany
                </a>
            </div>
        </div>
    </div>
    <!-- end::Select Menu -->
</template>