import { NgModule } from "@angular/core";
import { jqxDropDownListComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist";
import { TreeNodeCheckBoxComponent } from "./common-component/tree-node-checkbox/tree-node-checkbox.component";
import { jqxTreeComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
import { jqxDropDownButtonComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton";
import { jqxCheckBoxComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox";
import { jqxPanelComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel";
import { jqxCalendarComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar";
import { TreeNodeComponent } from "./common-component/tree-node/tree-node.component";
import { NgMaterialModule } from "./ng-material.module";
import { DropdownBoxComponent } from "./common-component/dropdown-tree/dropdown-tree.component";
import { CalendarjqxComponent } from "./common-component/calendar/calendar-jqx.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { jqxListBoxComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox";
import { jqxButtonComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons";
import { jqxMenuComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu";

@NgModule({
  declarations: [
    TreeNodeComponent,
    TreeNodeCheckBoxComponent,
    DropdownBoxComponent,
    CalendarjqxComponent,
    jqxDropDownListComponent,
    jqxTreeComponent,
    jqxDropDownButtonComponent,
    jqxCheckBoxComponent,
    jqxListBoxComponent,
    jqxPanelComponent,
    jqxCalendarComponent,
    jqxTreeGridComponent,
    jqxButtonComponent,
    jqxMenuComponent
  ],
  imports: [NgMaterialModule],
  exports: [
    TreeNodeComponent,
    TreeNodeCheckBoxComponent,
    DropdownBoxComponent,
    CalendarjqxComponent,
    jqxDropDownListComponent,
    jqxTreeComponent,
    jqxDropDownButtonComponent,
    jqxCheckBoxComponent,
    jqxPanelComponent,
    jqxListBoxComponent,
    jqxTreeGridComponent,
    jqxMenuComponent
  ]
})
export class NgJQWidgetsModule {}
