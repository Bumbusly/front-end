<script lang="ts">
import { RouterView } from 'vue-router'

import {useStore} from "vuex";
import store from "@/store";

export default {
  setup() {
    const store = useStore()
    return {store}
  }
}
</script>

<template>
  <RouterView class="bg-gray-50 dark:bg-gray-900"/>
</template>