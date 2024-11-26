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
   const BUTTON_REJECT = event.target.closest('[data-name="reject-alarm-section-select-moderation-view"]');
   if (BUTTON_CLOSE || BUTTON_REJECT) {
      const ALARM_MENU = event.target.closest('[data-name="alarm-section-select-moderation-view"]');
      if (ALARM_MENU) {
         ALARM_MENU.classList.remove('_view');
      } else {
         alert('alarm-section-select-moderation-view не знайдено!');
      }
   }
}

export function viewUpdButtons(event) {
   const CLOSE_ALARM_MENU = event.target.closest('[data-name="confirm-alarm-section-select-moderation-view"]');
   if (CLOSE_ALARM_MENU) {
      const ALARM_MENU = event.target.closest('[data-name="alarm-section-select-moderation-view"]');
      if (ALARM_MENU) {
         ALARM_MENU.classList.remove('_view');
      } else {
         alert('alarm-section-select-moderation-view не знайдено!');
      }
   }
   const BUTTON_CONFIRM = event.target.closest('[data-name="confirm-alarm-section-select-moderation-view"]');
   if (BUTTON_CONFIRM) {
      const SECTION_SELECT_MENU = event.target.closest('[data-name="section-select-menu"]');
      if (SECTION_SELECT_MENU) {
         const CONFIRMS = SECTION_SELECT_MENU.querySelectorAll('._preview');
         CONFIRMS.forEach(element => {
            if (element) {
               element.classList.remove('_preview');
            } else {
               alert('Звернітся до адміністратора!');
            }
         });
      }
   }
}