import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(Router)
app.use(createPinia())

app.mount('#app')
