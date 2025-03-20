document.addEventListener("DOMContentLoaded", () => {
   // Відкриття модалки
   document.querySelectorAll("[data-modal]").forEach(button => {
       button.addEventListener("click", () => {
           const modalId = button.getAttribute("data-modal");
           document.querySelector(`[data-modal-id="${modalId}"]`).style.display = "flex";
       });
   });

   // Закриття модалки
   document.querySelectorAll("[data-close]").forEach(closeBtn => {
       closeBtn.addEventListener("click", () => {
           const modalId = closeBtn.getAttribute("data-close");
           document.querySelector(`[data-modal-id="${modalId}"]`).style.display = "none";
       });
   });

   // Закриття при кліку поза вікном
   document.querySelectorAll(".modal").forEach(modal => {
       modal.addEventListener("click", (e) => {
           if (e.target === modal) {
               modal.style.display = "none";
           }
       });
   });
});



// export function closeAllModalWidows (event) {
//    if (event.target.closest('[data-name="close-modal-window-button"]')) {
//       const modal_Window = event.target.closest('[data-name="modal-window"]');
//       if (modal_Window) {
//          setTimeout(() => {
//             modal_Window.remove();
//         }, 200);
//          return;
//       }
//    }

// }