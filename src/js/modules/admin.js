import * as controlPanel from "./controlPanel.js";
import * as sectionParam from "./sectionParam.js";
import * as sectionMenu from "./sectionMenu.js";
import * as blocks from "./blocks.js";
import * as teamplateSettings from "./teamplateSettings.js";

document.addEventListener('click', (event) => {
   controlPanel.viewControlPanel(event);

   sectionMenu.viewSelectSectionMenu(event);
   sectionMenu.viewCreateSectionMenu(event);
   //sectionMenu.checkSelectedSection(event);
   sectionMenu.addSectionNumberToDataSectionNamber(event);
   sectionMenu.viewUpdSectionMenu(event);

   blocks.viewUpdBlockParamMenu(event);

   sectionParam.viewUpdSectionParamMenu(event);
   sectionParam.viewCreateSectionParamMenu(event);

   teamplateSettings.viewSelectTeamplateMenu(event);
   teamplateSettings.viewCreateTeamplateMenu(event);
})

document.addEventListener('change', () => {
   sectionMenu.setFileName();
})
