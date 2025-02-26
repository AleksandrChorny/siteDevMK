export function getAndSet() {
   const forms = document.querySelectorAll("form");

   forms.forEach(form => {
      const inputs = form.querySelectorAll("input");

      inputs.forEach(input => {
         // Унікальний ключ: id форми + name інпута
         const storageKey = `${form.id}_${input.name}`;

         // Заповнення інпутів із localStorage
         const savedValue = localStorage.getItem(storageKey);
         console.log(savedValue)
         if (savedValue) {
            input.value = savedValue;
         }

         // Збереження в localStorage при зміні
         input.addEventListener("input", function () {
            localStorage.setItem(storageKey, input.value);
         });
      });
   });
}