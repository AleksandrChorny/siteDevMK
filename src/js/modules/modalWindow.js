export function close(event) {
   const BUTTON = event.target.closest('[data-button-name="close-modal_window"]')
   if (BUTTON) {
      const MENU = event.target.closest('[data-name="modal_window"]');
      if (MENU) {
         MENU.classList.remove('_view');
      }
   }
}