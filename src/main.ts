// Import General Styles
import './assets/styles/main.css'

// Import Custom UI Components
import BaseButton from '@/components/UI/BaseButton.vue'
import DropDown from '@/components/svg/DropDown.vue'
import HorizontalDividing from '@/components/UI/HorizontalDividing.vue'
import BaseTextInput from '@/components/UI/BaseTextInput.vue'
import SelectMenu from '@/components/UI/SelectMenu.vue'

// Import Vuex Store
import store from '@/store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Add Toast Library
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('TextInput', BaseTextInput)
app.component('DropDown', DropDown)
app.component('HrDivision', HorizontalDividing)
app.component('SelectMenu', SelectMenu)

app.use(router)
app.use(store)
app.use(Toast, {
  newestOnTop: true,
  filterBeforeCreate: (toast: any, toasts: any) => {
    if (toasts.filter((t: any) => t.type === toast.type).length !== 0) {
      // Returning false discards the toast
      return false
    }
    // You can modify the toast if you want
    return toast
  }
})
app.use(vuetify)

app.mount('#app')
