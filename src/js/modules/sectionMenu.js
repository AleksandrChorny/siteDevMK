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
      controllerModal.close(document.querySelector(".update-section-menu"));
   }
}

export function viewCreateSectionMenu(event) {

   if (event.target.closest(".select-section-menu__tile-add-btn")) {
      event.preventDefault();
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

export function addSectionNumberToDataSectionNamber(event) {
   if (event.target.closest('.button-section-select')) {
      const section_upd_params_menu = event.target.closest('.section-control-panel');
      const number = section_upd_params_menu.querySelector('.items__number').dataset.number;
      //const section_select_menu = document.querySelector('.select-section-menu');
      document.querySelector('.select-section-menu').setAttribute('data-section-namber', number);
   }
}

export function viewUpdSectionMenu(event) {
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'view-section-upd-menu'
   ) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('.section-upd-menu'));
   }
   if (event.target.closest(".section-upd-menu__close")) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector(".section-upd-menu"));
      controllerModal.close(controlPanel.querySelector(".section-upd-params-menu"));
      //controllerModal.close(controlPanel.querySelector(".create-section-param"));
   }
}