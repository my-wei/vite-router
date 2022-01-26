/*
 * @Author: gq
 * @Date: 2022-01-23 23:24:24
 * @LastEditors: gq
 * @LastEditTime: 2022-01-23 23:24:24
 * @Description: file content
 */
// import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/get',
        method: 'get',
        response: ({ query }) => {
            return {
                code: 0,
                data: {
                    name: 'vben',
                },
            }
        },
    },
    {
        url: '/api/login',
        method: 'get',
        response: ({ query }) => {
            return {
                code: 0,
                data: {
                    token: 'vbenssxx11221zz',
                },
            }
        },
    },

] 