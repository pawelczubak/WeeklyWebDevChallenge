let header = document.getElementById("header")
let view1 = document.getElementById("view1");
let view2 = document.getElementById("view2");
let view3 = document.getElementById("view3");
let loader = document.getElementById("loader");
let footer = document.getElementById("footer");


let headerHeight = header.offsetHeight + 25;
let view1Height = view1.offsetHeight + 55;
let view2Height = view2.offsetHeight;
let view3Height = view3.offsetHeight;
let footerHeight = footer.offsetHeight;


view2.style.display = 'none';
view3.style.display = 'none';

window.addEventListener('scroll', function () {

    let scrollBottomHeight = window.scrollY + window.innerHeight;

    // console.log("window scroll:" + window.scrollY);
    // console.log("scroll height:" + scrollBottomHeight);
    // console.log("header height:" + headerHeight);
    // console.log("view1 height:" + view1Height);
    // console.log("view2 haight:" + view2Height);

    // infinite scroll

    if (scrollBottomHeight > view1Height + headerHeight + footerHeight) {
        view2.style.display = 'flex';
    }

    if (scrollBottomHeight > view1Height + headerHeight + view2Height + footerHeight) {
        view3.style.display = 'flex';
        loader.style.display = 'none';
    }


});

//background position


window.addEventListener('scroll', function () {
    let bgBottom = document.getElementById("bgBottom");
    let bgMiddle = document.getElementById("bgMiddle");
    let bottomValue = document.body.clientHeight - bgBottom.offsetHeight + 25;
    let middleValue = document.body.clientHeight / 2;

    bgMiddle.style.top = middleValue + "px";
    bgBottom.style.top = bottomValue + "px";


    // console.log("website haight:" + bottomValue);
});