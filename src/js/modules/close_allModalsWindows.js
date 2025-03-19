import * as fetchUrl from "./fetchUrl.js";

export function closeAllModalWidows (event) {
   if (event.target.closest('[data-name="close-modal-window-button"]')) {
      const modal_Window = event.target.closest('[data-name="modal-window"]');
      if (modal_Window) {
         setTimeout(() => {
            modal_Window.remove();
        }, 200);
         return;
      }
   }

}