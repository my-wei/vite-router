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