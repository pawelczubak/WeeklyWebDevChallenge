let galleryImages = document.querySelectorAll(".portfolio__project");
let getLatestOpenImg;
let windowWidth = window.innerWidth;


if (galleryImages) {
    galleryImages.forEach(function (image) {
        image.onclick = function () {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/");
            let newImgUrl = getImgUrlPos[1].replace();
            alert(getImgUrlPos[1]);
        }
    });
}