import Vue from 'vue'
import Router from 'vue-router'


import Default from './layouts/Default.vue'
import DefaultWithSideMenu from './layouts/DefaultWithSideMenu.vue'
import Fullscreen from './layouts/Fullscreen.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Fullscreen,
            children: [
                {
                    path: '/login',
                    name: 'auth',
                    component: () => import('./views/Auth.vue')
                },
            ]
        },
        {
            path: '/',
            component: Default,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
            ]
        },
        {
            path: '/',
            component: DefaultWithSideMenu,
            children: [
                {
                    path: '/products',
                    name: 'products',
                    component: () => import('./views/Products.vue')
                },
                {
                    path: '/product-a',
                    name: 'product-a',
                    component: () => import('./views/ProductA.vue')
                },
                {
                    path: '/product-b',
                    name: 'product-b',
                    component: () => import('./views/ProductB.vue')
                },
                {
                    path: '/product-c',
                    name: 'product-c',
                    component: () => import('./views/ProductC.vue')
                },
            ]
        }


    ]
});
