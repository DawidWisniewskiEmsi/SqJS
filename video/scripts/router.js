class Router {
    use(routes) {
        this.routes = routes;
    }
    
    #getPath() {
        const path = location.hash.slice(1);
        if (path === '') {
            return '/';
        }
        else {
            return path;
        }
    }

    #resolveRoute() 
    {
        const handler = this.routes[this.#getPath()];
        handler?.();
    }
    
    start() {
        this.#resolveRoute();
        window.addEventListener("hashchange", this.#resolveRoute);
    }
}