document.addEventListener("click", function (event) {
   // --- 1. Обробка кліку на елемент з data-btn-day ---
   const btnDay = event.target.closest('[data-btn-day]');
   if (btnDay) {
      const dayValue = btnDay.getAttribute('data-btn-day');
      if (!dayValue) return;

      // Знімаємо _active з усіх кнопок
      document.querySelectorAll('[data-btn-day]').forEach(el => {
         el.classList.remove('_active');
      });

      // Додаємо _active до натиснутої
      btnDay.classList.add('_active');

      // Знімаємо _on-screen з усіх блоків
      document.querySelectorAll('[data-day]').forEach(el => {
         el.classList.remove('_on-screen');
      });

      // Показуємо відповідний блок
      const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
      if (targetBlock) {
         targetBlock.classList.add('_on-screen');
      }

      return; // зупиняємо подальше виконання, щоб уникнути конфлікту з наступним if
   }

   // --- 2. Обробка кліку на кнопку з data-name="fin-inform-button" ---
   const button = event.target.closest('[data-name="fin-inform-button"]');
   if (button) {
      const activeBtn = document.querySelector('[data-btn-day]._active');
      if (!activeBtn) return;

      const dayValue = activeBtn.getAttribute('data-btn-day');
      if (!dayValue) return;

      // Знімаємо _on-screen з усіх блоків
      document.querySelectorAll('[data-day]').forEach(el => {
         el.classList.remove('_on-screen');
      });

      // Показуємо відповідний блок
      const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
      if (targetBlock) {
         targetBlock.classList.add('_on-screen');
      }
   }
});
