//Подключение файлов js из папки 'modules'
import * as header from "./modules/header.js";
import * as cover from "./modules/cover.js";
import * as nav from "./modules/navigation.js";
import * as welcomeText from "./modules/welcomeText.js";
import * as login from "./modules/login.js";

//* include admin js
import * as adminJS from "./modules/admin.js";
//* include admin js


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


//TODO: Копіювання в буфер обміну
//const key = document.querySelector('.section-settings-menu__block-copy-key').title;
////console.log(key);
//navigator.clipboard.writeText(key);