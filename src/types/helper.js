/*
 * @Author: gq
 * @Date: 2022-01-24 23:08:23
 * @LastEditors: gq
 * @LastEditTime: 2022-01-24 23:17:54
 * @Description: file content
 */
// import _ from 'lodash'
export default new (class {

    constructor() {
        this.env = this.getEnvs();
    }
    getEnvs() {
        // const envs = _.cloneDeep(import.meta.env);
        const envs = {};
        Object.entries(import.meta.env).forEach(([key, value]) => {
            if (value == 'true' || value == "false") {
                envs[key] = value == "true" ? true : false;
            }
            else if (/^\d+$/.test(value)) envs[key] = Number(value);
            else if (value == "null") envs[key] = null;
            else if (value == "undefined") envs[key] = undefined;
            else envs[key] = value;
        })
        return envs;
    }

})() 