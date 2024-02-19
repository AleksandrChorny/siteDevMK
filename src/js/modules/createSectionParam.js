import * as controllerModal from "./controllerModal.js";

//виклик меню налаштування 'Create-section-param'
export function viewMenu(event) {
   if (event.target.closest('.add-param__btn')) {
      controllerModal.view(document.querySelector('.create-section-param'));
   }
}

export function closeMenu(event) {
   if (event.target.closest('.create-section-param__close')) {
      controllerModal.close(document.querySelector(".create-section-param"));
   }
}