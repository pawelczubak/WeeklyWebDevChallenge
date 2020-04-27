const navSlide = () => {
    const burger = document.querySelector(''.nav-button');
    const nav = document.querySelector(''.nav-list');

burger.addEventListener('click', () = > {
    nav.classList.toggle('nav-list--active');
});
}