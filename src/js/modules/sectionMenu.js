import * as controllerModal from "./controllerModal.js";
import * as fetchUrl from "./fetchUrl.js";


//function add_section_number_to_data_section_number(event) {
//   const section_upd_params_menu = event.target.closest('.section-control-panel');
//   const number = section_upd_params_menu.querySelector('.items__number').dataset.number;
//   //const section_select_menu = document.querySelector('.select-section-menu');
//   document.querySelector('.section-select-menu').setAttribute('data-section-namber', number);
//}

function create_hidden_input(name, value) {
   const input = document.createElement("input");
   input.setAttribute("name", name);
   input.setAttribute("value", value);
   input.setAttribute("type", 'hidden');
   return input;
}

export function view_select_section_menu(event) {
   if (event.target.closest("[data-name='btn-view-section-select-menu']")) {
      const section_number = event.target.closest("[data-name='btn-view-section-select-menu']").dataset.sectionNumber;
      if (!section_number) {
         alert('Увага! В кнопці відсутній "data-section-number"!! Нова секція додасться в кінець сторінки');
      }
      const hidden_input = create_hidden_input('section_number', section_number);
      const section_select_form = document.querySelector('[data-name="section-select-form"]');
      if (section_select_form) {
         section_select_form.prepend(hidden_input);
      }
      controllerModal.view(document.querySelector('.section-select-menu'));
   }

   if (event.target.closest(".section-select-menu__close")) {
      controllerModal.close(document.querySelector('.section-select-menu'));
      controllerModal.close(document.querySelector('.create-section-menu'));
      controllerModal.close(document.querySelector('[data-name="section-update-files-menu"]'));
   }
}

export function viewCreateSectionMenu(event) {

   if (event.target.closest('[data-button-name="section-create"]')) {
      controllerModal.view(document.querySelector('[data-name="create-section-menu"]'));
   }

   if (event.target.closest('[data-button-name="close-create-section-menu"]')) {
      controllerModal.close(document.querySelector('[data-name="create-section-menu"]'));
   }
}

export function viewBlockParam(event) {
   if (event.target.closest('[data-name="btn-view-block-param"]')) {
      if (event.target.closest('[data-name="param-items"]')) {
         return;
      }
      const blockItems = event.target.closest('[data-name="btn-view-block-param"]');

      controllerModal.view(blockItems.querySelector('[data-name="param-items"]'));
      if (blockItems.querySelector('[data-name="block-item-copy-key"]')) {
         controllerModal.view(blockItems.querySelector('[data-name="block-item-copy-key"]'));
      }
   }
}

export function viewParamUpdForm(event) {
   if (event.target.closest('[data-name="btn-view-param-upd-form"]')) {
      const paramUpdForm = event.target.closest('[data-name="btn-view-param-upd-form"]').nextElementSibling;
      controllerModal.view(paramUpdForm);
   }
}

//export function setFileNameInCreateSectionMenu() {
//   const inputs = document.querySelectorAll('.create-section-menu__upload-block-wrapper .create-section-menu__input');

//   inputs.forEach((input) => {
//      const inputId = input.id;
//      const label = document.querySelector(`.create-section-menu__upload-block-wrapper [for=${inputId}]`);

//      if (input.files && input.files.length > 0) {
//         const fileName = input.files[0].name;
//         label.innerHTML = fileName;
//         return;
//      }

//      label.innerHTML = label.dataset['name'];
//   })
//}

export function viewSectionModerationMenu(event) {
   const buttonView = event.target.closest('[data-button-name="view-section-moderation-menu"]');

   if (buttonView) {
      const section_id = buttonView.dataset.id;
      const url = buttonView.dataset.url;
      const data = { 'section_id': section_id };
      // Вызываем функцию
      fetchUrl.getUrlJSON(url, data)
         .then((data) => {
            //console.log(document.body);
            document.body.innerHTML += data;
            //console.log(data); // JSON data parsed by `response.json()` call
            // console.log(myModal)
            //myModal.innerHTML = data; // JSON data parsed by `response.json()` call
         });
   }
}

export function viewSectionSettingsMenu(event) {
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'view-section-settings-menu'
   ) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('[data-name="section-settings-menu"]'));
   }
   if (event.target.closest('[data-button-name="close-section-settings-menu"]')) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector('[data-name="section-settings-menu"]'));
      controllerModal.close(controlPanel.querySelector(".section-upd-params-menu"));
      //controllerModal.close(controlPanel.querySelector(".create-section-param"));
   }
}

export function viewUpdSectionParamMenu(event) {
   if (
      event.target.closest('button')
      && event.target.closest('button').name == 'btn-view-section-upd-param-menu'
   ) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('.section-upd-params-menu'));
   }

   if (event.target.closest('.section-upd-params-menu__close')) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector('.section-upd-params-menu'));
      controllerModal.close(controlPanel.querySelector('.create-section-param'));
   }
}

//виклик меню налаштування 'Create-section-param'
export function viewSectionCreateParamMenu(event) {
   //console.log(event.target)
   //console.log(event.target.name)

   if (event.target.name == 'btn-view-section-create-param') {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.view(controlPanel.querySelector('.create-section-param'));
   }

   if (event.target.closest('.create-section-param__close')) {
      const controlPanel = event.target.closest(".section-control-panel");
      controllerModal.close(controlPanel.querySelector(".create-section-param"));
   }
}

export function viewSectionType(event) {
   if (event.target.closest('[data-button-name="section-type"]')) {

      const type = event.target.closest('[data-button-name="section-type"]').dataset.type;
      const sectionTiles = document.querySelectorAll(['[data-name="section-tile"]']);
      const typeButtons = document.querySelectorAll('[data-button-name="section-type"]');
      typeButtons.forEach((typeButton) => {
         controllerModal.deActivate(typeButton)
         if (typeButton.dataset.type == type) {
            //console.log(type)
            //console.log(sectionTile)
            controllerModal.activate(typeButton);
         }
      })
      sectionTiles.forEach((sectionTile) => {
         controllerModal.close(sectionTile)
         controllerModal.deActivate(sectionTile)
         if (sectionTile.dataset.type == type) {
            //console.log(type)
            //console.log(sectionTile)
            controllerModal.activate(sectionTile);
         }
      })
   }
}