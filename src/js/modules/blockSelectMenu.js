import * as controllerModal from "./controllerModal.js";
import * as blockModerationMenu from "./blockModerationMenu.js";

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

export function viewBlockModerationMenu(event) {
   const buttonView = event.target.closest('[data-button-name="view-block-moderation-menu"]');
   if (buttonView) {
      const block_id = buttonView.dataset.id
      blockModerationMenu.viewBlockModerationMenu(block_id);
   }
}

