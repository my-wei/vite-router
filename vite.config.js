import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import alias from './vite/alias';
import { parseEnv } from './vite/utils';
// https://vitejs.dev/config/
// console.log(import.meta, 123)
// export default defineConfig({
//   plugins: [vue()],
//   resolve:{
//     alias,
//   }
// })

export default ({ command, mode }) => {
  const isBuild = command = "build";
  const root = process.cwd();
  const env =parseEnv(loadEnv(mode, root)) ;


  console.log((env));
  // parseEnv(env);
  return {
    plugins: [vue()],
    resolve: {
      alias,
    }
  }
}