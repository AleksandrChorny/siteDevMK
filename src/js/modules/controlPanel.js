import * as controllerModal from "./controllerModal.js";

export function viewControlPanel(event) {
   if (event.target.closest('.section-control-panel__btn')) {
      //const elem = event.target;
      const parent = event.target.closest(".section-control-panel__btns-wrapper");
      controllerModal.view(parent.querySelector('.management-block'));
      controllerModal.view(parent.querySelector('.section-control-panel__name'));
      //parent.querySelector('.management-block').classList.add('_view');
      //console.log(parent);
   }
}