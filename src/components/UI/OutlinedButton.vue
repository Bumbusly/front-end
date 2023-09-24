
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
    text: String,
    link: String,
    bgColor: String,
    textColor: String,
})
</script>

<template>
    <RouterLink v-if="link != null" :to="link">
        <button
            class="w-full py-[10px] text-sm rounded-lg text-green-700 border border-1 border-green-700 hover:text-green-900 hover:bg-green-100 hover:border-green-400">
            {{ text }}
        </button>
    </RouterLink>

    <button v-if="link == null"
        class="w-full py-[10px] text-sm rounded-lg text-green-700 border border-1 border-green-700 hover:text-green-900 hover:bg-green-100 hover:border-green-400">
        {{ text }}
    </button>
</template>