import * as controllerModal from "./controllerModal.js";
import * as blockSelectMenu from "./blockSelectMenu.js";

export function viewBlockSelectMenu(event) {
   if (event.target.closest('[name="btn-view-block-select-menu"]')) {
      const sectionId = event.target.closest('[name="btn-view-block-select-menu"]').dataset.sectionId;
      blockSelectMenu.viewBlockSelectMenu(sectionId)
   }
}
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
//Розгортання блоку налаштувань в модерейшн меню
export function activeSettingsGroup(event) {
   //Перевіряємо чи був click on section-moderation-menu
   if (event.target.closest('[data-name="section-moderation-menu"]')) {
      //Збираю потрібні елементи
      const moderationMenu = event.target.closest('[data-name="section-moderation-menu"]');
      const groupsOfParams = event.target.closest('[data-name="groups-of-params"]');
      const groupsOfBlocks = event.target.closest('[data-name="groups-of-blocks"]');
      //Функція згортання всіх елементів та розгортання того по якому клікнули
      function actionParamItems() {
         //Отримую список всіх параметрів
         const paramItems = moderationMenu.querySelectorAll('[data-name="param-item"]');
         //Перевіряю чи є параметри в списку
         if (paramItems.length > 0) {
            //Запускаю цикл прозодження по параметру
            paramItems.forEach(element => {
               //встановлюю або видаляю елементам потрібні класи
               element.classList.remove('_view')
               element.querySelector('[data-name="copy-key"]').classList.add('_view')
               element.querySelector('[data-name="btn-block"]').classList.remove('_view')
            })
         }
         if (event.target.closest('[data-name="param-item"]')) {
            const paramItem = event.target.closest('[data-name="param-item"]');
            const copyKey = paramItem.querySelector('[data-name="copy-key"]');
            const buttonBlock = paramItem.querySelector('[data-name="btn-block"]');
            //встановлюю класи вибраному параметру
            controllerModal.view(paramItem);
            copyKey.classList.remove('_view');
            buttonBlock.classList.add('_view');
         }
      }
      //Розгортаю панель з параметрами
      if (groupsOfParams) {
         //розгортаю параметри
         console.log(groupsOfParams);
         groupsOfParams.classList.remove('_pacive');
         groupsOfParams.classList.add('_active');
         //Згортаю блоки
         if (groupsOfParams.nextElementSibling) {
            groupsOfParams.nextElementSibling.classList.remove('_active');
            groupsOfParams.nextElementSibling.classList.add('_pacive');
         }

         //Розготраю потрібний
         actionParamItems();
      }
      //Розгортаю панель з блоками
      if (groupsOfBlocks) {
         //розгортаю блоки
         groupsOfBlocks.classList.remove('_pacive');
         groupsOfBlocks.classList.add('_active');
         //згортаю параметри
         if (groupsOfBlocks.previousElementSibling) {
            groupsOfBlocks.previousElementSibling.classList.remove('_active');
            groupsOfBlocks.previousElementSibling.classList.add('_pacive');
         }

         //Розгортаю потрібний
         actionParamItems()
      }
   }

   if (event.target.closest('[data-name="groups-of-block-params"]')) {
      const groupOfBlockParam = event.target.closest('[data-name="groups-of-block-params"]');
      const blockParamItems = groupOfBlockParam.querySelectorAll('[data-name="block-param-item"]');

      if (blockParamItems.length > 0) {
         blockParamItems.forEach(element => {
            element.classList.remove('_view')
            element.querySelector('[data-name="copy-key"]').classList.add('_view')
            element.querySelector('[data-name="btn-block"]').classList.remove('_view')
         })
      }
      if (event.target.closest('[data-name="block-param-item"]')) {
         const paramItem = event.target.closest('[data-name="block-param-item"]');
         const copyKey = paramItem.querySelector('[data-name="copy-key"]');
         const buttonBlock = paramItem.querySelector('[data-name="btn-block"]');
         //встановлюю класи вибраному параметру
         paramItem.classList.add('_view');
         copyKey.classList.remove('_view');
         buttonBlock.classList.add('_view');
      }
   }
}

export function view_section_update_files_menu(event) {
   if (event.target.name == 'view-section-upd-param-menu') {
      const section_id = event.target.dataset.sectionId;
      const section_update_files_menu = document.querySelector('[data-name="section-update-files-menu"]');
      section_update_files_menu.querySelector('input[name="section_id"]').value = section_id;
      console.log(section_update_files_menu);
      controllerModal.view(section_update_files_menu);
   }

   if (event.target.closest('.section-update-files-menu__close')) {
      controllerModal.close(document.querySelector('[data-name="section-update-files-menu"]'));
   }
}

export function close(event) {
   const buttonClose = event.target.closest('[data-name="section_moderation_menu__close"]');

   if (buttonClose) {
      controllerModal.close(event.target.closest('[data-name="section-moderation-menu"]'));
   }
}