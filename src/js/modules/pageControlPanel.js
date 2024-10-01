//import style select menu JS
import * as styleSelectMenu from "./styleSelectMenu.js";

//if
export function showStyleSelectMenu(event) {
   console.log(event.target.closest('button').name);
   if (event.target.closest('button').name == 'show-style-select-menu') {
      styleSelectMenu.show();
   }
}