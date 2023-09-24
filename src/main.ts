// Import General Styles
import './assets/styles/main.css'

// Import Custom UI Components
import FilledButton from './components/UI/FilledButton.vue'
import OutlinedButton from './components/UI/OutlinedButton.vue'
import DropDown from './components/UI/DropDown.vue'
import HorizontalDividing from './components/UI/HorizontalDividing.vue'
import BaseTextInput from './components/UI/BaseTextInput.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('filled-button', FilledButton)
app.component('text-input', BaseTextInput)
app.component('drop-down', DropDown)
app.component('outlined-button', OutlinedButton)
app.component('hr-div', HorizontalDividing)

app.use(router)

app.mount('#app')