//classList add _view to stile create menu
export function viewStileCreateMenu(event) {
   if (event.target.closest('[data-name="btn-view-block-create-menu"]')) {
      const STYLE_CREATE_MENU = document.querySelector('[data-name="stile-create-menu"]');
      if (STYLE_CREATE_MENU) {
         STYLE_CREATE_MENU.classList.add('_view');
      } else {
         alert('style create menu not found');
      }
   }
}