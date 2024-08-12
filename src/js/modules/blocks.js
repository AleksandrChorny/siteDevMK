import * as controllerModal from "./controllerModal.js";
import * as fetchUrl from "./fetchUrl.js";

export function viewBlockModerationMenu(event) {
   if (event.target.closest("[data-name='btn-view-block-moderation-menu']")) {
      controllerModal.view(document.querySelector('[data-name="view-block_moderation_menu"]'));
   }

   if (event.target.closest('[data-name="block_moderation_menu__close"]')) {
      controllerModal.close(document.querySelector('[data-name="view-block_moderation_menu"]'));
   }
}

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

export function viewBlockCreateMenu(event) {
   const buttonView = event.target.closest('[data-button-name="block-create"]');
   const buttonClose = event.target.closest('[data-button-name="close-block-create-menu"]');

   if (buttonView) {
      const url = buttonView.dataset.url;
      //console.log(url);
      const data = { 'section_id': 'section_id' };
      // Вызываем функцию
      //fetchUrl.htmlIncludeForDeveping(url);
      fetchUrl.getUrlJSON(url)
         .then((data) => {
            document.body.innerHTML += data;
         });
   }

   if (buttonClose) {
      if (event.target.closest('[data-name="block-create-menu"]')) {
         event.target.closest('[data-name="block-create-menu"]').remove();
         return;
      }
   }
}
export function viewblockSettingsMenu(event) {
   if (event.target.closest('[name="btn-view-block-upd-files-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="view-block-settings-menu"]'));
   }

   if (event.target.closest('[data-name="block-settings-menu__close"]')) {
      controllerModal.close(document.querySelector('[data-name="view-block-settings-menu"]'));
   }
}

export function viewblockUpdFilesMenu(event) {
   if (event.target.closest('[name="view-block-upd-param-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="block-update-files-menu"]'));
   }

   if (event.target.closest('[name="btn-close-block-upd-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="block-update-files-menu"]'));
   }
}


