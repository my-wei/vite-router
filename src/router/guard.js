/*
 * @Author: gq
 * @Date: 2022-02-05 23:22:14
 * @LastEditors: gq
 * @LastEditTime: 2022-02-06 01:28:34
 * @Description: file content
 */
import { useRouter } from 'vue-router';
class Guard {
    constructor(router) {
        this.router = router
    }
    run() {
        console.log(this.router);
        this.router.beforeEach((to, from) => {
            console.log(to, 123);
            if (this.isAuthCheck(to) === false) {
                return { name: "login" }
            }
        })
    }
    isAuthCheck(route) {

    }
}
export default (router) => {
    new Guard(router).run();
}