import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
    { path: '/:player/',component:MainView },
    { path: '/upload/',component:MainView }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;

