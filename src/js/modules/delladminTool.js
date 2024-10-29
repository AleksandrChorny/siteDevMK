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

export function elementPosition() {
   const editableElements = document.querySelectorAll('[contenteditable="true"]');
   editableElements.forEach((element) => {
      if (element.dataset.sectionId) {
         const id = element.dataset.sectionId;
         const sectionControlPanel = document.querySelector('[data-section-id="' + id + '"]');
         const x = element.getBoundingClientRect().x;
         const y = element.getBoundingClientRect().y;
         sectionControlPanel.style.position = "absolute";
         sectionControlPanel.style.top = y + "px";
         //sectionControlPanel.style.left = '50px';
         console.log(x, y);

      }
   });
}