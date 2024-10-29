import * as sectionSelectMenu from "./sectionSelectMenu.js";

export function viewSectionSelectMenu(event) {
   if (event.target.closest('[data-name="btn-view-section-select-menu"]')) {
      const SECTIO_NUMBER = event.target.closest('[data-name="btn-view-section-select-menu"]').dataset.sectionNumber;
      sectionSelectMenu.viewSectionSelectMenu(SECTIO_NUMBER);
   }
}
