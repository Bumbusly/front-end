<script lang="ts">

export default {
    props: {
        color: {
            type: String,
            required: false,
            default: "green"
        },
        textColor: {
            type: String,
            required: false,
            default: "green"
        },
        bgColor: {
            type: String,
            required: false,
            default: "green"
        }
    },
    methods: {
        setColor(): string {
            return `text-${this.textColor}-600 border-${this.bgColor}-300 hover:text-${this.bgColor}-100 hover:bg-${this.bgColor}-400 hover:border-${this.bgColor}-500`;
        }
    }
}
</script>

<template>
    <input id="terms-acknowledge" type="checkbox" value=""
        class="w-6 h-6 rounded-xl focus:ring-green-500 focus:ring-2 accent-green-500">
</template>