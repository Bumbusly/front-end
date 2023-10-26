<script lang="ts">

import {defineComponent} from "vue";
import SunSvg from "@/components/svg/Icons/sun.vue";
import MoonSvg from "@/components/svg/Icons/moon.vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  mounted(){
    this.setTheme()
  },
  components: {MoonSvg, SunSvg},
  methods: {
    setTheme() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme == 'dark') {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
      localStorage.theme = 'light'
    },
    changeTheme() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme != 'dark') {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
      this.store.commit('changeTheme')
      console.log(localStorage.theme)
    }
  }
}
</script>

<template>
  <div class="change-theme absolute right-1 bottom-1 m-2 rounded-full bg-gray-100 dark:bg-gray-900 p-4 shadow-lg" @click="changeTheme()">
    <SunSvg v-if="store.getters.getTheme == false" class="w-[30px] h-[30px] fill-yellow-500"></SunSvg>
    <MoonSvg v-if="store.getters.getTheme == true" class="w-[30px] h-[30px] fill-yellow-400"></MoonSvg>
  </div>
</template>

<style scoped>
.change-theme {
  cursor: pointer;
}
</style>