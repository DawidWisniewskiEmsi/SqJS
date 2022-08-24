function main() {

    const routes = {
        '/': () => {
            fetchVideos().then(function (videos) {
                renderVideos(videos);
            });
        },
        '/registration': () => console.log('registration'),
        '/login': () => console.log('login'),
        '/logout': () => console.log('logout'),
    }
    const router = new Router();
    router.use(routes);
    router.start();
}

window.addEventListener("DOMContentLoaded", main);