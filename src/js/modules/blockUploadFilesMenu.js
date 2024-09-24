export function viewUploadFilesMenu(event) {
   const menu = document.querySelector('[data-name="block-upload-files-menu"]');
   if (menu) {
      menu.classList.add('_view');
   }
}

export function hideUploadFilesMenu() {
   const menu = document.querySelector('[data-name="block-upload-files-menu"]');
   if (menu) {
      menu.classList.remove('_view');

   }
}

export function buttonClose(event) {
   if (event.target.closest('[name="btn-close-block-upload-menu"]')) {
      this.hideUploadFilesMenu();
   }
}

export function setBlockId(id) {
   const menu = document.querySelector('[data-name="block-upload-files-menu"]');
   if (menu) {
      menu.querySelector('input[name="block_id"]').value = id;
   }
}