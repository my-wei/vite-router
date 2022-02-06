/*
 * @Author: gq
 * @Date: 2022-02-02 13:13:49
 * @LastEditors: gq
 * @LastEditTime: 2022-02-05 23:04:49
 * @Description: file content
 */
import { http } from '@/plugins/axios';

export function info(params) {
    return http.request({
        url: "get",
        params
    })
}
export function login(params) {
    return http.request({
        url: "login",
        params
    })
}