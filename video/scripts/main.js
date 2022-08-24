/**
 * @typedef Author
 * @property {string} avatarUrl
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef Video
 * @property {Author} author
 * @property {string} description
 * @property {string} id
 * @property {string} thumbUrl
 * @property {string} title
 * @property {string} videoUrl
 */

function fetchVideos() {
    //   console.log("fetchVideos");
    const url = "https://fakes.herokuapp.com/videos";
    return fetch(url)
        .then(function (response) {
            //   console.log("fetchVideos, then", response);
            return response.json();
        })
        .catch(function (error) {
            console.log("fetchVideos, catch", error);
        });
}

/**
 * @param {Video} video 
 */
function template(video) {
    // DOM — Document Object Model
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video");

    const thumb = document.createElement('img');
    thumb.src = video.thumbUrl;
    videoContainer.append(thumb);

    const title = document.createElement('h3');
    title.textContent = video.title;
    videoContainer.append(title);

    const description = document.createElement('p');
    description.textContent = video.description;
    videoContainer.append(description);

    return videoContainer;
}

function renderVideos(videos) {
    const main = document.querySelector("main");
    videos.forEach(function (video) {
        main?.append(template(video));
    });
}

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