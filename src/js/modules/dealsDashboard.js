// Дохід
document.addEventListener("click", function (event) {
   // --- 1. Обробка кліку на елемент з data-btn-day ---
   const btnDay = event.target.closest('[data-btn-day]');
   if (btnDay) {
      const dayValue = btnDay.getAttribute('data-btn-day');
      if (!dayValue) return;

      // Знімаємо _active з усіх кнопок data-btn-day
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

      // Додаємо _active до кнопки з data-btn-name="fin-inform-button"
      const finBtn = document.querySelector('[data-btn-name="fin-inform-button"]');
      if (finBtn) {
         document.querySelectorAll('[data-btn-name]').forEach(btn => {
            btn.classList.remove('_active');
         });
         finBtn.classList.add('_active');
      }

      return; // зупиняємо подальше виконання
   }

   // --- 2. Обробка кліку на кнопку з data-btn-name="fin-inform-button" ---
   const button = event.target.closest('[data-btn-name="fin-inform-button"]');
   if (button) {
      const activeBtn = document.querySelector('[data-btn-day]._active');
      if (!activeBtn) return;

      const dayValue = activeBtn.getAttribute('data-btn-day');
      if (!dayValue) return;

      // Знімаємо _active з усіх фінансових кнопок
      document.querySelectorAll('[data-btn-name]').forEach(btn => {
         btn.classList.remove('_active');
      });

      // Додаємо _active до натиснутої
      button.classList.add('_active');

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

// Видатки
document.addEventListener("click", function (event) {
   const btnView = event.target.closest('[data-btn-name="fin-inform-button-outlay"]');
   
   if (btnView) {
      // Зняти _active з усіх кнопок
      document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => {
         btn.classList.remove('_active');
      });

      // Додати _active до натиснутої кнопки
      btnView.classList.add('_active');

      // Прибрати _on-screen з усіх data-day
      document.querySelectorAll('[data-day]').forEach(el => {
         el.classList.remove('_on-screen');
      });

      // Показати блок витрат
      const outlayMenu = document.querySelector('[data-name="cost-data"]');
      if (outlayMenu) {
         outlayMenu.classList.add('_on-screen');
      }
   }
});

// За тиждень
document.addEventListener("click", function (event) {
   const btnView = event.target.closest('[data-btn-name="fin-inform-button-weekly"]');
   
   if (btnView) {
      // Зняти _active з усіх кнопок
      document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => {
         btn.classList.remove('_active');
      });

      // Додати _active до натиснутої кнопки
      btnView.classList.add('_active');

      // Прибрати _on-screen з усіх data-day
      document.querySelectorAll('[data-day]').forEach(el => {
         el.classList.remove('_on-screen');
      });

      // Показати блок витрат
      const weekMenu = document.querySelector('[data-name="details-for-the-week"]');
      if (weekMenu) {
         weekMenu.classList.add('_on-screen');
      }
   }
});