import { http } from '@/plugins/axios';

export function info(params) {
    return http.request({
        url: "get",
        params
    })
}