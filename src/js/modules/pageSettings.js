import * as controllerModal from "./controllerModal.js";


//Виклик вікна вибору або додавання секції
export function viewSelectSectionMenu(event) {
   if (event.target.closest('.page-settings-block__ico-wrapper')) {
      controllerModal.view(document.querySelector('.page-settings-block'));
   }
}
