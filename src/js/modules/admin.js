import * as adminTool from "./adminTool.js";
import * as inputs from "./inputs.js";
import * as controlPanel from "./controlPanel.js";
import * as sectionMenu from "./sectionMenu.js";
import * as sectionSettingsMenu from "./sectionSettingsMenu.js";
import * as sectionModerationMenu from "./sectionModerationMenu.js";
import * as blocks from "./blocks.js";
import * as blockSelectMenu from "./blockSelectMenu.js";
import * as blockModerationMenu from "./blockModerationMenu.js";
import * as blockUploadFilesMenu from "./blockUploadFilesMenu.js";
import * as teamplateSettings from "./teamplateSettings.js";
import * as Stile from "./stileSelectMenu.js";
import * as StileMenu from "./stileCreateMenu.js";
import * as HeadMenu from "./headSettingsMenu.js";
import * as modalWindow from "./modalWindow.js";


import * as fetchUrl from "./fetchUrl.js";

document.addEventListener('click', (event) => {
   if (event.target.closest('[data-preventdefoult="true"]')) {
      event.preventDefault();
      const FORM = event.target.closest('form');
      const TITLE = FORM.title;
      const URL = FORM.action;

      let formData = new FormData(FORM);

      fetchUrl.getUrlFormData(URL, formData)
         .then((response) => {
            //console.log(response);
            document.body.innerHTML += response;
         });
   }

   if (event.target.closest('[data-name="btn-view-block-create-menu"]')) {
      const STYLE_CREATE_MENU = document.querySelector('[data-name="stile-create-menu"]');
      if (STYLE_CREATE_MENU) {
         STYLE_CREATE_MENU.classList.add('_view');
      } else {
         alert('style create menu not found');
      }
   }

   controlPanel.viewControlPanel(event);

   sectionMenu.view_select_section_menu(event);
   //sectionMenu.viewBlockParam(event);
   sectionMenu.viewParamUpdForm(event);
   sectionMenu.viewCreateSectionMenu(event);
   sectionMenu.viewSectionSettingsMenu(event);
   //sectionMenu.addSectionNumberToDataSectionNamber(event);
   sectionMenu.viewSectionModerationMenu(event);
   sectionMenu.viewSectionCreateParamMenu(event);
   sectionMenu.viewUpdSectionParamMenu(event);
   sectionMenu.viewSectionType(event);

   sectionSettingsMenu.actionSettingsItem(event);

   sectionModerationMenu.viewBlockSelectMenu(event);
   sectionModerationMenu.viewParamCreateForm(event);
   sectionModerationMenu.activeSettingsGroup(event);
   sectionModerationMenu.view_section_update_files_menu(event);
   sectionModerationMenu.close(event);

   blockModerationMenu.viewParamCreateForm(event);
   blockModerationMenu.activeSettingsGroup(event);
   blockModerationMenu.view_block_update_files_menu(event);
   blockModerationMenu.close(event);
   blockModerationMenu.viewBlockUploadFilesMenu(event);

   blockUploadFilesMenu.buttonClose(event);

   blocks.viewBlockModerationMenu(event);
   blocks.view_block_update_param_menu(event);
   blocks.view_block_createParamMenu(event);
   blocks.viewBlockCreateMenu(event);
   blocks.viewblockSettingsMenu(event);

   //blocks.viewblockUpdFilesMenu(event);
   //blockUploadFilesMenu.viewUploadFilesMenu(event);

   teamplateSettings.viewTeamplateSelectMenu(event);
   teamplateSettings.viewTeamplateCreateMenu(event);
   // ____Max____
   Stile.viewStileSelectMenu(event);
   StileMenu.viewStileCreateMenu(event);

   HeadMenu.viewheadSettingsMenu(event);
   blockSelectMenu.closeBlockSelectMenu(event);
   blockSelectMenu.viewBlockType(event);
   blockSelectMenu.viewBlockModerationMenu(event);
   modalWindow.close(event);
})

document.addEventListener('change', (event) => {
   adminTool.controlPanelSwitch(event);

   inputs.typeFilesSetFileNameToLabel(event);
})


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
