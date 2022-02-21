/*
 * @Author: gq
 * @Date: 2022-02-21 15:34:35
 * @LastEditors: gq
 * @LastEditTime: 2022-02-21 16:10:51
 * @Description: file content
 * @FilePath: \vite-router\src\router\module\errors.js
 */
export default {
    name: "error", path: "/error",
    component: () => import("@/layouts/errors.vue"),
    children: [
        {
            name: "errors.404",
            path: "/404",
            component: () => import("@/views/errors/404.vue")
        },{
            name: "errors.403",
            path: "/403",
            component: () => import("@/views/errors/403.vue")
        },{
            name: "errors.500",
            path: "/500",
            component: () => import("@/views/errors/500.vue")
        },
    ]
}