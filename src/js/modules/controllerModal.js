export function view(element) {
   element.classList.toggle('_view');
}

export function close(element) {
   element.classList.remove('_view');
}

//function message(message) {
//   const div = document.createElement('div');
//   div.setAttribute('class', 'message _view');
//   div.setAttribute('data-name', 'data-message');

//   const button = document.createElement('button');
//   button.setAttribute('class', 'massege__close');
//   div.append(button);
//   div.append(message);
//   console.log(div);
//}

//export function viewMassage(event, message) {
//   if (message) {
//      message(message)
//   }

//   if (event.target.closest('.massege__close')) {
//      close(event.target.closest('.message'))
//   }
//}