import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router';
import {setupPlugins} from './plugins';
async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app);
    setupRouter(app);
    // app.use(router);
    await router.isReady();
    app.mount('#app');
}

bootstrap();



// app.use("router",router);
// console.log(app)
// app