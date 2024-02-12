
function viewModal(element) {
   element.classList.toggle('_view');
}

function closeModal(element) {
   element.classList.remove('_view');
}

document.addEventListener('click', (event) => {
   //Виклик вікна вибору або додавання секції
   if (event.target.closest(".page-settings-block__btn") && event.target.closest(".page-settings-block__btn").name == 'select_section') {
      viewModal(document.querySelector(".section-catalog"));
   }

   if (event.target.closest('.AddSection__btn')) {
      viewModal(document.querySelector(".section-catalog"));
   }

   if (event.target.closest(".button-section-select")) {
      viewModal(document.querySelector(".section-catalog"));
   }

   if (event.target.closest(".section-catalog__close")) {
      closeModal(document.querySelector(".section-catalog"));
   }

   //виклик меню списку кнопок налаштування сторінки
   if (event.target.closest('.page-settings-block__ico-wrapper')) {
      viewModal(document.querySelector('.page-settings-block'));
   }
   //виклик меню створення сторінки
   if (
      event.target.closest('.new-page-btn')
      || event.target.closest(".page-settings-block__btn")
      && event.target.closest(".page-settings-block__btn").name == 'create_new_page'
   ) {
      viewModal(document.querySelector('.teamplate-catalog'));
   }

   if (event.target.closest(".teamplate-catalog__close")) {
      closeModal(document.querySelector(".teamplate-catalog"));
      closeModal(document.querySelector(".teamplate-create-card"));
   }

   //виклик меню створення шаблона
   if (event.target.closest('.teamplate-catalog__tile-add-btn')) {
      viewModal(document.querySelector('.teamplate-create-card'));
   }

   if (event.target.closest(".teamplate-create-card__close")) {
      closeModal(document.querySelector(".teamplate-create-card"));
   }

   //виклик меню налаштування секцією
   //if (event.target.closest('.section-settings__btn')) {
   //   viewModal(document.querySelector('.management-block'));
   //   viewModal(document.querySelector('.section-settings__name'));
   //}
   //виклик меню налаштування 'Заголовок секцій'
   if (
      event.target.closest('.management__button')
      && event.target.closest(".management__button").name == 'section-settings'
   ) {
      const parent = event.target.closest(".section-settings");
      viewModal(parent.querySelector('.section-upd'));
   }
   if (event.target.closest(".section-upd__close")) {
      const parent = event.target.closest(".section-settings");
      closeModal(parent.querySelector(".section-upd"));
   }

   //виклик меню налаштування 'Create-section-param'
   if (event.target.closest('.section-catalog__tile-add-btn')) {
      viewModal(document.querySelector('.create-section-param'));
   }
   if (event.target.closest(".create-section-param__close")) {
      closeModal(document.querySelector(".create-section-param"));
   }
   //const elem = document.querySelectorAll('.section-settings__btn');
   //const parent = document.querySelector('.section-settings__btn').closest(".section-settings__wrapper");
   //const buttonBlock = parent.querySelector('.management-block');

   if (event.target.closest('.section-settings__btn')) {
      //const elem = event.target;
      const parent = event.target.closest(".section-settings__btns-wrapper");
      viewModal(parent.querySelector('.management-block'));
      viewModal(parent.querySelector('.section-settings__name'));
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
   //отримати родича '.section-settings'
   //у цього родича знайти '.items__number'
   //у нього отримати номер innerHTML або name
   //цей номер передати '.section-catalog' data-section-number="number"
   if (event.target.closest('.button-section-select')) {
      const section_upd_params_menu = event.target.closest('.section-settings');
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
