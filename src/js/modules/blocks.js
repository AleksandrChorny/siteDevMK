import * as controllerModal from "./controllerModal.js";

export function viewUpdBlockParamMenu(event) {
   if (
      event.target.closest('button')
      && event.target.closest('button').name == 'view-upd-block-param-menu'
   ) {
      const sectionUpdMenuBlockItems = event.target.closest(".section-upd-menu__block-items");
      controllerModal.view(sectionUpdMenuBlockItems.querySelector('.block-upd-params-menu'));
   }
   if (event.target.closest(".section-upd-menu__close")) {
      const sectionUpdMenuBlockItems = event.target.closest(".section-upd-menu__block-items");
      controllerModal.close(sectionUpdMenuBlockItems.querySelector(".block-upd-params-menu"));
   }
}