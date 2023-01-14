import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/style.scss'
import '@/assets/lib/bootstrap/css/bootstrap.css'
import '@/assets/lib/fontawesome/css/all.css'
import store from './stores/AuthStore'
import vue3GoogleLogin from 'vue3-google-login'

let gAutClientiD ="355830081307-a6ofjnun0q511ps9098st2p19rjecpe6.apps.googleusercontent.com"

const app = createApp(App)

app.use(store)
app.use(vue3GoogleLogin,{
    clientId:gAutClientiD,
} )
app.use(router).mount('#app')
