<script lang="ts">
import OpenEye from '../svg/Eye/Visible.vue'
import CloseEye from '../svg/Eye/Invisible.vue'

export default {
    data() {
        return {
            isShow: false
        }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: false,
            default: ''
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        required: {
            type: String,
            required: false,
            default: 'false'
        },
        autocomplete: {
            type: String,
            required: false,
            default: 'false'
        },
        color: {
            type: String,
            required: false,
            default: 'green'
        },
        hidden: {
            type: String,
            required: false,
            default: 'false'
        }
    },
    methods: {
        changeType() {
            this.isShow = !this.isShow;
        }
    },
    components: {
        OpenEye,
        CloseEye
    },
    mounted() {
        this.$refs[this.id].classList.add('text-' + this.color + '-900');
    }
}
</script>

<template>
    <div :id="id + '-container'">
        <label :for="id" class="block text-sm leading-6">{{ label }}</label>
        <div class="relative mt-2 flex flex-row justify-between align-center items-center w-full">
            <input :ref="id" :id="id + '-input'" :name="id" :type="isShow == true ? 'text' : type" :autocomplete=false
                :placeholder="placeholder" :required="required" :obscureText="isShow"
                class="block w-full rounded-md border-0 py-2 px-2 text-gray-800 shadow-sm ring-[1.5px] ring-gray-500 placeholder:text-gray-500 focus:ring-2 sm:text-sm sm:leading-6">
            <div v-if="hidden == 'true'" class="flex align-center items-center justify-center">
                <CloseEye class="h-4 w-4" v-if="isShow === true" @click="changeType()"></CloseEye>
                <OpenEye class="h-4 w-4" v-if="isShow === false" @click="changeType()"></OpenEye>
            </div>
        </div>
    </div>
</template>