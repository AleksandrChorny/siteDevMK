document.addEventListener("click", function (event) {
   const btnDay = event.target.closest('[data-btn-day]');
   const finBtn = event.target.closest('[data-btn-name="fin-inform-button"]');
   const outlayBtn = event.target.closest('[data-btn-name="fin-inform-button-outlay"]');
   const weeklyBtn = event.target.closest('[data-btn-name="fin-inform-button-weekly"]');

   // ===================== CLICK ПО ДНЮ =====================
   if (btnDay) {
      const dayValue = btnDay.getAttribute('data-btn-day');
      if (!dayValue) return;

      // Активна кнопка дня
      document.querySelectorAll('[data-btn-day]').forEach(el => el.classList.remove('_active'));
      btnDay.classList.add('_active');

      // Активна фінансова кнопка
      const defaultFinBtn = document.querySelector('[data-btn-name="fin-inform-button"]');
      if (defaultFinBtn) {
         document.querySelectorAll('[data-btn-name]').forEach(el => el.classList.remove('_active'));
         defaultFinBtn.classList.add('_active');
      }

      // Показати відповідний data-day блок
      document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
      const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
      if (targetBlock) targetBlock.classList.add('_on-screen');

      // --- ОНОВЛЕННЯ ДАТИ ---
      const dateText = btnDay.childNodes[0].textContent.trim(); // число
      const dayTitle = btnDay.getAttribute('title'); // повна назва дня

      const screenDateEl = document.querySelector('[data-name="date-screen-date"]');
      const screenDayEl = document.querySelector('[data-name="date-screen-day"]');

      if (screenDateEl) screenDateEl.textContent = dateText;
      if (screenDayEl) screenDayEl.textContent = dayTitle.charAt(0).toUpperCase() + dayTitle.slice(1);

      // --- ОНОВЛЕННЯ ДАНИХ ЗА ДЕНЬ ---
      const incomeEl = document.querySelector(`.dash-board__daily-income-info[data-day="${dayValue}"]`);
      const outlayEl = document.querySelector(`.dash-board__daily-outlay-info[data-day="${dayValue}"]`);

      // Доходи
      let totalIncome = 0;
      if (incomeEl) {
         incomeEl.querySelectorAll('.dash-board__employee-income').forEach(p => {
            const val = parseFloat(p.textContent.replace(/\s/g, '').replace(',', '.'));
            if (!isNaN(val)) totalIncome += val;
         });
      }

      // Витрати
      let totalOutlay = 0;
      if (outlayEl) {
         outlayEl.querySelectorAll('.dash-board__outlay-cost').forEach(p => {
            const val = parseFloat(p.textContent.replace(/\s/g, '').replace(',', '.'));
            if (!isNaN(val)) totalOutlay += val;
         });
      }

      const result = totalIncome - totalOutlay;

      // Оновлюємо DOM
      const resultEl = document.querySelector('.dash-board__daily-efficiency-data.result');
      const outlayDisplay = document.querySelector('.dash-board__daily-efficiency-data.outlay');
      const incomeDisplay = document.querySelector('.dash-board__daily-efficiency-data.profit');

      if (resultEl) {
         const resultSign = result >= 0 ? '+ ' : '- ';
         const resultFormatted = `${resultSign}${Math.abs(result).toLocaleString('uk-UA')}`;
         resultEl.childNodes[0].textContent = resultFormatted + ' ';
         resultEl.classList.toggle('_result-green', result >= 0);
         resultEl.classList.toggle('_result-red', result < 0);
      }

      if (incomeDisplay) {
         incomeDisplay.textContent = `Дохід: ${totalIncome.toLocaleString('uk-UA')} грн.`;
      }

      if (outlayDisplay) {
         outlayDisplay.textContent = `Витрати: ${totalOutlay.toLocaleString('uk-UA')} грн.`;
      }

      return;
   }

   // ===================== CLICK ПО ДОХОДУ =====================
   if (finBtn) {
      const activeDayBtn = document.querySelector('[data-btn-day]._active');
      if (!activeDayBtn) return;

      const dayValue = activeDayBtn.getAttribute('data-btn-day');
      if (!dayValue) return;

      document.querySelectorAll('[data-btn-name]').forEach(btn => btn.classList.remove('_active'));
      finBtn.classList.add('_active');

      document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
      const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
      if (targetBlock) targetBlock.classList.add('_on-screen');
      return;
   }

   // ===================== CLICK ПО ВИТРАТАХ =====================
   if (outlayBtn) {
      document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => btn.classList.remove('_active'));
      outlayBtn.classList.add('_active');

      document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));

      const costBlock = document.querySelector('[data-name="cost-data"]');
      if (costBlock) costBlock.classList.add('_on-screen');
      return;
   }

   // ===================== CLICK ПО ТИЖНЮ =====================
   if (weeklyBtn) {
      document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => btn.classList.remove('_active'));
      weeklyBtn.classList.add('_active');

      document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));

      const weekBlock = document.querySelector('[data-name="details-for-the-week"]');
      if (weekBlock) weekBlock.classList.add('_on-screen');
      return;
   }
});



// // оптимізований
// document.addEventListener("click", function (event) {
//    const target = event.target;

//    // --- 1. Клік по кнопці з data-btn-day ---
//    const btnDay = target.closest('[data-btn-day]');
//    if (btnDay) {
//       const dayValue = btnDay.getAttribute('data-btn-day');
//       if (!dayValue) return;

//       // Зняти _active з усіх кнопок дня та додати до натиснутої
//       document.querySelectorAll('[data-btn-day]').forEach(el => el.classList.remove('_active'));
//       btnDay.classList.add('_active');

//       // Показати відповідний блок data-day
//       document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
//       const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
//       if (targetBlock) targetBlock.classList.add('_on-screen');

//       // Активувати кнопку доходу (фін. кнопка)
//       const finBtn = document.querySelector('[data-btn-name="fin-inform-button"]');
//       if (finBtn) {
//          document.querySelectorAll('[data-btn-name]').forEach(btn => btn.classList.remove('_active'));
//          finBtn.classList.add('_active');
//       }

//       // Оновити дату та день у .dash-board__date-screen
//       const dateText = btnDay.childNodes[0].textContent.trim();
//       const dayTitle = btnDay.getAttribute('title');
//       const screenDateEl = document.querySelector('[data-name="date-screen-date"]');
//       const screenDayEl = document.querySelector('[data-name="date-screen-day"]');
//       if (screenDateEl) screenDateEl.textContent = dateText;
//       if (screenDayEl && dayTitle) {
//          screenDayEl.textContent = dayTitle.charAt(0).toUpperCase() + dayTitle.slice(1);
//       }

//       return;
//    }

//    // --- 2. Клік по фінансовій кнопці (дохід) ---
//    const finBtn = target.closest('[data-btn-name="fin-inform-button"]');
//    if (finBtn) {
//       const activeDay = document.querySelector('[data-btn-day]._active');
//       if (!activeDay) return;
//       const dayValue = activeDay.getAttribute('data-btn-day');
//       if (!dayValue) return;

//       document.querySelectorAll('[data-btn-name]').forEach(btn => btn.classList.remove('_active'));
//       finBtn.classList.add('_active');

//       document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
//       const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
//       if (targetBlock) targetBlock.classList.add('_on-screen');

//       return;
//    }

//    // --- 3. Клік по кнопці "видатки" ---
//    const outlayBtn = target.closest('[data-btn-name="fin-inform-button-outlay"]');
//    if (outlayBtn) {
//       document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => btn.classList.remove('_active'));
//       outlayBtn.classList.add('_active');

//       document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
//       const outlayMenu = document.querySelector('[data-name="cost-data"]');
//       if (outlayMenu) outlayMenu.classList.add('_on-screen');

//       return;
//    }

//    // --- 4. Клік по кнопці "за тиждень" ---
//    const weekBtn = target.closest('[data-btn-name="fin-inform-button-weekly"]');
//    if (weekBtn) {
//       document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => btn.classList.remove('_active'));
//       weekBtn.classList.add('_active');

//       document.querySelectorAll('[data-day]').forEach(el => el.classList.remove('_on-screen'));
//       const weekMenu = document.querySelector('[data-name="details-for-the-week"]');
//       if (weekMenu) weekMenu.classList.add('_on-screen');

//       return;
//    }
// });



// // Дохід
// document.addEventListener("click", function (event) {
//    // Клік по кнопці з data-btn-day
//    const btnDay = event.target.closest('[data-btn-day]');
//    if (btnDay) {
//       const dayValue = btnDay.getAttribute('data-btn-day');
//       if (!dayValue) return;

//       // --- 1. Оновлення активної кнопки ---
//       document.querySelectorAll('[data-btn-day]').forEach(el => {
//          el.classList.remove('_active');
//       });
//       btnDay.classList.add('_active');

//       // --- 2. Оновлення видимого блоку ---
//       document.querySelectorAll('[data-day]').forEach(el => {
//          el.classList.remove('_on-screen');
//       });
//       const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
//       if (targetBlock) {
//          targetBlock.classList.add('_on-screen');
//       }

//       // --- 3. Автоматично активуємо фінансову кнопку ---
//       const finBtn = document.querySelector('[data-btn-name="fin-inform-button"]');
//       if (finBtn) {
//          document.querySelectorAll('[data-btn-name]').forEach(btn => {
//             btn.classList.remove('_active');
//          });
//          finBtn.classList.add('_active');
//       }

//       // --- 4. Оновлення блоку .dash-board__date-screen ---
//       const dateText = btnDay.childNodes[0].textContent.trim(); // число (наприклад "12")
//       const dayTitle = btnDay.getAttribute('title'); // повна назва українською (наприклад "понеділок")

//       const screenDateEl = document.querySelector('[data-name="date-screen-date"]');
//       const screenDayEl = document.querySelector('[data-name="date-screen-day"]');

//       if (screenDateEl) screenDateEl.textContent = dateText;
//       console.log(dateText);
//       if (screenDayEl) {
//          screenDayEl.textContent = dayTitle.charAt(0).toUpperCase() + dayTitle.slice(1);
//       }

//       return;
//    }

//    // Клік по фінансовій кнопці
//    const button = event.target.closest('[data-btn-name="fin-inform-button"]');
//    if (button) {
//       const activeBtn = document.querySelector('[data-btn-day]._active');
//       if (!activeBtn) return;

//       const dayValue = activeBtn.getAttribute('data-btn-day');
//       if (!dayValue) return;

//       document.querySelectorAll('[data-btn-name]').forEach(btn => {
//          btn.classList.remove('_active');
//       });
//       button.classList.add('_active');

//       document.querySelectorAll('[data-day]').forEach(el => {
//          el.classList.remove('_on-screen');
//       });
//       const targetBlock = document.querySelector(`[data-day='${dayValue}']`);
//       if (targetBlock) {
//          targetBlock.classList.add('_on-screen');
//       }
//    }
// });

// // Видатки
// document.addEventListener("click", function (event) {
//    const btnView = event.target.closest('[data-btn-name="fin-inform-button-outlay"]');
   
//    if (btnView) {
//       // Зняти _active з усіх кнопок
//       document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => {
//          btn.classList.remove('_active');
//       });

//       // Додати _active до натиснутої кнопки
//       btnView.classList.add('_active');

//       // Прибрати _on-screen з усіх data-day
//       document.querySelectorAll('[data-day]').forEach(el => {
//          el.classList.remove('_on-screen');
//       });

//       // Показати блок витрат
//       const outlayMenu = document.querySelector('[data-name="cost-data"]');
//       if (outlayMenu) {
//          outlayMenu.classList.add('_on-screen');
//       }
//    }
// });

// // За тиждень
// document.addEventListener("click", function (event) {
//    const btnView = event.target.closest('[data-btn-name="fin-inform-button-weekly"]');
   
//    if (btnView) {
//       // Зняти _active з усіх кнопок
//       document.querySelectorAll('.dash-board__fin-inform-button').forEach(btn => {
//          btn.classList.remove('_active');
//       });

//       // Додати _active до натиснутої кнопки
//       btnView.classList.add('_active');

//       // Прибрати _on-screen з усіх data-day
//       document.querySelectorAll('[data-day]').forEach(el => {
//          el.classList.remove('_on-screen');
//       });

//       // Показати блок витрат
//       const weekMenu = document.querySelector('[data-name="details-for-the-week"]');
//       if (weekMenu) {
//          weekMenu.classList.add('_on-screen');
//       }
//    }
// });