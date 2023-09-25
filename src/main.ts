// Import General Styles
import './assets/styles/main.css'

// Import Custom UI Components
import BaseButton from './components/UI/BaseButton.vue'
import DropDown from './components/UI/DropDown.vue'
import HorizontalDividing from './components/UI/HorizontalDividing.vue'
import BaseTextInput from './components/UI/BaseTextInput.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('text-input', BaseTextInput)
app.component('drop-down', DropDown)
app.component('hr-div', HorizontalDividing)

app.use(router)

app.mount('#app')