import * as controllerModal from "./controllerModal.js";

export function viewUpdSectionParamMenu(event) {
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'view-upd-parm-menu'
   ) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('.section-upd-params-menu'));
   }
   if (event.target.closest(".section-upd-params-menu__close")) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector(".section-upd-params-menu"));
      controllerModal.close(controlPanel.querySelector(".create-section-param"));
   }
}

//виклик меню налаштування 'Create-section-param'
export function viewCreateSectionParamMenu(event) {
   if (event.target.closest('.add-param__btn')) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('.create-section-param'));
   }

   if (event.target.closest('.create-section-param__close')) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector(".create-section-param"));
   }
}