import * as controllerModal from "./controllerModal.js";


//Виклик вікна вибору або додавання секції
export function viewTeamplateSelectMenu(event) {
   if (event.target.closest('[name="btn-view-teamplate-select-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="teamplate_selectMenu"]'));
   }

   if (event.target.closest('[data-name="btn-close-teamplate-select-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="teamplate_selectMenu"]'));
      controllerModal.close(document.querySelector('[data-name="teamplate-create-menu"]'));
   }
}

export function viewTeamplateCreateMenu(event) {

   if (event.target.closest('[data-name="btn-view-teamplate-create-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="teamplate-create-menu"]'));
   }

   if (event.target.closest('[data-name="btn-close-teamplate-create-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="teamplate-create-menu"]'));
   }
}

//export function viewCreateTeamplateMenu(event) {
//   if (event.target.closest('.select-teamplate-menu__tile-add-btn')) {
//      controllerModal.view(document.querySelector('.create-teamplate-menu'));
//   }

//   if (event.target.closest(".create-teamplate-menu__close")) {
//      controllerModal.close(document.querySelector(".create-teamplate-menu"));
//   }
//}