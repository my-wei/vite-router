/*
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-02-02 21:52:24
 * @Description: file content
 */
import setupElementPlus from './elementui';
import { serupTailwindcss } from './tailwindcss';


export function setupPlugins(app) {
    autoRegisterComponent(app);
    setupElementPlus(app);
    serupTailwindcss();
   
}
//组件的全局注册
function autoRegisterComponent(app) {
    const components = import.meta.globEager('../components/*.vue');
    Object.keys(components).forEach(file => {
        let name = file.split('/').pop()?.split('.').shift();
        app.component(name, components[file])
    })

}