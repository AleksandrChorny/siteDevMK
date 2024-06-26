import * as controllerModal from "./controllerModal.js";

export function view(event) {
   if (event.target.closest('[data-action="view"]')) {
      if (event.target.closest('form')) {
         return;
      }

      if (event.target.closest('[data-action="not view"]')) {
         return;
      }

      if (event.target.closest('[data-name="block-item-copy-key"]')) {
         return;
      }

      controllerModal.view(event.target.closest('[data-action="view"]'));
   }
}