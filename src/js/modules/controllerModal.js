export function view(element) {
   console.log(element)
   element.classList.toggle('_view');
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