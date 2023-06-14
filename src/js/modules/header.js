import * as search from "./search.js";

//run search panel and search anything
export function searchPanel() {
   document.addEventListener('click', openSearchPanel);
   document.addEventListener('input', viewSearchRezult);

   //run search panel
   function openSearchPanel(event) {
      if (event.target.closest('.search__input')) {
         search.run()
      }
   }
   //search anything
   function viewSearchRezult(event) {
      if (event.target.closest('.search__input')) {
         event.preventDefault();
         if (event.target.value.length > 2) {
            search.mySearch(event.target.value);
         }
      }
   }
}