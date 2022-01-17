import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router';

async function bootstrap() {
    const app = createApp(App)

    setupRouter(app);
    // app.use(router);
    await router.isReady();
    app.mount('#app');
}

bootstrap();



// app.use("router",router);
// console.log(app)
// app