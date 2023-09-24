
<script setup lang="ts">
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
            :class="' text-' + textColor + ' bg-' + bgColor + '-500' + ' border-' + bgColor + '-300' + ' hover:text-' + bgColor + '-100' + ' hover:bg-' + bgColor + '-400' + ' hover:border-' + bgColor + '-500'"
            class="w-full py-[10px] text-sm rounded-lg border border-1">
            {{ text }}
        </button>
    </RouterLink>

    <button v-if="link == null"
        :class="' text-' + textColor + ' bg-' + bgColor + '-500' + ' border-' + bgColor + '-300' + ' hover:text-' + bgColor + '-100' + ' hover:bg-' + bgColor + '-400' + ' hover:border-' + bgColor + '-500'"
        class="w-full py-[10px] text-sm rounded-lg border border-1">
        {{ text }}
    </button>
</template>