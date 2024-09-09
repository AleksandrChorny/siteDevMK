import * as adminTool from "./adminTool.js";
import * as inputs from "./inputs.js";
import * as controlPanel from "./controlPanel.js";
import * as sectionMenu from "./sectionMenu.js";
import * as sectionSettingsMenu from "./sectionSettingsMenu.js";
import * as sectionModerationMenu from "./sectionModerationMenu.js";
import * as blocks from "./blocks.js";
import * as blockSelectMenu from "./blockSelectMenu.js";
import * as blockModerationMenu from "./blockModerationMenu.js";
import * as teamplateSettings from "./teamplateSettings.js";
import * as Stile from "./stileSelectMenu.js";
import * as StileMenu from "./stileCreateMenu.js";
import * as HeadMenu from "./headSettingsMenu.js";
import * as modalWindow from "./modalWindow.js";

document.addEventListener('click', (event) => {
   controlPanel.viewControlPanel(event);

   sectionMenu.view_select_section_menu(event);
   sectionMenu.viewBlockParam(event);
   sectionMenu.viewParamUpdForm(event);
   sectionMenu.viewCreateSectionMenu(event);
   sectionMenu.viewSectionSettingsMenu(event);
   //sectionMenu.addSectionNumberToDataSectionNamber(event);
   sectionMenu.viewSectionModerationMenu(event);
   sectionMenu.viewSectionCreateParamMenu(event);
   sectionMenu.viewUpdSectionParamMenu(event);
   sectionMenu.viewSectionType(event);

   blockModerationMenu.viewParamCreateForm(event);
   blockModerationMenu.activeSettingsGroup(event);
   blockModerationMenu.view_block_update_files_menu(event);
   blockModerationMenu.close(event);
   sectionSettingsMenu.actionSettingsItem(event);

   sectionModerationMenu.viewBlockSelectMenu(event);
   sectionModerationMenu.viewParamCreateForm(event);
   sectionModerationMenu.activeSettingsGroup(event);
   sectionModerationMenu.view_section_update_files_menu(event);
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
   blockSelectMenu.closeBlockSelectMenu(event);
   blockSelectMenu.viewBlockType(event);
   blockSelectMenu.viewBlockModerationMenu(event);
   modalWindow.close(event);
})

document.addEventListener('change', (event) => {
   adminTool.controlPanelSwitch(event);

   inputs.typeFilesSetFileNameToLabel(event);
})
//!console.log(navigator.clipboard.writeText('text'))
