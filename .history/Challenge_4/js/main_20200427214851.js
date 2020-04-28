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


let btnShow = document.querySelector('.test__button');
let result = document.querySelector('.test__h1');

btnShow.addEventListener('click', () => {
    let checkbox = document.querySelector('input[type="checkbox"]:checked');
    result.innerText = checkbox.value;
});