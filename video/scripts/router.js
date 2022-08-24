class Router {
    use(routes) {
        console.log({ routes });
        resolveRoute();
        window.addEventListener("hashchange", () => {
            resolveRoute();
        });

        function getPath() {
            const path = location.hash.slice(1);
            if (path === '') {
                return '/';
            }
            else {
                return path;
            }
        }

        function resolveRoute() {

            const handler = routes[getPath()];
            handler?.();
        }
    }
    start() {

    }
}