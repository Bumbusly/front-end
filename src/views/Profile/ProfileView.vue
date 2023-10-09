<script lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      isloading: false
    }
  },
  components: {BaseButton, BeeLoader},
  methods: {
    logoutClicked() {
      console.log(this.store.state)
      this.storeData("", "", "", false)
      this.reloadPage()
    },
    storeData(username: string, token: string, refereshToken: string, isAuth: boolean) {
      this.store.commit('setUsername', username)
      this.store.commit('setToken', token)
      this.store.commit('setRefereshToken', refereshToken)
      this.store.commit('setIsAuthenticated', isAuth)
    },
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<template>
  <BeeLoader v-if="isloading"></BeeLoader>
  <div>
    <h1>Welcome to your profile</h1>
    <BaseButton
        ref="logoutButton"
        text="Logout"
        bgColor="green"
        textColor="green"
        @buttonClicked="logoutClicked()"
    >
    </BaseButton>
    <BaseButton
        ref="testAuthorize"
        text="Send Request"
        bgColor="blue"
        textColor="blue"
    >
    </BaseButton>
  </div>
</template>
