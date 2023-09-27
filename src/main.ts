// Import General Styles
import './assets/styles/main.css'

// Import Custom UI Components
import BaseButton from './components/UI/BaseButton.vue'
import DropDown from './components/UI/DropDown.vue'
import HorizontalDividing from './components/UI/HorizontalDividing.vue'
import BaseTextInput from './components/UI/BaseTextInput.vue'
import SelectMenu from './components/UI/SelectMenu.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('text-input', BaseTextInput)
app.component('drop-down', DropDown)
app.component('hr-div', HorizontalDividing)
app.component('SelectMenu', SelectMenu)

app.use(router)

app.mount('#app')