/*
 * @Author: gq
 * @Date: 2022-01-24 23:08:23
 * @LastEditors: gq
 * @LastEditTime: 2022-02-05 23:00:19
 * @Description: file content
 */
import env from './env';
import store from './store';

export { env, store }

// import _ from 'lodash'
// class Helper {

//     constructor() {
//         this.env = this.getEnvs();
//     }
//     getEnvs() {
//         // const envs = _.cloneDeep(import.meta.env);
//         const envs = {};
//         Object.entries(import.meta.env).forEach(([key, value]) => {
//             if (value == 'true' || value == "false") {
//                 envs[key] = value == "true" ? true : false;
//             }
//             else if (/^\d+$/.test(value)) envs[key] = Number(value);

//             else envs[key] = value;
//         })
//         return envs;
//     }

// }
// const helper = new Helper();
// const env = helper.env;
// export default helper;
// export { env }