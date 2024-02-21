import * as controllerModal from "./controllerModal.js";


//Виклик вікна вибору або додавання секції
export function viewSelectTeamplateMenu(event) {
   console.log('knok');

   if (event.target.closest('.new-page-btn')
      || event.target.closest(".page-settings-panel__btn")
      && event.target.closest(".page-settings-panel__btn").name == 'create_new_page'
   ) {
      console.log('knok');
      controllerModal.view(document.querySelector('.select-teamplate-menu'));
   }

   if (event.target.closest(".select-teamplate-menu__close")) {
      controllerModal.close(document.querySelector('.select-teamplate-menu'));
      controllerModal.close(document.querySelector(".create-teamplate-menu"))
   }
}

export function viewCreateTeamplateMenu(event) {
   if (event.target.closest('.select-teamplate-menu__tile-add-btn')) {
      controllerModal.view(document.querySelector('.create-teamplate-menu'));
   }

   if (event.target.closest(".create-teamplate-menu__close")) {
      controllerModal.close(document.querySelector(".create-teamplate-menu"));
   }
}