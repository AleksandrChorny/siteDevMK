import * as controllerModal from "./controllerModal.js";


//Виклик вікна вибору або додавання секції
export function viewSelectSectionMenu(event) {
   if (event.target.closest(".page-control-panel__btn")
      && event.target.closest(".page-control-panel__btn").name == 'select_section'
      || event.target.closest('.AddSection__btn')
      || event.target.closest(".button-section-select")
   ) {
      controllerModal.view(document.querySelector('.select-section-menu'));
   }

   if (event.target.closest(".select-section-menu__close")) {
      controllerModal.close(document.querySelector('.select-section-menu'));
      controllerModal.close(document.querySelector('.create-section-menu'));
   }
}

export function viewCreateSectionMenu(event) {
   if (event.target.closest(".select-section-menu__tile-add-btn")) {
      controllerModal.view(document.querySelector('.create-section-menu'));
   }

   if (event.target.closest(".create-section-menu__close")) {
      controllerModal.close(document.querySelector('.create-section-menu'));
   }
}

export function setFileName() {
   const inputs = document.querySelectorAll('.create-section-menu__upload-block-wrapper .create-section-menu__input');

   inputs.forEach((input) => {
      const inputId = input.id;
      const label = document.querySelector(`.create-section-menu__upload-block-wrapper [for=${inputId}]`);

      if (input.files && input.files.length > 0) {
         const fileName = input.files[0].name;
         label.innerHTML = fileName;
         return;
      }

      label.innerHTML = label.dataset['name'];
   })
}