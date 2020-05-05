// PORTFOLIO GALLERY START

let galleryImages = document.querySelectorAll(".portfolio__project");
let getLatestOpenImg;
let windowWidth = window.innerWidth;


if (galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.onclick = function () {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
}




// GOOGLE MAPS
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 50.208415,
        lng: -5.490893

    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
// review slider