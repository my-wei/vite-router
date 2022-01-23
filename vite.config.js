/*
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-01-23 23:09:52
 * @Description: file content
 */
import { defineConfig, loadEnv } from 'vite'

// import vue from '@vitejs/plugin-vue'
import alias from './vite/alias';
import { parseEnv } from './vite/utils';
import setupPlugins from './vite/plugins';
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   }
// })

export default ({ command, mode }) => {
  const isBuild = command = "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));



  console.log((env));
  // parseEnv(env);
  return {
    // plugins:  [vue()],
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    }
  }
}