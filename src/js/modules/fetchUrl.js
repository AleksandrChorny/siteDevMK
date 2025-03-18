
const LOCAL_API_URL = "http://localhost:5500/files/";
const SERVER_API_URL = "https://yourserver.com";

const isLocal = window.location.hostname === "localhost";

const CONFIG = {
   apiUrl: isLocal ? LOCAL_API_URL : SERVER_API_URL,
   paths: {
      //виклик
      //fetchUrl.loadContent("selectSectionMenu", { sectionNumber: nuberOfSection });
      section_selectMenu: isLocal ? "section_selectMenu.html" : "/adminModule/section_selectMenu/",
      section_editMenu: isLocal ? "section_editMenu.html" : "/adminModule/section_editMenu/",
      page_createMenu: isLocal ? "page_createMenu.html" : "/adminModule/page_createMenu/",
      section_createMenu: isLocal ? "section_createMenu.html" : "/adminModule/section_createMenu/",
      section_moderationMenu: isLocal ? "section_moderationMenu.html" : "/adminModule/section_moderationMenu/",
      alarm_sectionSelectModerationView: isLocal ? "alarm_sectionSelectModerationView.html" : "/adminModule/alarm_sectionSelectModerationView/",
      blocks_moderationMenu: isLocal ? "blocks_moderationMenu.html" : "/adminModule/blocks_moderationMenu/",
      section_modalWindow: isLocal ? "section_modalWindow.html" : "/adminModule/section_modalWindow/",
      block_createModalWindow: isLocal ? "block_createModalWindow.html" : "/adminModule/block_createModalWindow/",




      modal2: isLocal ? "modal2.html" : "/adminModule/modal2/",
   }
};

export function loadContent(section, postData = null) {
   const isLocal = window.location.hostname === "localhost";
   const url = CONFIG.apiUrl + (CONFIG.paths[section] || "");

   const options = isLocal
      ? {} // GET-запит для локального середовища
      : {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(postData)
      };

   fetch(url, options)
      .then(response => response.text())
      .then(html => {
         document.body.insertAdjacentHTML("beforeend", html);
      })
      .catch(error => console.error(`Помилка завантаження ${section}:`, error));
}



//!Видалити після відладки
//export async function getUrlFormData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//      method: 'POST', // *GET, POST, PUT, DELETE, etc.
//      mode: 'cors', // no-cors, *cors, same-origin
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//      credentials: 'same-origin', // include, *same-origin, omit
//      headers: {
//         //'Content-Type': 'application/json'
//         //'Content-Type': 'application/x-www-form-urlencoded',
//         //'Content-Type': 'multipart/form-data',
//      },
//      redirect: 'follow', // manual, *follow, error
//      referrerPolicy: 'no-referrer', // no-referrer, *client
//      //body: JSON.stringify(data) // body data type must match "Content-Type" header
//      body: data // body data type must match "Content-Type" header
//   });
//   return await response.text(); // parses JSON response into native JavaScript objects
//}

//export async function getUrlJSON(url = '', data = null) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//      method: 'POST', // *GET, POST, PUT, DELETE, etc.
//      mode: 'cors', // no-cors, *cors, same-origin
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//      credentials: 'same-origin', // include, *same-origin, omit
//      headers: {

//         'Content-Type': 'application/json'
//         //'Content-Type': 'application/x-www-form-urlencoded',
//      },
//      redirect: 'follow', // manual, *follow, error
//      referrerPolicy: 'no-referrer', // no-referrer, *client
//      body: JSON.stringify(data) // body data type must match "Content-Type" header
//      //body: data // body data type must match "Content-Type" header
//   });
//   //console.log(response);
//   return await response.text(); // parses JSON response into native JavaScript objects
//}

//export async function htmlIncludeForDeveping(url) {
//   fetch(url)
//      .then((response) => {
//         return response.text();
//      })
//      .then((html) => {
//         document.body.innerHTML += html;
//      });
//}
//!Видалити після відладки
