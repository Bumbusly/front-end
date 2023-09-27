<script lang="ts">

// Import Components
import UsFlag from './../svg/CountryFlags/US.vue'
import YellowBackground from "./../YellowBackground.vue";
import GrFlag from './../svg/CountryFlags/GE.vue'

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
    components: {
        UsFlag,
        GrFlag,
        YellowBackground,
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <!-- begin::Card Container -->
    <div class="w-[374px] m-1 bg-white rounded-2xl sm:border border-yellow-800 px-7 py-5">
        <!-- begin::Top Section -->
        <div class="flex flex-col gap-6">
            <!-- begin::Card Header -->
            <div class="flex flex-col gap-2">
                <!-- begin::Card Name and Card Image -->
                <div class="flex flex-row justify-between align-center items-center">
                    <!-- begin::Card Name -->
                    <h1 class="text-[40px] font-bold text-yellow-800">{{ cardName }}</h1>
                    <!-- end::Card Name -->
                    <!-- begin::Card Image -->
                    <slot name="cardImage"></slot>
                    <!-- end::Card Image -->
                </div>
                <!-- end::Card Name and Card Image -->
                <!-- begin::Description of Card -->
                <slot name="cardDescription">
                </slot>
                <!-- end::Description of Card -->
            </div>
            <!-- end::Card Header -->
            <slot name="cardBody" class="flex flex-col gap-4">
            </slot>
        </div>
        <!-- end::Top Section -->
        <!-- begin::Bottom Section (Additional Options) -->
        <div id="register-container__bottom" class="flex flex-col gap-2">
            <hr-div text="Already have an account?"></hr-div>
            <BaseButton text="Login" link="login" bgColor="green" textColor="green" isOutline="true"></BaseButton>
        </div>
        <!-- end::Bottom Section (Additional Options) -->
    </div>
    <!-- end::Card Container -->
</template>