import * as controllerModal from "./controllerModal.js";

//Виклик вікна настройки меню "Head"
export function viewheadSettingsMenu(event) {
   if (event.target.closest('[data-name="btn-view-head-select-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="head-settings-menu"]'));
   }

   if (event.target.closest('[data-name="head-settings-menu__close"]')) {
      controllerModal.close(document.querySelector('[data-name="head-settings-menu"]'));
      controllerModal.close(document.querySelector('[data-name="head-upd-params-menu"]'));
   }
//Виклик вікна настройки меню "Параметри секції: Head"
   if (event.target.closest('[data-name="btn-view-head-upd-param-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="head-upd-params-menu"]'));
   }
   if (event.target.closest('[data-name="close-head-upd-params-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="head-upd-params-menu"]'));
   }
//Виклик вікна настройки меню "Завантажте файли: Head"
   if (event.target.closest('[data-name="btn-view-head-create-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="head-create-menu"]'));
   }
   if (event.target.closest('[data-name="btn-close-head-create-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="head-create-menu"]'));
   }
}

