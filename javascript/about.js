const gitNav        = document.querySelector('.gitNav');
const email         = document.querySelector('.email');
const topnavName    = document.querySelector('.topnavName');

const emailC        = document.querySelector('.emailC');
const gitNavC        = document.querySelector('.gitNavC');
const phone         = document.querySelector('.phone');
const linkedin      = document.querySelector('.linkedin');

const contact       = document.querySelector('.contact');

emailC.addEventListener('click',             () => contact.textContent = 'sasdaniel9@gmail.com');
gitNavC.addEventListener('click',            () => location.href = 'https://github.com/ddmihai');
phone.addEventListener('click',              () => contact.textContent = '07887637239');
// linkedin.addEventListener('click',        () => to be added in the feature);
email.addEventListener('click',              () => topnavName.textContent = 'sasdaniel9@gmail.com');



const navtoGit      = () => location.href = 'https://github.com/ddmihai';
gitNav.addEventListener('click',            navtoGit);
gitNavC.addEventListener('click',           navtoGit);
