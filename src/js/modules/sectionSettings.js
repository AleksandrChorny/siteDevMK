import * as controllerModal from "./controllerModal.js";


//Виклик вікна вибору або додавання секції
export function viewSelectSectionMenu(event) {
   if (event.target.closest(".page-settings-panel__btn")
      && event.target.closest(".page-settings-panel__btn").name == 'select_section'
      || event.target.closest('.AddSection__btn')
      || event.target.closest(".button-section-select")
   ) {
      controllerModal.view(document.querySelector('.select-section-menu'));
   }

   if (event.target.closest(".select-section-menu__close")) {
      controllerModal.close(document.querySelector('.select-section-menu'));
   }
}