// PORTFOLIO SLIDER START

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

            newImg.onload = function () {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2);

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + (calcImgToEdge - 17) + "px;";


                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }


        }
    });
}


function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenImg + 1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else if (changeDir === 0) {
        calcNewImg = getLatestOpenImg - 1;
        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/project-" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenImg = calcNewImg;

    newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2);

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + (calcImgToEdge - 17) + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }

}

// PORTFOLIO SLIDER END


// review slider


class Slider {
    duration = 0;
    currentSlide = 0;
    slides = document.getElementsByClassName("testimonial__box");
    constructor() {
        this.initSlide();
    }

    initSlide() {
        var i;
        for (i = 0; i < this.slides.length; i++) {
            this.currentSlide[i].style.display = "none";
        }
        this.currentSlide++;
        if (this.currentSlide > this.slides.length) {
            this.currentSlide = 1
        }
        this.slides[this.currentSlide - 1].style.display = "block";
        setTimeout(this.initSlide, 3000);
    }








    // let index = 0;
    // show();

    // function show() {
    //     let i;
    //     let slides = document.querySelectorAll(".testimonial__box");
    //     for (i = 0; slides.length; i++) {
    //         slides[i].style.cssText = "display: none;";
    //     }
    //     index = index + 1;
    //     if (index > slides.length) {
    //         index = 1;
    //     }
    //     slides[index - 1].style.display = " block";
    //     setTimeout(show, 1500);
    // }