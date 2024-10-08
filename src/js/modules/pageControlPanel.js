//import style select menu JS
import * as styleSelectMenu from "./styleSelectMenu.js";

//export function show style select menu
export function showStyleSelectMenu(event) {
   // if button name "show-style-select-menu"
   if (event.target.closest('[name="show-style-select-menu"]')) {

      //show style select menu
      styleSelectMenu.show();
   }
}