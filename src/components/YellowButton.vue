
<script setup lang="ts">
defineProps(['text'])
</script>

<template>
    <button
        class="w-full py-[10px] text-sm rounded-lg text-white border border-1  bg-yellow-500 border-yellow-300 hover:text-yellow-100 hover:bg-yellow-400 hover:border-yellow-500">
        {{ text }}
    </button>
</template>