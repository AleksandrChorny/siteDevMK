import * as controllerModal from "./controllerModal.js";

export function viewStileSelectMenu(event) {
   if (event.target.closest('[data-name="list-stile-select-menu"]')) {

      const stileLi = event.target.closest('[data-name="list-stile-select-menu"]')
      const stileBtn = stileLi.querySelector('[data-name="stile-select-menu-btn"]')


      if (stileBtn.classList.contains('_available')) {
         const stileList = document.querySelector('[data-name="list-add"]')
         stileBtn.classList.remove('_available');
         stileBtn.classList.add('_used')
         stileList.append(stileLi);
         return
      }
      if (stileBtn.classList.contains('_used')) {
         const stileList = document.querySelector('[data-name="stile-list-off"]')
         stileBtn.classList.remove('_used');
         stileBtn.classList.add('_available')
         stileList.append(stileLi);
      }
   }

   if (event.target.closest('[data-name="style-call-btn"]')) {
      controllerModal.view(document.querySelector('[data-name="stile-select-menu"]'));
   }
   if (event.target.closest('[data-name="stile-select-menu__close"]')) {
      controllerModal.close(document.querySelector('[data-name="stile-select-menu"]'));
   }
}

export function viewStileCreateMenu(event) {
   if (event.target.closest('[data-name="btn-view-stile-create-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="stile-create-menu"]'));
   }
   if (event.target.closest('[data-name="btn-close-stile-create-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="stile-create-menu"]'));
   }
}

//export function setFileNameInCreateStileMenu() {
//   const inputs = document.querySelectorAll('.stile-create-menu__upload-block-wrapper .stile-create-menu__input');

//   inputs.forEach((input) => {
//      const inputId = input.id;
//      const label = document.querySelector(`.stile-create-menu__upload-block-wrapper [for=${inputId}]`);

//      if (input.files && input.files.length > 0) {
//         const fileName = input.files[0].name;
//         label.innerHTML = fileName;
//         return;
//      }

//      label.innerHTML = label.dataset['name'];
//   })
//}