
<script setup lang="ts">
defineProps(['text'])
</script>

<template>
    <button
        class="w-full py-[10px] text-sm rounded-lg text-yellow-700 border border-1 border-yellow-700 hover:text-yellow-900 hover:bg-yellow-100 hover:border-yellow-400">
        {{ text }}
    </button>
</template>