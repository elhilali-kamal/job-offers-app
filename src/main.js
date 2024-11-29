import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).use(Toast).mount('#app')
