const navSlide = () => {
    const burger = document.querySelector('.nav-button');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list__item');
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-list--active');
    });
    //Animate links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
        console.log(index / 7);
    });
}

navSlide();