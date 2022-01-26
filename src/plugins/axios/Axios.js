
import axios from 'axios';
export default class Axios {
    constructor(config) {
        this.instance = axios.create(config);
    }

    interceptors() {
        this.interceptorsRequset();
        this.interceptorsResponse();
    }
    async request(data) {
        return new Promise(async (res, rej) => {
            try {
                const response = await this.instance.request(data);
                
                res(response.data);
            } catch (err) {
                rej(err);
            }
        })

        // console.log(x);

    }
    interceptorsRequset() {
        //请求拦截器
        this.instance.interceptors.request.use(
            config => {
                // 在发送请求之前做些什么
                return config;
            }, error => {
                // 对请求错误做些什么
                return Promise.reject(error);
            });
    }
    interceptorsResponse() {
        //相应拦截器
        this.instance.interceptors.response.use(
            response => {
                // 对响应数据做点什么
                return response;
            }, error => {
                // 对响应错误做点什么
                return Promise.reject(error);
            });
    }
}