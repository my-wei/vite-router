/*
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-02-02 21:52:24
 * @Description: file content
 */
import { serupTailwindcss } from './tailwindcss';

export function setupPlugins(app) {
    autoRegisterComponent(app);
    serupTailwindcss();

}
//组件的全局注册
function autoRegisterComponent(app) {
    const components = import.meta.globEager('../components/*.vue');
    console.log(components);
    Object.keys(components).forEach(file => {
        let name = file.split('/').pop()?.split('.').shift();
        console.log(name);
        console.log(components[file]);
        app.component(name, components[file])
    })

}