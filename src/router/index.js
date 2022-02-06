/*
 * @Author: gq
 * @Date: 2022-01-17 22:44:56
 * @LastEditors: gq
 * @LastEditTime: 2022-01-19 18:52:47
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router';
import layoutRoutes from './autoload';
import guard from '@/router/guard';
const router = createRouter({
    history: createWebHistory(),
    routes: [...layoutRoutes,
    {
        path: "/",
        component: () => import('../layouts/admin.vue'),
        children: [{
            path: "admin",
            component: () => import('../views/home.vue')
        }]
    }
    ]
})

export function setupRouter(app) {
    app.use(router);
    guard(router);
}


export default router;