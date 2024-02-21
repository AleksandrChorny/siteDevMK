import * as createSectionParam from "./createSectionParam.js";
import * as sectionSettings from "./sectionSettings.js";
import * as teamplateSettings from "./teamplateSettings.js";

function viewModal(element) {
   element.classList.toggle('_view');
}

function closeModal(element) {
   element.classList.remove('_view');
}

sectionSettings.setFileName();

document.addEventListener('click', (event) => {
   //виклик меню створення нового параметра секції
   createSectionParam.viewMenu(event);
   createSectionParam.closeMenu(event);

   sectionSettings.viewSelectSectionMenu(event);
   sectionSettings.viewCreateSectionMenu(event);


   teamplateSettings.viewSelectTeamplateMenu(event);
   teamplateSettings.viewCreateTeamplateMenu(event)


   //виклик меню створення сторінки




   //виклик меню налаштування секцією
   //if (event.target.closest('.section-settings__btn')) {
   //   viewModal(document.querySelector('.management-block'));
   //   viewModal(document.querySelector('.section-settings__name'));
   //}
   //виклик меню налаштування 'Заголовок секцій'
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'section-settings-panel'
   ) {
      const parent = event.target.closest(".section-settings-panel");
      viewModal(parent.querySelector('.section-upd-params-menu'));
   }
   if (event.target.closest(".section-upd-params-menu__close")) {
      const parent = event.target.closest(".section-settings-panel");
      closeModal(parent.querySelector(".section-upd-params-menu"));
      closeModal(parent.querySelector(".create-section-param"));
   }


   //const elem = document.querySelectorAll('.section-settings-panel__btn');
   //const parent = document.querySelector('.section-settings-panel__btn').closest(".section-settings-panel__wrapper");
   //const buttonBlock = parent.querySelector('.management-block');

   if (event.target.closest('.section-settings-panel__btn')) {
      //const elem = event.target;
      const parent = event.target.closest(".section-settings-panel__btns-wrapper");
      viewModal(parent.querySelector('.management-block'));
      viewModal(parent.querySelector('.section-settings-panel__name'));
      //parent.querySelector('.management-block').classList.add('_view');
      //console.log(parent);
   }

   if (event.target.closest('.section-catalog__tile-wrapper')) {
      const elem = event.target.closest('.section-catalog__tile-wrapper');
      const allSections = document.querySelectorAll('.section-catalog__tile-wrapper');
      allSections.forEach((section) => {
         if (section.classList.contains('checked')) {
            section.classList.remove('checked');
         }
      });
      elem.classList.add('checked');
   }
   //при натисканні на кнопку '.button-section-select'
   //отримати родича '.section-settings-panel'
   //у цього родича знайти '.items__number'
   //у нього отримати номер innerHTML або name
   //цей номер передати '.section-catalog' data-section-number="number"
   if (event.target.closest('.button-section-select')) {
      const section_upd_params_menu = event.target.closest('.section-settings-panel');
      const number = section_upd_params_menu.querySelector('.items__number').dataset.number;
      //const section_select_menu = document.querySelector('.section-catalog');
      document.querySelector('.section-catalog').setAttribute('data-section-namber', number);
   }

   // const num = document.querySelector('.items__number');
   // const num1 = num.dataset.number;
   // const num2 = num.innerHTML;
   // console.log(num);
   // console.log(num1);
   // console.log(num2);

})

document.addEventListener('change', () => {
   sectionSettings.setFileName();
})
