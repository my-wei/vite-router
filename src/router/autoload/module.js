export default function  autoloadModuleRoutes() {
    const modules= import.meta.globEager('../module/**/*.js');
    const routes=[];
    Object.keys(modules).forEach(key=>{
        routes.push(modules[key].default);
    })
   return routes ;
  }