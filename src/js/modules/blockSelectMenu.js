import * as controllerModal from "./controllerModal.js";



//Виклик вікна настройки меню "Block"
export function viewblockSelectMenu(event) {
   if (event.target.closest('[name="btn-view-block-select-menu"]')) {
      controllerModal.view(document.querySelector('[data-name="block-select-menu"]'));
   }

   if (event.target.closest('[name="block-select-menu__close"]')) {
      event.target.closest('[data-name="block-select-menu"]').classList.remove('_view');
   }
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

