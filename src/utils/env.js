/*
 * @Author: gq
 * @Date: 2022-02-05 22:48:27
 * @LastEditors: gq
 * @LastEditTime: 2022-02-05 23:00:15
 * @Description: file content
 */

const envs = JSON.parse(JSON.stringify(import.meta.env));

Object.entries(import.meta.env).forEach(([key, value]) => {

    if (value == 'true' || value == 'false') {
        envs[key] = value == 'true' ? true : false;
    } else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == 'null') envs[key] = null;
    else if (value == 'undefined') envs[key] == undefined;


})

export default envs

