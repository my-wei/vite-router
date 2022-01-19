/*
 * @Author: gq
 * @Date: 2022-01-17 22:44:56
 * @LastEditors: gq
 * @LastEditTime: 2022-01-19 22:31:04
 * @Description: file content
 */
const layouts = import.meta.globEager('../layouts/*.vue');
const views = import.meta.globEager('../layouts/**/*.vue');

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
    console.log(layoutRoute);
    Object.entries(views).forEach(([file, module]) => {
        console.log(file);
        if (file.includes(`../views/${layoutRoute.name}`)) {

        }
    })
}

function getRouteByModule(file, module) {
    const name = file.replace(/.+layouts\/|\.vue/gi, '')
    const route = {
        name,
        path: `/${name}`,

        component: module.default
    }
    return route;

}



export default getRoutes();