import * as search from "./search.js";
import * as body from "./body.js";

//run search panel and search anything
export function searchPanel() {
   document.addEventListener('click', openSearchPanel);
   document.addEventListener('input', viewSearchRezult);
   document.addEventListener('click', closeSearchPanel);

   //run search panel
   function openSearchPanel(event) {
      if (event.target.closest('.search__input')) {
         document.querySelector('.search__results').classList.add('_active');
         document.querySelector('.search__close').classList.add('_active');
         //search.run();
         body.noneScrole();
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
   //on search remove _action and add _passive tu close search
   function closeSearchPanel(event) {
      if (event.target.closest('.search__close')) {
         document.querySelector('.search__results').classList.remove('_active');
         document.querySelector('.search__close').classList.remove('_active');
         body.scrole();
      }
   }
}