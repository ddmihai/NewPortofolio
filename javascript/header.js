const menu      = document.querySelector('.menu');
const links     = document.querySelector('.nav-links');
const navigatoAbout = document.querySelector('.navigatoAbout');
const navBottomContact = document.querySelector('.navBottomContact');


navBottomContact.addEventListener('click', () => {
    window.scrollTo(0,document.body.scrollHeight);
})

navigatoAbout.addEventListener('click', () => {
    location.href = '../pages/About.html';
})

menu.addEventListener('click', () => {
    links.classList.toggle('display');
});