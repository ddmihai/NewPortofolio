const topnavName    = document.querySelector('.topnavName');
const gitNav        = document.querySelector('.gitNav');
const email         = document.querySelector('.email');
const gitNavigation = document.querySelector('.gitNavigation');
const restaurant    = document.querySelector('.ohmyfood');
const reservia      = document.querySelector('.reservia-btn');
const fitnessPal    = document.querySelector('.fitnessPal');

const footerEmail   = document.querySelector('.footerEmail');
const footerContact = document.querySelector('.footerContact');
const footerCall    = document.querySelector('.footerCall');
const footerGit     = document.querySelector('.footerGitNav');

let navtoGit = () => {
    location.href = 'https://github.com/ddmihai';
}

/* 
    Navigation buttons section
*/
gitNav.addEventListener('click',            navtoGit);
gitNavigation.addEventListener('click',     navtoGit);
email.addEventListener('click',             () => topnavName.textContent = 'sasdaniel9@gmail.com');
footerEmail.addEventListener('click',       () => footerContact.textContent = 'Get in touch - sasdaniel9@gmail.com');
footerCall.addEventListener('click',        () => footerContact.textContent = 'Get in touch - 07887637239');

restaurant.addEventListener('click',        () => location.href = 'https://ddmihai.github.io/restaurant/');
reservia.addEventListener('click',          () => location.href = 'https://ddmihai.github.io/reservia.io/');
fitnessPal.addEventListener('click',        () => location.href = 'https://flamboyant-stonebraker-c1c438.netlify.app/#/');
footerGit.addEventListener('click',         () => location.href = 'https://github.com/ddmihai');