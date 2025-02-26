import * as sectionCreateMenu from "./sectionCreateMenu.js";
import * as fetchUrl from "./fetchUrl.js";


//classList add _view to stile create menu get section number and create hidden input "section number"
export function viewSectionSelectMenu(nuberOfSection) {
   //fetchUrl.loadContent("selectSectionMenu", { sectionNumber: nuberOfSection });
   fetchUrl.loadContent("selectSectionMenu", { sectionNumber: nuberOfSection });
   fetchUrl.loadContent("modal2");
}

export function close(event) {
   if (event.target.closest('[name="close-section-select-menu"]')) {
      const SECTION_SELECT_MENU = event.target.closest('[data-name="section-select-menu"]');
      if (SECTION_SELECT_MENU) {
         SECTION_SELECT_MENU.classList.remove('_view');
         return;
      }
      alert('cannont close SECTION_SELECT_MENU is epsent on document');
   }
}

export function buttonViewSectionCreateMenu(event) {
   if (event.target.closest('[data-button-name="section-create"]')) {
      sectionCreateMenu.view();
   }
}

function create_hidden_input(name, value) {
   const input = document.createElement("input");
   input.setAttribute("name", name);
   input.setAttribute("value", value);
   input.setAttribute("type", 'hidden');
   return input;
}

export function viewOnload() {
   const VIEW = new URLSearchParams(document.location.search).get("view")
   if (VIEW) {
      const VIEW_IN_ARRAY = VIEW.split('_')
      if (VIEW_IN_ARRAY.includes('selectSectionMenu')) {
         document.querySelector('[data-name="section-select-menu"]').classList.add('_view');
      }
   }
}