import * as fetchUrl from "./fetchUrl.js";

// Функція для створення FormData
function createFetchParam(eventTarget) {
   let result = new FormData(); // Використовуємо FormData для створення іменованого масиву

   // Якщо є атрибут data-section-id, додаємо його до fetchParam
   if (eventTarget.matches('[data-section-id]')) {
      const sectionId = eventTarget.getAttribute('data-section-id');
      result.append("sectionId", sectionId); // Додаємо значення в форму
   }
   return result;
}

// Відкриття модалки
export function fetchModal(event) {
   // Перевіряємо, чи натиснуто елемент з атрибутом data-fetch-modal
   if (event.target.matches('[data-fetch-modal]')) {
      // Отримуємо значення data-fetch-modal
      const modalName = event.target.getAttribute("data-fetch-modal");

      // Створюємо параметри для fetch за допомогою createFetchParam
      const fetchParam = createFetchParam(event.target);

      // Викликаємо метод для завантаження вмісту модального вікна з передачею параметрів
      fetchUrl.loadContent(modalName, fetchParam);

      // Якщо потрібно, можна логувати fetchParam для перевірки
      console.log([...fetchParam]); // Це виведе масив з FormData у консоль
   }
}

// Закриття модалки
export function close(event) {
   if (event.target.matches("[data-close-modal]")) {
      const modalName = event.target.getAttribute("data-close-modal");
      const modalWindow = event.target.closest(`[data-name="${modalName}"]`);
      if (modalWindow) {
         setTimeout(() => {
            modalWindow.remove();
         }, 200);
         return;
      }
   }
}
