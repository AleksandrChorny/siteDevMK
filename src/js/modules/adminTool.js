export function controlPanelSwitch(event) {
   //const q = document.querySelector('[data-name="controlPanelSwitch"]').checked;

   if (event.target.closest('[data-name="admin-tool-switch"]')) {
      const adminElements = document.querySelectorAll('[data-admin-element="true"]');
      adminElements.forEach(adminElement => {
         if (document.querySelector('[data-name="controlPanelSwitch"]').checked == false) {
            adminElement.classList.add('invisible');
            console.log(adminElement);
         }
         if (document.querySelector('[data-name="controlPanelSwitch"]').checked == true) {
            adminElement.classList.remove('invisible');
            console.log(adminElement);
         }
      })
   }
}