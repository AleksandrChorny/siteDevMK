export function viewAlarm(event){
   const BUTTON_EDIT = event.target.closest('[data-name="view-alarm-section-upd-view"]');
   if (BUTTON_EDIT) {
      const UPD_MENU = event.target.closest('[data-name="section-upd-menu"]');
      if(UPD_MENU) {
         const ALARM_MENU = UPD_MENU.querySelector('[data-name="alarm-section-upd-view"]');
         if (ALARM_MENU) {
            ALARM_MENU.classList.add('_view');
         } else {
            alert('alarm-section-upd-view не знайдено!');
         }
      } else {
         alert('section-upd-menu не знайдено!');
      }
   }
}

export function closeAlarm(event) {
   const BUTTON_CLOSE = event.target.closest('[name="close-alarm-section-upd-view"]');
   const BUTTON_REJECT = event.target.closest('[data-name="reject-alarm-section-upd-view"]');
   if (BUTTON_CLOSE || BUTTON_REJECT) {
      const ALARM_MENU = event.target.closest('[data-name="alarm-section-upd-view"]');
      if (ALARM_MENU) {
         ALARM_MENU.classList.remove('_view');
      } else {
         alert('alarm-section-upd-view не знайдено!');
      }
   }
}