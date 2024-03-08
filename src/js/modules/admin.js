import * as adminTool from "./adminTool.js";
import * as action from "./action.js";
import * as controlPanel from "./controlPanel.js";
import * as sectionMenu from "./sectionMenu.js";
import * as sectionModerationMenu from "./sectionModerationMenu.js";
import * as blocks from "./blocks.js";
import * as teamplateSettings from "./teamplateSettings.js";
import * as Stile from "./stileSelectMenu.js";
import * as StileMenu from "./stileCreateMenu.js";
import * as HeadMenu from "./headSettingsMenu.js";
import * as blockMenu from "./blockSelectMenu.js";





document.addEventListener('click', (event) => {
   action.view(event)
   controlPanel.viewControlPanel(event);

   sectionMenu.view_select_section_menu(event);
   sectionMenu.viewBlockParam(event);
   sectionMenu.viewParamUpdForm(event);
   sectionMenu.viewCreateSectionMenu(event);
   sectionMenu.viewSectionModerationMenu(event);
   sectionMenu.viewSectionSettingsMenu(event);
   //sectionMenu.addSectionNumberToDataSectionNamber(event);
   sectionMenu.view_section_update_files_menu(event);
   sectionMenu.viewSectionCreateParamMenu(event);
   sectionMenu.viewUpdSectionParamMenu(event);

   sectionModerationMenu.viewParamCreateForm(event);


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
})

document.addEventListener('change', (event) => {
   adminTool.controlPanelSwitch(event);

   sectionMenu.setFileNameInCreateSectionMenu();
})
