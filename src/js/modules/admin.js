
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
   if (event.target.closest('.section-settings__btn')) {
      viewModal(document.querySelector('.management-block'));
      viewModal(document.querySelector('.section-settings__name'));

   }

})
//page - settings - block

////функція додавання та видалення класу у елемента
////function toggleClass(element, className) {
////   console('vdbvnbmj');
////   element.classList.toggle(className);
////}

////отримуємо кнопку визова меню додавання секції на сторінку
//const button_get_menu_for_add_section_to_page = document.querySelector(".Section-catalog__tile-add-btn");

////Додаємо дію по кліку на кнопку
//button_get_menu_for_add_section_to_page.addEventListener("click", () => {
//   //Отримуємо Пуп-ап вікно створення нової секції
//document.querySelector('.teamplate-create-card').classList.toggle('_view');
//});


////отримуємо кнопку закривання меню створення нової секції
//const button_close_menu_for_add_section_to_page = document.querySelector(".teamplate-create-card__close");
////додати прослуховувач на кнопку по кліку
//button_close_menu_for_add_section_to_page.addEventListener("click", () => {
//   // змінювати клас меню створення нової секції
//   document.querySelector(".teamplate-create-card").classList.remove('_view');
//})




////button_get_menu_for_add_section_to_page.addEventListener("click", classAdd)


//const buttonClose = document.querySelector(".Section-catalog__close");
//const buttonNewSection = document.querySelector(".page-settings-block__btn");
//const buttonCircle = document.querySelector(".another-section-btn__circle");

//const Catalog = document.querySelector(".Section-catalog");
//console.log('Add new class Max')

//function classClose() {
//   // console log('Add new class Max')

//   Catalog.classList.toggle("_action");
//}

//buttonClose.addEventListener("click", classClose)
//buttonNewSection.addEventListener("click", classClose)
//buttonCircle.addEventListener("click", classClose)

//const addPageClose = document.querySelector(".teamplate-catalog__close");
//const addPageBtn = document.querySelector(".new-page-btn");
//const addPageMenu = document.querySelector(".teamplate-catalog");

//function viewTeamplateCatalog() {
//   // console.log('Add new class Max')
//   addPageMenu.classList.toggle("_view");

//}

//addPageBtn.addEventListener("click", viewTeamplateCatalog)
//addPageClose.addEventListener("click", viewTeamplateCatalog)


//const newTeamplate = document.querySelector(".teamplate-catalog__tile-add-btn");
//console.log(newTeamplate)

//function newTeampAction() {

//   newTeamplate.classList.toggle("_action");
//}

//newTeamplate.addEventListener("click", newTeampAction)

//// 11111111111111111111111111111111111111111111111111111?


//// console.log(1222222222222222222222222222)

//// const showMeButtons = document.querySelector(".teamplate-settings__btn");

//// function showMeButtons(){

////    showMeButtons.classList.toggle("_btns-show");
//// }

//// showMeButtons.addEventListener("click", showMeButtons)