export function viewText() {
   const coverTxt = document.querySelector('.cover__txt');
   const orderBtn = document.querySelector('.cover__button');

   document.addEventListener('click', viewTxt);
   document.addEventListener('click', viewOrderForm);

   function viewTxt(event) {
      if (event.target == coverTxt) {
         coverTxt.classList.toggle('_view');
      }
   }

   function viewOrderForm(event) {
      if (event.target == orderBtn) {
         document.querySelector('.cover__contact-form').classList.add('_active');
      }
   }
}