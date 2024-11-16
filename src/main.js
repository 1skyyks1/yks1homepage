import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@/assets/font/font.css'
import VueTyped from 'vue3-typed-js'
import { VsButton } from 'vuesax-alpha'

const app = createApp(App)

// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

app.use(VueTyped)
app.use(VsButton)
app.mount('#app')
