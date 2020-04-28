const navSlide = () => {
    const burger = document.querySelector('.nav-button');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list__item');



    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-list--active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }

        });
    });


}

navSlide();





/*

let fallowButton = () => {
    let btnFallow = document.querySelector('.fallow-user__button');
    let result = document.querySelector('.fallow-user__fallow');

    btnFallow.addEventListener('click', () => {
        result.classList.toggle('fallow-user__fallow--active');
        btnFallow.classList.toggle('fallow-user__button--active');
    });
}
fallowButton();



let fallowButtonTwitter = () => {
    let twitterWidget = document.querySelector("#twitter");

    let btnFallow = document.querySelector(".fallow-user__button");
    let result = document.querySelector(".fallow-user__fallow");

    btnFallow.addEventListener('click', () => {
        result.classList.toggle('.fallow-user__fallow--active');
        btnFallow.classList.toggle('.fallow-user__button--active');
    });

}

fallowButtonTwitter();

console.log(result);
*/


let fallowButton = () => {
    let twitterWidget = document.querySelector("#twitter");
    let btnFallow = twitterWidget.querySelector('.fallow-user__button');
    let result = twitterWidget.querySelector('.fallow-user__fallow');

    btnFallow.addEventListener('click', () => {
        result.classList.toggle('fallow-user__fallow--active');
        btnFallow.classList.toggle('fallow-user__button--active');
    });
}
fallowButton();