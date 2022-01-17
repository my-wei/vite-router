import {createRouter,createWebHistory} from 'vue-router';
import layoutRoutes from './autoload';
const router =createRouter({
    history:createWebHistory(),
    routes:[...layoutRoutes,
        {
            path:"/",
            component:()=>import('../layouts/admin.vue'),
            children:[{
               path:"admin",
               component:()=>import('../views/home.vue') 
            }]
        }
    ]
})

export function setupRouter(app){
    app.use(router);
}


export default router;