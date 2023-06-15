export function viewText() {
   const coverTxt = document.querySelector('.welcome-txt__text-block');

   document.addEventListener('click', viewTxt);

   function viewTxt(event) {
      if (event.target == coverTxt) {
         coverTxt.classList.toggle('_view');
      }
   }
}