export function typeFilesSetFileNameToLabel(event) {
   if (event.target.files && event.target.files.length > 0) {

      const fileName = event.target.files[0].name;
      if (event.target.id) {
         const inputId = event.target.id;
         const label = document.querySelector(`label[for=${inputId}]`);
         label.innerHTML = fileName;
      }
   }

   //label.innerHTML = label.dataset['name'];
}