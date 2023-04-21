//Подключение файлов js из папки 'modules'
import * as cover from "./modules/cover.js";
import * as nav from "./modules/navigation.js";

//flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

cover.viewText();
nav.viewNavigation();