import * as controllerModal from "./controllerModal.js";



//Виклик вікна настройки меню "Block"
export function viewblockSelectMenu(event) {
   if (event.target.closest('[name="btn-view-block-select-menu"]')) {
      controllerModal.view(document.querySelector('[name="block-select-menu"]'));
   }

   if (event.target.closest('[name="block-select-menu__close"]')) {
      controllerModal.close(document.querySelector('[name="block-select-menu"]'));
   }
}

