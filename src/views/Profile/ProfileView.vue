<script lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import BeeLoader from '@/components/UI/BeeLoader.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return { store }
  },
  data() {
    return {
      isloading: false
    }
  },
  components: { BaseButton, BeeLoader },
  methods: {
    logoutClicked() {
      console.log(this.store.state)
      this.storeData(null, null, null, false)
      this.reloadPage()
    },
    async sendApi() {
      try {
        const url = 'https://bb.abansoft.ir/api/v1/account/'
        const body = {
          username: this.username,
          password: this.password,
          rememberMe: true
        }
        const headers: object = {
          'Content-Type': 'application/json'
        }
        const { data } = await axios.post(url, body, headers)
        this.post = data
        console.log(data)
        if (data.hasError === false) {
          this.storeData(
            this.username,
            this.post.content.token,
            this.post.content.refereshToken,
            true
          )
          toast.success('You Logged Succesfully')
          router.push('/profile')
        }
      } catch (error) {
        toast.error('Username or Password is Wrong')
        this.usernameValid = 'red'
        this.passwordValid = 'red'
        console.log(error)
      }
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
      @buttonClicked="sendApi()"
    >
    </BaseButton>
  </div>
</template>
