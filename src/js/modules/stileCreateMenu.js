import * as controllerModal from "./controllerModal.js";

export function viewStileCreateMenu(event) {
   if (event.target.closest('[data-name="btn-view-stile-create-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="stile-create-menu"]'));
   }
   if (event.target.closest('[data-name="btn-close-stile-create-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="stile-create-menu"]'));
   }
}