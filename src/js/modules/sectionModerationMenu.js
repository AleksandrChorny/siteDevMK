import * as controllerModal from "./controllerModal.js";

console.log('dved');

export function viewParamCreateForm(event) {

   if (event.target.closest('[data-button-name="param-create-form"]')) {
      if (event.target.closest('[data-button-name="param-create-form"]').parentElement.classList.contains("_view")) {
         return;
      }

      event.preventDefault();

      if (event.target.closest('[data-button-name="param-create-form"]').parentElement.dataset.name == 'param-create-form') {
         controllerModal.view(event.target.closest('[data-button-name="param-create-form"]').parentElement);
      }
   }
}
