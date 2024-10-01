export function view(element) {
   function isInPage(node) {
      return node === document.body ? false : document.body.contains(node);
   }
   console.log(isInPage(element))
   if (document.body.contains(element)) {
      element.classList.toggle('_view');
   }
}

export function close(element) {
   element.classList.remove('_view');
}

export function activate(element) {
   element.classList.add('_active');
}
export function deActivate(element) {
   element.classList.remove('_active');
}

