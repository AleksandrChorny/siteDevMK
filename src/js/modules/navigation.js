export function viewNavigation() {
   const burger = document.querySelector('.burger-menu');
   const navigation = document.querySelector('.main-menu');

   document.addEventListener('click', viewNavigation);

   function viewNavigation(event) {
      if (event.target.closest('.burger-menu')) {
         navigation.classList.toggle('_active');
         burger.classList.toggle('_action');
      }
   }
}