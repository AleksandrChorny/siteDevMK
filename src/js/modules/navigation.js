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

export function viewNavigateItems() {
   // Отримуємо всі елементи меню
   const navItems = document.querySelectorAll('.nav-items .group-wrapper');
   // Додаємо івент на клік та запускаємо функцію показу елементів головного меню
   document.addEventListener('click', viewNavigateItems);
   // Функція показу елементів головного меню
   function viewNavigateItems(event) {
      // Виконуємо якщо нажата кнопка меню
      if (event.target.closest('.main-menu__items')) {
         // Отримуємо кнопку
         const buttonName = event.target.closest('.main-menu__items').getAttribute('data-name');
         // Проходимо по всім елементам меню
         navItems.forEach(item => {
            // Видаляємо клас шоу, якщо елемент його має, та не співпадає з імʼям кнопки меню
            if (item.classList.contains('_show') && item.getAttribute('data-name') !== buttonName) {
               item.classList.remove('_show')
            }
            // Додаємо, або видаляємо клас шоу якщо елемент співпадає з імʼям кнопки
            if (item.getAttribute('data-name') == buttonName) {
               item.classList.toggle('_show');
            }
         });
      }
      //Видаляємо клас шоу у всіх елементів меню, якщо клікнули за межами головного меню
      if (!event.target.closest('.main-menu')) {
         navItems.forEach(item => {
            item.classList.remove('_show')
         });
      }
   }
}

export function viewContacts() {
   const contactBtns = document.querySelectorAll('.left-side-bar__items button');

   const contactBars = document.querySelectorAll('.left-side-bar__contacts');

   contactBtns.forEach(contactBtn => {
      contactBtn.addEventListener('click', (event) => {
         const btnName = contactBtn.getAttribute('data-name');
         contactBars.forEach(contact => {
            const contactName = contact.getAttribute('data-name');
            if (contactName == btnName) {
               contact.classList.toggle('_show')
            }
            if (contactName !== btnName) {
               contact.classList.remove('_show')
            }
         })
      })
   })


}