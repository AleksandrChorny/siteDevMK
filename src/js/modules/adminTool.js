export function controlPanelSwitch(event) {
   //const q = document.querySelector('[data-name="controlPanelSwitch"]').checked;

   if (event.target.closest('[data-name="admin-tool-switch"]')) {
      const adminElements = document.querySelectorAll('[data-admin-element="true"]');
      adminElements.forEach(adminElement => {
         if (document.querySelector('[data-name="controlPanelSwitch"]').checked == false) {
            adminElement.classList.add('_invisible');
            console.log(adminElement);
         }
         if (document.querySelector('[data-name="controlPanelSwitch"]').checked == true) {
            adminElement.classList.remove('_invisible');
            console.log(adminElement);
         }
      })
   }
}