
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps(['text', 'link'])
</script>

<template>
    <RouterLink v-if="link != null" :to="link">
        <button
            class="w-full py-[10px] text-sm rounded-lg text-yellow-700 border border-1 border-yellow-700 hover:text-yellow-900 hover:bg-yellow-100 hover:border-yellow-400">
            {{ text }}
        </button>
    </RouterLink>
</template>