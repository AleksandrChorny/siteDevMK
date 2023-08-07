export function viewLoginForm() {
   //знаходимо форму логіну
   const loginForm = document.querySelector('.log-in');
   // Додати подію по кліку
   addEventListener('click', (event) => {
      //Якщо data-name == 'logIn' додаємо потрібний клас
      if (event.target.closest("[data-name]") && event.target.closest("[data-name]").dataset.name == 'logIn') {
         loginForm.classList.toggle('_active')
         //Якщо ні видаляємо не іпотрібний клас
      }
      if (
         !event.target.closest('.log-in')
         && !event.target.closest("[data-name]")
      ) {
         loginForm.classList.remove('_active');
      }
      if (
         !event.target.closest('.log-in')
         && event.target.closest("[data-name]")
         && event.target.closest("[data-name]").dataset.name !== 'logIn'
      ) {
         loginForm.classList.remove('_active');
      }
   });
}