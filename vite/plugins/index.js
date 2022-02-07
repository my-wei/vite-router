/*
 * @Author: gq
 * @Date: 2022-01-23 23:04:06
 * @LastEditors: gq
 * @LastEditTime: 2022-01-24 21:57:54
 * @Description: file content
 */
import vue from '@vitejs/plugin-vue';
import { setupMockPlugin } from './mock';
export default function setupPlugins(isBuild, env) {
    const plugins = [vue()];
    plugins.push(setupMockPlugin(isBuild));
    return plugins
}
