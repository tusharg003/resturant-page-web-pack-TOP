import { initialPageLoad } from './pageLoad.js';
import { menubar } from './menu.js'
import { contact } from './contact.js'
initialPageLoad();


//Tab switching Module
let tabSwitchingModule = function () {

    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', initialPageLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menubar);
    
    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);


};
tabSwitchingModule();
console.log('hi i amsdfasdf form ./src/index.js');
