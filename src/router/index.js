import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'           
import Post from '../components/Post.vue'
import Error from '../components/Error.vue'

const routes =  [
    {path: '/', component: Home},
    {path: '/post', component: Post},
    {path: '/:pathMatch(.*)*', component: Error}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router