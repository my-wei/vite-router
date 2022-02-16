export default function autoloadModuleRoutes() {
    const modules = import.meta.globEager('../module/**/*.js');
    const routes = [];
    Object.keys(modules).forEach(key => {
        routes.push(modules[key].default);
        console.log(key);
    })
    console.log(routes, 333)
    return routes;
}