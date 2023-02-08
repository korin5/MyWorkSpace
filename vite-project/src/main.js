import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import About from './components/List.vue'
import 'https://unpkg.com/vue-router@4'

const App = { template: './components/List.vue' }
const About = { template: './components/List.vue' }

const routes = [
    { path: '/', component: App },
    { path: '/about', component: About },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


const app = createApp(App)

app.use(router)

app.mount('#app')