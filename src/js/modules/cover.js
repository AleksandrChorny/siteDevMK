export function viewText() {
   const coverTxt = document.querySelector('.cover__txt');

   document.addEventListener('click', viewTxt);

   function viewTxt(event) {
      if (event.target == coverTxt) {
         coverTxt.classList.toggle('_view');
      }
   }
}