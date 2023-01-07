import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/style.scss'
import '@/assets/lib/bootstrap/css/bootstrap.css'
import '@/assets/lib/fontawesome/css/all.css'
import store from './stores/AuthStore'


const app = createApp(App)

app.use(store)
app.use(router).mount('#app')
