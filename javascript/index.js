const topnavName    = document.querySelector('.topnavName');
const gitNav        = document.querySelector('.gitNav');
const email         = document.querySelector('.email');
const gitNavigation = document.querySelector('.gitNavigation');

let navtoGit = () => {
    location.href = 'https://github.com/ddmihai';
}

/* 
    Navigation buttons section
*/
gitNav.addEventListener('click', navtoGit);
gitNavigation.addEventListener('click', navtoGit);

email.addEventListener('click', () => {
    topnavName.textContent = 'sasdaniel9@gmail.com';
})