/*
 * @Author: gq
 * @Date: 2022-02-16 22:37:56
 * @LastEditors: gq
 * @LastEditTime: 2022-02-16 23:22:36
 * @Description: file content
 */


import { env } from '@/utils';
import getMyRoutes from './view';
import autoloadModuleRoutes from './module';
let routes = [];

if (env.VITE_ROUTE_AUTOLOAD) {
    routes = getMyRoutes;
} else {
    routes = autoloadModuleRoutes();
}
export default routes;