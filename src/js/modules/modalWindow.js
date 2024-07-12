import * as controllerModal from "./controllerModal.js";


export function close(event) {
   if (event.target.closest('[data-button-name="close-modal_window"]')) {
      controllerModal.close(event.target.closest('[data-button-name="close-modal_window"]').parentElement)
   }

   if (event.target.closest('[data-button-name="ok-modal_window"]')) {
      controllerModal.close(event.target.closest('[data-button-name="ok-modal_window"]').parentElement)
   }
}