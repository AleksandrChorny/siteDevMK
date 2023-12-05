//Подключение файлов js из папки 'modules'
import * as header from "./modules/header.js";
import * as cover from "./modules/cover.js";
import * as nav from "./modules/navigation.js";
import * as welcomeText from "./modules/welcomeText.js";
import * as login from "./modules/login.js";


//flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

login.viewLoginForm();
cover.viewText();
welcomeText.viewText();
nav.viewNavigation();
nav.viewNavigateItems();
nav.viewContacts();
header.searchPanel();


//document.addEventListener('click', logo);

//function logo() {
//   if (event.target.closest('.header__logo')) {
//      event.preventDefault();
//      console.log('logo')
//   }
//}

//* ADMIN js
const setupBTNs = document.querySelectorAll('.setup-bar button');

document.addEventListener('click', (event) => {
   setupBTNs.forEach(setupBTN => {
      if (event.target == setupBTN) {
         const name = event.target.name;
         const form = document.querySelector(`.setup-form[name="${name}"]`);
         form.classList.toggle('_active');
      }
   });
});