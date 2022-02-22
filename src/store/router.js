/*
 * @Author: gq
 * @Date: 2022-02-22 16:03:21
 * @LastEditors: gq
 * @LastEditTime: 2022-02-22 16:27:24
 * @Description: file content
 * @FilePath: \vite-router\src\store\router.js
 */
/*
 * @Author: gq
 * @Date: 2022-02-22 16:03:21
 * @LastEditors: gq
 * @LastEditTime: 2022-02-22 16:03:22
 * @Description: file content
 * @FilePath: \vite-router\src\store\router.js
 */
import { defineStore } from 'pinia'

export  const routerStore = defineStore('router', {
    state: () => {
        return {hd:"hddddd" }
    },

    actions: {
        increment() {
            this.count++
        },
    },
})