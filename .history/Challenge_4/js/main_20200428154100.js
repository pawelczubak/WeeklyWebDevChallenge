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





// Facebook widget Animation
let fallowButtonFb = () => {
    let twitterWidget = document.querySelector("#facebook");
    let btnFallow = twitterWidget.querySelector('.fallow-user__button');
    let result = twitterWidget.querySelector('.fallow-user__fallow');

    btnFallow.addEventListener('click', () => {
        result.classList.toggle('fallow-user__fallow--active');
        btnFallow.classList.toggle('fallow-user__button--active');
    });
}
fallowButtonFb();

// Twitter widget Animation

let fallowButtonTwitter = () => {
    let twitterWidget = document.querySelector("#twitter");
    let btnFallow = twitterWidget.querySelector('.fallow-user__button');
    let result = twitterWidget.querySelector('.fallow-user__fallow');

    btnFallow.addEventListener('click', () => {
        result.classList.toggle('fallow-user__fallow--active');
        btnFallow.classList.toggle('fallow-user__button--active');
    });
}
fallowButtonTwitter();