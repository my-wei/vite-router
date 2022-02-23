/*
 * @Author: gq
 * @Date: 2022-01-22 10:47:07
 * @LastEditors: gq
 * @LastEditTime: 2022-02-21 18:00:21
 * @Description: file content
 * @FilePath: \vite-router\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router';
import { setupPlugins } from './plugins';
import './style/iconfont.css';
import {createPinia} from 'pinia';
async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app);
    setupRouter(app);
    app.use(createPinia());
    // app.use(router);
    await router.isReady();
    app.mount('#app');
}

bootstrap();



// app.use("router",router);
// console.log(app)
// app