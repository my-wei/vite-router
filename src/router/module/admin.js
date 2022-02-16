/*
 * @Author: gq
 * @Date: 2022-02-16 22:37:56
 * @LastEditors: gq
 * @LastEditTime: 2022-02-16 23:26:23
 * @Description: file content
 */


export default {
    name: "admin", path: "/admin",
    component: () => import("@/layouts/admin.vue"),
    children: [
        {
            name: "admin.home",
            path: "/home",
            component: () => import("@/views/admin/home.vue")
        }
    ]
}