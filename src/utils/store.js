/*
 * @Author: gq
 * @Date: 2022-02-05 22:42:42
 * @LastEditors: gq
 * @LastEditTime: 2022-02-05 23:02:08
 * @Description: file content
 */
export default {

    set(key, data) {
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire * 1000;
            localStorage.setItem(key, JSON.stringify(data));
        }
    },
    get(key) {
        const item = localStorage.getItem(key);

        if (item) {
            const data = JSON.parse(item);
            const expire = data?.expire;
            if (expire < new Date().getTime()) {
                localStorage.removeItem(key);
                return null;
            }
            return data;
        }
        return null;
    }



}