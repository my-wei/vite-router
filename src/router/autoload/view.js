/*
 * @Author: gq
 * @Date: 2022-01-17 22:44:56
 * @LastEditors: gq
 * @LastEditTime: 2022-02-16 23:01:12
 * @Description: file content
 */
const layouts = import.meta.globEager('../../layouts/*.vue');
const views = import.meta.globEager('../../views/**/*.vue');
import { env } from '@/utils';
function getRoutes() {
    const layoutRoutes = []
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module);
        route.children = getChildrenRoutes(route);
        layoutRoutes.push(route);
    })

    return layoutRoutes;
}


function getChildrenRoutes(layoutRoute) {

    const routes = [];
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../../views/${layoutRoute.name}`)) {

            const route = getRouteByModule(file, module);
            routes.push(route);
        }

    })

    return routes;
}

function getRouteByModule(file, module) {
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        name: name.replace('/', '.'),
        path: `/${name}`,

        component: module.default
    }
    // console.log(module.default);
    //针对页面自定义路由所做选项，可以在页面配置route选项直接改变路由地址 Object.assign(route,module.default?.route) 
    return Object.assign(route, module.default?.route);

}


const getMyRoutes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : [];
export default getMyRoutes;