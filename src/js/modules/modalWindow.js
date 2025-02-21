
export function close(event) {
   const BUTTON = event.target.closest('[data-button-name="close-modal_window"]');
   if (BUTTON) {
      const MENU = event.target.closest('[data-name="modal_window"]');
      if (MENU) {
         MENU.classList.remove('_view');
      }
   }
}

// export function testLS(event) {
//    const MENU = event.target.closest('[name="section-settings-form"]');
//    if (MENU) {
//       const INPUTS = MENU.querySelectorAll('input');
//       if (INPUTS) {
//          INPUTS.forEach(input => {
//          // console.log(input);
//          // localStorage.setItem('', JSON.stringify('MENU'));
         
//          });
//       }
//    }

//    // if (MENU) {
//    //    localStorage.setItem('MENU', JSON.stringify('MENU'));
//    //    console.log(JSON.stringify('MENU'));

//    //    let B = localStorage.getItem('MENU');
//    //    console.log(B);
//    //    // B = JSON.parse(B);
//    //    // console.log(B);

//    // }
// }