/*
 * @Author: gq
 * @Date: 2022-02-21 16:34:13
 * @LastEditors: gq
 * @LastEditTime: 2022-02-21 17:36:19
 * @Description: file content
 * @FilePath: \vite-router\src\pinia\index.js
 */
import { defineStore } from 'pinia'
console.log(defineStore)
export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0 }
    },

    actions: {
        increment() {
            this.count++
        },
    },
})