//функція додавання та видалення класу у елемента
//function toggleClass(element, className) {
//   console('vdbvnbmj');
//   element.classList.toggle(className);
//}

//отримуємо кнопку визова меню додавання секції на сторінку
const button_get_menu_for_add_section_to_page = document.querySelector(".Section-catalog__tile-add-btn");

//Додаємо дію по кліку на кнопку
button_get_menu_for_add_section_to_page.addEventListener("click", () => {
   //Отримуємо Пуп-ап вікно створення нової секції
   document.querySelector('.teamplate-create-card').classList.toggle('_view');
});


//отримуємо кнопку закривання меню створення нової секції
const button_close_menu_for_add_section_to_page = document.querySelector(".teamplate-create-card__close");
//додати прослуховувач на кнопку по кліку
button_close_menu_for_add_section_to_page.addEventListener("click", () => {
   // змінювати клас меню створення нової секції
   document.querySelector(".teamplate-create-card").classList.remove('_view');
})




//button_get_menu_for_add_section_to_page.addEventListener("click", classAdd)


const buttonClose = document.querySelector(".Section-catalog__close");
const buttonNewSection = document.querySelector(".page-settings-block__btn");
const buttonCircle = document.querySelector(".another-section-btn__circle");

const Catalog = document.querySelector(".Section-catalog");
console.log('Add new class Max')

function classClose() {
   // console log('Add new class Max')

   Catalog.classList.toggle("_action");
}

buttonClose.addEventListener("click", classClose)
buttonNewSection.addEventListener("click", classClose)
buttonCircle.addEventListener("click", classClose)

const addPageClose = document.querySelector(".teamplate-catalog__close");
const addPageBtn = document.querySelector(".new-page-btn");
const addPageMenu = document.querySelector(".teamplate-catalog");

function viewTeamplateCatalog() {
   // console.log('Add new class Max')
   addPageMenu.classList.toggle("_view");

}

addPageBtn.addEventListener("click", viewTeamplateCatalog)
addPageClose.addEventListener("click", viewTeamplateCatalog)


const newTeamplate = document.querySelector(".teamplate-catalog__tile-add-btn");
console.log(newTeamplate)

function newTeampAction() {

   newTeamplate.classList.toggle("_action");
}

newTeamplate.addEventListener("click", newTeampAction)

// 11111111111111111111111111111111111111111111111111111?


// console.log(1222222222222222222222222222)

// const showMeButtons = document.querySelector(".teamplate-settings__btn");

// function showMeButtons(){

//    showMeButtons.classList.toggle("_btns-show");
// }

// showMeButtons.addEventListener("click", showMeButtons)