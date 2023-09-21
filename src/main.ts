// import general styles
import './assets/styles/main.css'

// import custom components
import FilledButton from './components/FilledButton.vue'
import OutlinedButton from './components/OutlinedButton.vue'
import HorizontalDividing from './components/HorizontalDividing.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('filled-button', FilledButton)
app.component('outlined-button', OutlinedButton)
app.component('hr-div', HorizontalDividing)

app.use(router)

app.mount('#app')