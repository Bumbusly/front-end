<script lang="ts">
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
<div>
  <img  v-if="store.getters.getTheme == true"
        width="50"
        height="55"
        alt="bumbusly logo"
        src="./../../assets/media/images/Logo/Bumbusly.svg"/>

  <img  v-if="store.getters.getTheme == false"
        width="50"
        height="55"
        alt="bumbusly logo"
        src="./../../assets/media/images/Logo/Bumbusly-light.png"/>
</div>
</template>