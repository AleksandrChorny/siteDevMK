import * as controllerModal from "./controllerModal.js";

export function viewParamCreateForm(event) {

   if (event.target.closest('[data-button-name="param-create-form"]')) {
      if (event.target.closest('[data-button-name="param-create-form"]').parentElement.classList.contains("_view")) {
         return;
      }

      event.preventDefault();

      if (event.target.closest('[data-button-name="param-create-form"]').parentElement.dataset.name == 'param-create-form') {
         controllerModal.view(event.target.closest('[data-button-name="param-create-form"]').parentElement);
      }
   }
}

export function activeSettingsGroup(event) {
   const groupsOfParams = event.target.closest('[data-name="groups-of-params"]')
   const groupsOfBlocks = event.target.closest('[data-name="groups-of-blocks"]')

   if (groupsOfParams) {
      groupsOfParams.classList.remove('_pacive');
      groupsOfParams.classList.add('_active');
      groupsOfParams.nextElementSibling.classList.remove('_active')
      groupsOfParams.nextElementSibling.classList.add('_pacive')
   }

   if (groupsOfBlocks) {
      groupsOfBlocks.classList.remove('_pacive');
      groupsOfBlocks.classList.add('_active');
      groupsOfBlocks.previousElementSibling.classList.remove('_active')
      groupsOfBlocks.previousElementSibling.classList.add('_pacive')
   }
}

export function viewParamUpdForm(event) {
   if (event.target.closest('[name="param-upd-form"')) {
      return
   }
   if (event.target.closest('[data-name="param-panel"]')) {
      controllerModal.view(event.target.closest('[data-name="param-panel"]'));
   }
}