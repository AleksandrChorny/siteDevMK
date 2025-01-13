import * as stileMenu from "./stileCreateMenu.js";
import * as sectionSelectPanel from "./sectionSelectPanel.js";
import * as sectionSelectMenu from "./sectionSelectMenu.js";
import * as sectionCreateMenu from "./sectionCreateMenu.js";
import * as sectionModerationMenu from "./sectionCreateItemMenu.js";

// ___________________Max________________________

import * as sectionControlPanel from "./sectionControlPanel.js";
import * as sectionEditMenu from "./sectionEditMenu.js";
import * as sectionUpdMenu from "./sectionUpdMenu.js";

import * as pageCreate from "./pageCreate.js";


// import * as sectionModerationMenu from "./sectionModerationMenu.js";
// import * as pageControlPanel from "./pageControlPanel.js";
// import * as sectionMenu from "./sectionMenu.js";


//import * as adminTool from "./adminTool.js";
import * as inputs from "./inputs.js";

//import * as sectionMenu from "./sectionMenu.js";
//import * as sectionSettingsMenu from "./sectionSettingsMenu.js";
//import * as blocks from "./blocks.js";
//import * as blockSelectMenu from "./blockSelectMenu.js";
//import * as blockModerationMenu from "./blockModerationMenu.js";
//import * as blockUploadFilesMenu from "./blockUploadFilesMenu.js";
//import * as teamplateSettings from "./teamplateSettings.js";
////import * as styleSelectMenu from "./styleSelectMenu.js";
//import * as HeadMenu from "./headSettingsMenu.js";
//import * as modalWindow from "./modalWindow.js";


import * as fetchUrl from "./fetchUrl.js";
//console.log(new URLSearchParams(document.location.search).get("view"));

sectionModerationMenu.viewOnload();

//let age = parseInt(params.get("age"), 10)
document.addEventListener('click', (event) => {
   stileMenu.viewStileCreateMenu(event);
   sectionSelectPanel.viewSectionSelectMenu(event);
   sectionSelectMenu.close(event);
   sectionSelectMenu.buttonViewSectionCreateMenu(event);
   sectionCreateMenu.close(event)

   sectionModerationMenu.actionItem(event);
   sectionModerationMenu.viewSectionCreateParamMenu(event);
   sectionModerationMenu.close(event);
// ________Max______

   sectionControlPanel.show(event);
   sectionEditMenu.view(event);
   sectionUpdMenu.viewAlarm(event);
   sectionUpdMenu.closeAlarm(event);

   sectionSelectMenu.viewAlarm(event);
   sectionSelectMenu.closeAlarm(event);
   sectionSelectMenu.viewUpdButtons(event);
   sectionSelectMenu.viewSectionSettingsModal(event);
   sectionSelectMenu.closeSectionSettingsModal(event);
   sectionSelectMenu.addClasses(event);
   
   pageCreate.viewPageCreateMenu(event);
   pageCreate.closePageCreateMenu(event);

   
   // sectionSelectMenu.viewUpdButtons(event);

   // teamplateSettings.viewTeamplateSelectMenu(event);







   // pageControlPanel.showStyleSelectMenu(event);
   // sectionMenu.view_select_section_menu(event);
   // //sectionMenu.viewBlockParam(event);
   // sectionMenu.viewParamUpdForm(event);
   // sectionMenu.viewCreateSectionMenu(event);
   // sectionMenu.viewSectionSettingsMenu(event);
   // //sectionMenu.addSectionNumberToDataSectionNamber(event);
   // sectionMenu.viewSectionModerationMenu(event);
   // sectionMenu.viewSectionCreateParamMenu(event);

   ////Max==========================
   ////sectionModerationMenu.sectionElemetButton(event);


   ////Max==========================

   // sectionMenu.viewUpdSectionParamMenu(event);
   // sectionMenu.viewSectionType(event);

   // sectionSettingsMenu.actionSettingsItem(event);

   // sectionModerationMenu.viewBlockSelectMenu(event);
   // sectionModerationMenu.viewParamCreateForm(event);
   // sectionModerationMenu.activeSettingsGroup(event);
   // sectionModerationMenu.view_section_update_files_menu(event);
   // sectionModerationMenu.close(event);
   // sectionModerationMenu.actionItem(event);

   // blockModerationMenu.viewParamCreateForm(event);
   // blockModerationMenu.activeSettingsGroup(event);
   // blockModerationMenu.view_block_update_files_menu(event);
   // blockModerationMenu.close(event);
   // blockModerationMenu.viewBlockUploadFilesMenu(event);

   // blockUploadFilesMenu.buttonClose(event);

   // blocks.viewBlockModerationMenu(event);
   // blocks.view_block_update_param_menu(event);
   // blocks.view_block_createParamMenu(event);
   // blocks.viewBlockCreateMenu(event);
   // blocks.viewblockSettingsMenu(event);

   ////blocks.viewblockUpdFilesMenu(event);
   ////blockUploadFilesMenu.viewUploadFilesMenu(event);

   // teamplateSettings.viewTeamplateSelectMenu(event);
   // teamplateSettings.viewTeamplateCreateMenu(event);
   //// ____Max____
   ////styleSelectMenu.viewStileSelectMenu(event);
   //////styleSelectMenu.show();

   // HeadMenu.viewheadSettingsMenu(event);
   // blockSelectMenu.closeBlockSelectMenu(event);
   // blockSelectMenu.viewBlockType(event);
   // blockSelectMenu.viewBlockModerationMenu(event);
   // modalWindow.close(event);
})
document.addEventListener('input', (event) => {
   //sectionCreateMenu.validateForm(event);
})

document.addEventListener('change', (event) => {
   // adminTool.controlPanelSwitch(event);
   

   inputs.typeFilesSetFileNameToLabel(event);
})

document.addEventListener('submit', (event) => {
   //sectionCreateMenu.sendForm(event);




   
   //sectionModerationMenu.someSingDo(event):
   //view-admin-menu {body.innerHTML += response}
   //add-in-DB {alert = response}
   //виклкикати експортовані функції в файлах менюшек
   if (event.target.closest('[data-preventdefoult="true"]')) {
      event.preventDefault();
      //sectionModerationMenu.addParamInDBandReloadPaje(event);
      //console.log(event);
      //const FORM = event.target.closest('form');
      //const URL = FORM.action;

      //let formData = new FormData(FORM);

      //fetchUrl.getUrlFormData(URL, formData)
      //   .then((response) => {
      //      //document.body.appendChild(response);
      //      //document.body.innerHTML += response;
      //   });
   }
});


//const editableElements = document.querySelectorAll('[edit="true"]');
//editableElements.forEach((element) => {
//   if (element.dataset.sectionId) {
//      //const id = element.dataset.sectionId;


//      //const controlPanel = document.querySelector('[data-section-id="' + id + '"]');

//      //controlPanel.style.position = "absolute";
//      //controlPanel.style.top = element.offsetTop + 30 + 'px';
//      //controlPanel.style.left = element.offsetLeft + 150 + 'px';
//   }

//});
//})

//document.addEventListener("mouseover", (event) => {
//   if (event.target.closest('[edit="true"]')) {
//      event.target.style.border = "solid, 1px, black"
//      //console.log(event.target);
//      let div = document.createElement("div");
//      div.classList.add('edit');
//      div.style.width = '15px';
//      div.style.height = '15px';
//      div.style.background = '#00e4ff';
//      div.style.borderRadius = '50%';
//      div.style.position = 'absolute'
//      div.style.top = event.target.offsetTop + 5 + 'px';
//      div.style.left = event.target.offsetLeft + 20 + 'px';
//      div.style.zIndex = 999;
//      const edit = document.querySelectorAll('.edit');
//      edit.forEach(e => {
//         e.remove();
//      });
//      document.body.appendChild(div);
//   }
//});
//document.addEventListener("mouseout", (event) => {
//   event.target.style.border = "";

//   if (event.target.closest('[edit="true"]')) {
//      const q = event.target.closest('[edit="true"]').nextElementSibling
//      //console.log(q)
//      //console.log(q.classList.contains('edit'));

//      //if (q.classList.contains('edit')) {
//      //   q.remove();
//      //}
//   }
//})
//!console.log(navigator.clipboard.writeText('text'))
