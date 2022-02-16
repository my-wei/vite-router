/*
 * @Author: gq
 * @Date: 2022-01-17 22:44:56
 * @LastEditors: gq
 * @LastEditTime: 2022-02-17 00:02:05
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './autoload';
import guard from '@/router/guard';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,

        {
            path: "/",
            component: () => import('@/views/home.vue'),
            children: [{
                path: "admin",
                component: () => import('../views/home.vue')
            }]
        },

    ]
})

export function setupRouter(app) {
    app.use(router);
    guard(router);
}


export default router;