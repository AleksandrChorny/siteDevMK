//the action item that is selected to update
export function actionItem(event) {
   if (event.target.closest('[data-name="item-btn"]')) {
      const sectionCreateItemMenu = event.target.closest('[data-name="section-moderation-menu"]');
      const forms = sectionCreateItemMenu.querySelectorAll('form');
      const btnId = event.target.closest('[data-name="item-btn"]').dataset.id;
      forms.forEach((form) => {
         form.classList.remove('_action');
         const itemForm = sectionCreateItemMenu.querySelector('form[data-id="' + btnId + '"]');
         itemForm.classList.add('_action');
      })
   }
}


//add class _view to section create param menu
export function viewSectionCreateParamMenu(event) {
   if (event.target.closest('[data-name="add_item_btn"]')) {
      const SECTION_CREATE_ITEM_MENU = event.target.closest('[data-name="section-moderation-menu"]');
      if (SECTION_CREATE_ITEM_MENU) {
         SECTION_CREATE_ITEM_MENU.querySelector('[data-name="section-create-param-menu"]').classList.add('_view');
      }
   }

   if (event.target.closest('[data-name="close-section-create-param-menu"]')) {
      const SECTION_CREATE_PARAM_MENU = event.target.closest('[data-name="section-create-param-menu"]');
      if (SECTION_CREATE_PARAM_MENU) {
         SECTION_CREATE_PARAM_MENU.classList.remove('_view');
         return;
      }
      console.log('SECTION_CREATE_PARAM_MENU is epsent on page');
   }
}

//close section create item-menu
export function close(event) {
   if (event.target.closest('[data-button="close-section-moderation-menu"]')) {
      const menu = event.target.closest('[data-name="section-moderation-menu"]');
      if (menu) {
         menu.classList.remove('_view');
      }
   }
}

export function viewOnload() {
   const VIEW = new URLSearchParams(document.location.search).get("view")
   if (VIEW) {
      const VIEW_IN_ARRAY = VIEW.split('_')
      if (VIEW_IN_ARRAY.includes('moderation')) {
         document.querySelector('[data-name="section-moderation-menu"]').classList.add('_view');
      }
   }

   if (new URLSearchParams(document.location.search).get("section_id")) {
      const SECTION_ID = new URLSearchParams(document.location.search).get("section_id");
      const FORM = document.querySelector('[data-name="create-section-param-form"]');
      const INPUT = createHiddenInput('section_id', SECTION_ID)
      FORM.append(INPUT);
      //console.log(CREATE_PARAM_FORM);
   }
}

//function setSectionIdToHiddenInputCreateParamForm() {

//}

function createHiddenInput(name, value) {
   const INPUT = document.createElement("input");
   INPUT.setAttribute("name", name);
   INPUT.setAttribute("value", value);
   INPUT.setAttribute("type", 'hidden');
   return INPUT;
}