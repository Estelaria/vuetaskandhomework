// router.ts
import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from './views/home.vue';
import Profile from './views/profile.vue';
import Hobbies from './views/hobbies.vue';
import WhyUs from './views/whyUs.vue';
import Contact from './views/contact.vue';
import Work from './views/work.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/hobbies',
        name: 'Hobbies',
        component: Hobbies,
    },
    {
        path: '/contact',
        name: 'WhyUs',
        component: WhyUs,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/work',
        name: 'Work',
        component: Work,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
