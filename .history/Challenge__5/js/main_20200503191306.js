let galleryImages = document.querySelectorAll(".portfolio__project");
let getLatestOpenImg;
let windowWidth = windowWidth;


if (galleryImages) {
    galleryImages.forEach(function (image) {
        image.onclick = function () {
            alert("It works");
        }
    });
}