// import general styles
import './assets/styles/main.css'

// import custom components
import YellowButton from './components/YellowButton.vue'
import TransparentButton from './components/TransparentButton.vue'
import HorizontalDividing from './components/HorizontalDividing.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('yellow-button', YellowButton)
app.component('transparent-button', TransparentButton)
app.component('hr-div', HorizontalDividing)

app.use(router)

app.mount('#app')