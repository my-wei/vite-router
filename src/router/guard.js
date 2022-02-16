/*
 * @Author: gq
 * @Date: 2022-02-05 23:22:14
 * @LastEditors: gq
 * @LastEditTime: 2022-02-16 23:54:50
 * @Description: file content
 */
import { useRouter } from 'vue-router';
import store from '@/utils/store';
class Guard {
    constructor(router) {
        this.router = router
    }
    run() {
        this.router.beforeEach((to, from) => {

            const token = store.get('token');
            if (this.isLogin(to, token) === false) {
                return { name: "login" }
            }
            if (this.isGuest(to, token) === false) return { from }
        })
    }
    isGuest(route, token) {
        // console.log(route,token)
        // console.log( Boolean(!route.meta.guest || (route.meta.guest && !token)))
        // return Boolean(!route.meta.guest || (route.meta.guest && !token))
    }
    isLogin(route, token) {
        return Boolean(!route.meta.auth || (route.meta.auth && token))
    }
}
export default (router) => {
    new Guard(router).run();
}