import * as adminTool from "./adminTool.js";
import * as controlPanel from "./controlPanel.js";
import * as sectionMenu from "./sectionMenu.js";
import * as sectionSettingsMenu from "./sectionSettingsMenu.js";
import * as sectionModerationMenu from "./sectionModerationMenu.js";
import * as blocks from "./blocks.js";
import * as teamplateSettings from "./teamplateSettings.js";
import * as Stile from "./stileSelectMenu.js";
import * as StileMenu from "./stileCreateMenu.js";
import * as HeadMenu from "./headSettingsMenu.js";
import * as blockMenu from "./blockSelectMenu.js";
import * as modalWindow from "./modalWindow.js";

document.addEventListener('click', (event) => {
   controlPanel.viewControlPanel(event);

   sectionMenu.view_select_section_menu(event);
   sectionMenu.viewBlockParam(event);
   sectionMenu.viewParamUpdForm(event);
   sectionMenu.viewCreateSectionMenu(event);
   sectionMenu.viewSectionSettingsMenu(event);
   //sectionMenu.addSectionNumberToDataSectionNamber(event);
   sectionMenu.view_section_update_files_menu(event);
   sectionMenu.viewSectionModerationMenu(event);
   sectionMenu.viewSectionCreateParamMenu(event);
   sectionMenu.viewUpdSectionParamMenu(event);
   sectionMenu.viewSectionType(event);

   sectionSettingsMenu.actionSettingsItem(event);

   sectionModerationMenu.viewParamCreateForm(event);
   sectionModerationMenu.activeSettingsGroup(event);
   sectionModerationMenu.close(event);


   blocks.viewBlockModerationMenu(event);
   blocks.view_block_update_param_menu(event);
   blocks.view_block_createParamMenu(event);
   blocks.viewBlockCreateMenu(event);
   blocks.viewblockSettingsMenu(event);

   blocks.viewblockUpdFilesMenu(event);

   teamplateSettings.viewTeamplateSelectMenu(event);
   teamplateSettings.viewTeamplateCreateMenu(event);
   // ____Max____
   Stile.viewStileSelectMenu(event);
   StileMenu.viewStileCreateMenu(event);

   HeadMenu.viewheadSettingsMenu(event);
   blockMenu.viewblockSelectMenu(event);
   blockMenu.viewBlockType(event);
   modalWindow.close(event);
})

document.addEventListener('change', (event) => {
   adminTool.controlPanelSwitch(event);

   sectionMenu.setFileNameInCreateSectionMenu();
})
console.log(navigator.clipboard.writeText('text'))
