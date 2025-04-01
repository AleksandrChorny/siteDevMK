import * as controllerModal from "./controllerModal.js";
//import * as blockModerationMenu from "./blockModerationMenu.js";

export function addClasses(event) {
   const MODERATION_MENU = document.querySelector('[data-name="block-moderation-menu"]');
   if (MODERATION_MENU) {
      const VIEW_ACTIVE = MODERATION_MENU.querySelector('[data-name="view-active"]');
      const VIEW_NEW = MODERATION_MENU.querySelector('[data-name="view-new"]');
      const button = MODERATION_MENU.querySelector('[data-button="view"]');

      if (event.target.closest('[data-name="view-new"]')) {
         button.classList.remove('_diplay-none');
         if (!VIEW_NEW.classList.contains('_max-height')) {
            VIEW_ACTIVE.classList.add('_min-height');
            VIEW_NEW.classList.add('_max-height');
         }
      }
      if (event.target.closest('[data-name="view-active"]')) {
         if (VIEW_ACTIVE.classList.contains('_min-height')) {
            VIEW_ACTIVE.classList.remove('_min-height');
            VIEW_NEW.classList.remove('_max-height');
         }
      }
      // console.log(TEXTAREA)
   }
}



//Виклик вікна настройки меню "Block"
export function closeBlockSelectMenu(event) {
   //console.log(event.target);
   //const menu = document.querySelector('[data-name="block-select-menu"]');
   if (event.target.closest('[name="block-select-menu__close"]')) {
      event.target.closest('[data-name="block-select-menu"]').classList.remove('_view');
   }
}

//Виклик вікна настройки меню "Block"
export function viewBlockSelectMenu(section_id) {
   const menu = document.querySelector('[data-name="block-select-menu"]');
   const inputSectionId = menu.querySelector('form[name="block-select-menu-form"] input[type="hidden"][name="section_id"]');
   inputSectionId.value = section_id;
   menu.classList.add('_view');
   //closeBlockSelectMenu(event)
}



export function viewBlockType(event) {
   if (event.target.closest('[data-button-name="block-type"]')) {

      const type = event.target.closest('[data-button-name="block-type"]').dataset.type;
      const blockTiles = document.querySelectorAll(['[data-name="block-tile"]']);
      const typeButtons = document.querySelectorAll('[data-button-name="block-type"]');
      typeButtons.forEach((typeButton) => {
         controllerModal.deActivate(typeButton)
         if (typeButton.dataset.type == type) {
            //console.log(type)
            //console.log(blockTile)
            controllerModal.activate(typeButton);
         }
      })
      blockTiles.forEach((blockTile) => {
         controllerModal.close(blockTile)
         controllerModal.deActivate(blockTile)
         if (blockTile.dataset.type == type) {
            //console.log(type)
            //console.log(blockTile)
            controllerModal.activate(blockTile);
         }
      })
   }
}

//export function viewBlockModerationMenu(event) {
//   const buttonView = event.target.closest('[data-button-name="view-block-moderation-menu"]');
//   if (buttonView) {
//      const block_id = buttonView.dataset.id
//      blockModerationMenu.viewBlockModerationMenu(block_id);
//   }
//}

