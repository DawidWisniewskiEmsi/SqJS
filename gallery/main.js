//1.  Nasłuchujemy na zadarznie kliknięcia
//2.  Pobrać url do obrazka
//3.  Zmiana Url na docelowy
//4.  Render dużego obrazka

const images = document.querySelectorAll('img');
console.log(images);

const bigPhotoContainer  =   document.querySelector("#bigPhoto");

function renderPhoto(photo){
    bigPhotoContainer?.firstChild?.remove();
    bigPhotoContainer?.append(photo);
}

function handleClickOnImage() {
    console.log(this.src);
    let currentUrl  =   this.src;
    let bigUrl      =   currentUrl.replace('300','900').replace('200','600');
    console.log(bigUrl);
    const photo = document.createElement('img');
    photo.src = bigUrl;
    renderPhoto(photo);
}

images.forEach(image => {
    image.addEventListener('click',handleClickOnImage)
});



