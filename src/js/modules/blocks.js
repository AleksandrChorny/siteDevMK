import * as controllerModal from "./controllerModal.js";

export function view_block_update_param_menu(event) {
   if (event.target.name == 'btn-view-block-upd-param-menu') {
      const sectionUpdMenuBlockItems = event.target.closest(".section-settings-menu__block-items");
      const block_update_params_menu = sectionUpdMenuBlockItems.querySelector('.block-upd-params-menu');
      const clone = block_update_params_menu.cloneNode(true);
      document.body.append(clone);
      controllerModal.view(clone);
   }
   if (event.target.closest(".block-upd-params-menu__close")) {
      event.target.closest(".block-upd-params-menu").remove();
   }
}

export function view_block_createParamMenu(event) {
   if (event.target.name == 'btn-view-block-create-param') {
      const block_upd_params_menu = event.target.closest(".block-upd-params-menu");
      const block_create_param_menu = block_upd_params_menu.querySelector('.block-create-param-menu')
      document.body.append(block_create_param_menu)
      controllerModal.view(block_create_param_menu);
   }
   //console.log(event.target.name);
   if (event.target.name == 'btn-close-block-create-param') {
      event.target.closest(".block-create-param-menu").remove();
   }
}