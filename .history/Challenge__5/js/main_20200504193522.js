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


const slider = document.querySelector(".testimonial__box");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");
const backgrounds = document.querySelectorAll('.bg');
const options = document.querySelectorAll('.option');

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

function update() {
    slider.style.transform = "translateX(" + (-size * index) + "px)";

    backgrounds.forEach(img => img.classList.remove('show'));
    backgrounds[op_index].classList.add('show');

    options.forEach(option => option.classList.remove('colored'));
    options[op_index].classList.add('colored');
}

function slide() {
    slider.style.transition = "transform .5s ease-in-out";
    update();
}

function btnCheck() {
    if (this.id === "prev") {
        index--;
        if (op_index === 0) {
            op_index = 4;
        } else {
            op_index--;
        }
    } else {
        index++;
        if (op_index === 4) {
            op_index = 0;
        } else {
            op_index++;
        }
    }

    slide();
}

function optionFunc() {
    let i = Number(this.getAttribute('op-index'));
    op_index = i;
    index = i + 1;

    slide();
}



slider.addEventListener('transitionend', () => {
    if (slides[index].id === "first") {
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = "translateX(" + (-size * index) + "px)";
    } else if (slides[index].id === "last") {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = "translateX(" + (-size * index) + "px)";
    }
})

btns.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(option => option.addEventListener('click', optionFunc));