<script setup lang="ts">
defineProps(['text'])
</script>

<template>
    <div class="flex flex-row gap-6 justify-center align-center items-center">
        <div class="line w-full"></div>
        <div>
            <h2 class="wrapper-text font-[600] text-[14px] text-yellow-800">{{ text }}</h2>
        </div>
        <div class="line w-full"></div>
    </div>
</template>

<style>
.line {
    height: 1px;
    background: #854D0E;
}

.wrapper-text {
    white-space: nowrap;
}
</style>