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
   //if (event.target.closest('.section-control__btn')) {
   //   viewModal(document.querySelector('.management-block'));
   //   viewModal(document.querySelector('.section-control__name'));
   //}
   //виклик меню налаштування 'Заголовок секцій'
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'section-control-panel'
   ) {
      const parent = event.target.closest(".section-control-panel");
      viewModal(parent.querySelector('.section-upd-params-menu'));
   }
   if (event.target.closest(".section-upd-params-menu__close")) {
      const parent = event.target.closest(".section-control-panel");
      closeModal(parent.querySelector(".section-upd-params-menu"));
      closeModal(parent.querySelector(".create-section-param"));
   }


   //const elem = document.querySelectorAll('.section-control-panel__btn');
   //const parent = document.querySelector('.section-control-panel__btn').closest(".section-control-panel__wrapper");
   //const buttonBlock = parent.querySelector('.management-block');

   if (event.target.closest('.section-control-panel__btn')) {
      //const elem = event.target;
      const parent = event.target.closest(".section-control-panel__btns-wrapper");
      viewModal(parent.querySelector('.management-block'));
      viewModal(parent.querySelector('.section-control-panel__name'));
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
   //отримати родича '.section-control-panel'
   //у цього родича знайти '.items__number'
   //у нього отримати номер innerHTML або name
   //цей номер передати '.section-catalog' data-section-number="number"
   if (event.target.closest('.button-section-select')) {
      const section_upd_params_menu = event.target.closest('.section-control-panel');
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
