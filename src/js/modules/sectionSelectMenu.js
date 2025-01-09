import * as sectionCreateMenu from "./sectionCreateMenu.js";

//classList add _view to stile create menu get section number and create hidden input "section number"
export function viewSectionSelectMenu(sectionNumber) {
   //get select section menu
   const SECTION_SELECT_MENU = document.querySelector('[data-name="section-select-menu"]');
   //add class view and create hidden input
   if (SECTION_SELECT_MENU) {
      //get select form
      const SELECT_FORM = SECTION_SELECT_MENU.querySelector('form[title="select-section-form"]');
      //if isset select form
      if (SELECT_FORM) {
         //get hidden input "section number"
         const INPUT_SECTION_NUMBER = SELECT_FORM.querySelector('input[name="section_number"]');
         //if isset hidden input? remove
         if (INPUT_SECTION_NUMBER) {
            INPUT_SECTION_NUMBER.remove();
         }
         //create hidden input "section number"
         const INPUT = create_hidden_input('section_number', sectionNumber);
         //inset input in form
         SELECT_FORM.prepend(INPUT);
      }
      // view seelct section menu
      SECTION_SELECT_MENU.classList.add('_view');
      return;
   }
   //if !isset menu view alert
   alert('cannot view SECTION_SELECT_MENU is epsent on document');
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

export function viewAlarm(event) {
   const BUTTON_EDIT = event.target.closest('[data-name="view-alarm-section-select-moderation-view"]');
   if (BUTTON_EDIT) {
      const SECTION_SELECT_MENU = event.target.closest('[data-name="section-select-menu"]');
      if (SECTION_SELECT_MENU) {
         const ALARM_MENU = SECTION_SELECT_MENU.querySelector('[data-name="alarm-section-select-moderation-view"]');
         if (ALARM_MENU) {
            ALARM_MENU.classList.add('_view');
         }else {
            alert('alarm-section-select-moderation-view не знайдено!');
         }
      } else {
         alert('section-select-menu не знайдено!');
      }
   }
}

export function closeAlarm(event) {
   const BUTTON_CLOSE = event.target.closest('[name="close-alarm-section-select-moderation-view"');
   const BUTTON_CONFIRM = event.target.closest('[data-name="confirm-alarm-section-select-moderation-view"');

   const BUTTON_REJECT = event.target.closest('[data-name="reject-alarm-section-select-moderation-view"]');
   if (BUTTON_CLOSE || BUTTON_REJECT || BUTTON_CONFIRM) {
      const ALARM_MENU = event.target.closest('[data-name="alarm-section-select-moderation-view"]');
      if (ALARM_MENU) {
         ALARM_MENU.classList.remove('_view');
      } else {
         alert('alarm-section-select-moderation-view не знайдено!');
      }
   }
}

// export function viewUpdButtons(event) {
//    const PREVIEW = event.target.closest('[data-name="preview-activ-section"]');
//    if (PREVIEW) {
//       const SECTION_SELECT_MENU = event.target.closest('[data-name="section-tile"]');
//       if (SECTION_SELECT_MENU) {
//          const CONFIRMS = SECTION_SELECT_MENU.querySelectorAll('[data-name="activ-section"]');
//          CONFIRMS.forEach(element => {
//             if (element) {
//                element.classList.add('_preview');
//             } else {
//                alert('Звернітся до адміністратора!');
//             }
//          });
//       }
//       PREVIEW.classList.remove('_preview');
//    }
// }
export function viewUpdButtons(event) {
   const TILES = event.target.closest('[data-name="section-tiles"]');
   const CARD = event.target.closest('[data-name="section-card"]');

   if (TILES) {
      const PREVIEW_TILES = TILES.querySelectorAll('[data-name="active-section-preview"]');
      PREVIEW_TILES.forEach(element => {
         if (element) {
            element.classList.add('_preview');
         } else {
            alert('Звернітся до адміністратора!');
         }
      });
   }
   if (CARD) {
      const PREVIEW_CARD = CARD.querySelectorAll('[data-name="active-section-preview"]');
      PREVIEW_CARD.forEach(element => {
         if (element) {
            element.classList.remove('_preview');
         } else {
            alert('Звернітся до адміністратора!');
         }
      });
      PREVIEW_CARD.classList.add('_preview');
   }
}

export function viewSectionSettingsModal(event) {
   const GEAR_BUTTON = event.target.closest('[data-name="section-select-menu__dell-section-btn"]');
   if (GEAR_BUTTON) {
      const SECTION_SELECT_MENU = event.target.closest('[data-name="section-select-menu"]');
      if (SECTION_SELECT_MENU) {
         const SECTION_SETTING_MODAL = SECTION_SELECT_MENU.querySelector('[data-name="section-settings-modal-view"]');
         SECTION_SETTING_MODAL.classList.add('_view');
      } else {
               alert('Звернітся до адміністратора!');
      }
   }
}

export function closeSectionSettingsModal(event) {
   const CLOSE_BUTTON = event.target.closest('[name="close-section-select-menu-view"]');
   // console.log(CLOSE_BUTTON)
   if (CLOSE_BUTTON) {
      const SECTION_SETTING_MODAL = event.target.closest('[data-name="section-settings-modal-view"]');
      if (SECTION_SETTING_MODAL) {
         SECTION_SETTING_MODAL.classList.remove('_view');
      } else {
         alert('Звернітся до адміністратора!');
      }
   }
}

// export function addClasses(event) {
//    const MODERATION_MENU = document.querySelector('[data-name="section-moderation-menu"]');
//    if (MODERATION_MENU) {
//       const TEXTAREA = MODERATION_MENU.querySelector('[data-name="max-height"]');
//       const TEXTAREA_SCALE_BTN = MODERATION_MENU.querySelector('[button-data-name="scale_up"]');
//       if (event.target.closest('[button-data-name="scale_up"]')) {
//          if (TEXTAREA.classList.contain('_max-height')){
//             TEXTAREA.classList.remove('_max-height');
//             TEXTAREA_SCALE_BTN.classList.remove('_scale_up');
//          } else {
//             TEXTAREA.classList.add('_max-height');
//             TEXTAREA_SCALE_BTN.classList.add('_scale_up');
//          }
//          }
//    // console.log(TEXTAREA)
//    }
// }

export function addClasses(event) {
   const MODERATION_MENU = document.querySelector('[data-name="section-moderation-menu"]');
   if (MODERATION_MENU) {
      const VIEW_ACTIVE = MODERATION_MENU.querySelector('[data-name="view-active"]');
      const VIEW_NEW = MODERATION_MENU.querySelector('[data-name="view-new"]');

      if (event.target.closest('[data-name="view-new"]')) {
         if (!VIEW_NEW.classList.contains('_max-height')){
            VIEW_ACTIVE.classList.add('_min-height');
            VIEW_NEW.classList.add('_max-height');
         }
      }
      if (event.target.closest('[data-name="view-active"]')) {
         if (VIEW_ACTIVE.classList.contains('_min-height')){
            VIEW_ACTIVE.classList.remove('_min-height');
            VIEW_NEW.classList.remove('_max-height');
         }
      }
   // console.log(TEXTAREA)
   }
}