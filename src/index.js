import nav from './nav';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const contentElement = document.querySelector('.content');
let currentPage = 'home';

nav(contentElement);
homePage(contentElement);

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

const switchTab = (tab) => {
    if(tab === currentPage) return;
    contentElement.removeChild(contentElement.lastChild);
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
    switch(tab) {
        case 'home':
            homePage(contentElement);
            homeButton.classList.add('selected');
            break;
        case 'menu':
            menuPage(contentElement);
            menuButton.classList.add('selected');
            break;
        case 'contact':
            contactPage(contentElement);
            contactButton.classList.add('selected');
            break;
    }
    currentPage = tab;
    removeFadeClass();
}

const removeFadeClass = () => {
    setTimeout( () => {
        document.querySelector('.fade').classList.remove('fade');
    }, 1);
};

homeButton.classList.add('selected');
homeButton.addEventListener('click', () => {
    switchTab('home');
});

menuButton.addEventListener('click', () => {
    switchTab('menu');
});

contactButton.addEventListener('click', () => {
    switchTab('contact');
});

document.addEventListener('DOMContentLoaded', removeFadeClass);