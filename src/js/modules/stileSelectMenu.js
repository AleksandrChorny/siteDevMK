import * as controllerModal from "./controllerModal.js";

export function viewStileSelectMenu(event) {
   if(event.target.closest('[data-name="list-stile-select-menu"]')){

      const stileLi = event.target.closest('[data-name="list-stile-select-menu"]')
      const stileBtn = stileLi.querySelector('[data-name="stile-select-menu-btn"]')

      
      if ( stileBtn.classList.contains('_available') ) {
         const stileList = document.querySelector('[data-name="list-add"]')
         stileBtn.classList.remove('_available');
         stileBtn.classList.add('_used')
         stileList.append(stileLi);
         return
      }
      if( stileBtn.classList.contains('_used') ){
         const stileList = document.querySelector('[data-name="stile-list-off"]')
         stileBtn.classList.remove('_used');
         stileBtn.classList.add('_available')
         stileList.append(stileLi);
      }
   }

   if(event.target.closest('[data-name="style-call-btn"]')){
      controllerModal.view(document.querySelector('[data-name="stile-select-menu"]'));
   }
   if(event.target.closest('[data-name="stile-select-menu__close"]')){
      controllerModal.close(document.querySelector('[data-name="stile-select-menu"]'));
   }
}