const menu      = document.querySelector('.menu');
const links     = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    links.classList.toggle('display');
});