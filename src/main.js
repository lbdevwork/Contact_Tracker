import { createApp } from 'vue'
import { createPinia } from 'pinia'
import encrypt from 'vue-cryptojs'

import App from './App.vue'
import router from './router'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(encrypt)

app.mount('#app')
