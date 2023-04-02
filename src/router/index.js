import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Projects from '../views/ProjectsView.vue'
import Contact from '../views/ContactView.vue'
import ThankYou from '../views/ThankYouView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/contact',
            component: Contact,
            children: [
                {
                    path: 'thankyou',
                    component: ThankYou
                }
            ]
        }
    ]
})

export default router
