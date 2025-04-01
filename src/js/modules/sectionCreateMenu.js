import * as fetchUrl from "./fetchUrl.js";

// export function view() {
//    const MENU = document.querySelector('[data-name="create-section-menu"]')
//    if (MENU) {

//       // MENU.classList.add('_view');
//    }
// }

export function close(event) {
   if (event.target.closest('[data-button-name="close-create-section-menu"]')) {
      const MENU = event.target.closest('[data-name="create-section-menu"]');
      if (MENU) {
         setTimeout(() => {
            MENU.remove();
        }, 200);
         // MENU.classList.remove('_view');
      }
   }
}

//export function validateForm(event) {
//   const section_name = event.target.value;
//   const URL = '/setup/section/getSectionName/';
//   fetchUrl.getUrlFormData(URL, section_name)
//      .then((response) => {
//         if (response == true) {
//            alert('this section already exists');
//         }
//         //const res = JSON.parse(response);
//         //window.location = REFFER_URL + '?moderation=view';
//         return;
//      });

//   //console.log(event.target.value);
//   //event.preventDefault();

//   //if (event.target.title == 'create-section') {
//   //   const FORM = new FormData(event.target);
//   //   const URL = event.target.action;
//   //   const REFFER_URL = window.location.href;
//   //   //FORM.append('location', REFFER_URL);

//   //}
//}