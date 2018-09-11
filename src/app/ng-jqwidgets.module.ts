import { NgModule } from "@angular/core";
import { jqxDropDownListComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist";
import { TreeNodeCheckBoxComponent } from "./dynamic-component/tree-node-checkbox/tree-node-checkbox.component";
import { jqxTreeComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
import { jqxDropDownButtonComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton";
import { jqxCheckBoxComponent } from "../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox";
import { jqxPanelComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel";
import { jqxCalendarComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar";
import { TreeNodeComponent } from "./dynamic-component/tree-node/tree-node.component";
import { NgMaterialModule } from "./ng-material.module";
import { DropdownBoxComponent } from "./dynamic-component/dropdown-tree/dropdown-tree.component";
import { CalendarjqxComponent } from "./dynamic-component/calendar/calendar-jqx.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

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
    jqxPanelComponent,
    jqxCalendarComponent,
    jqxTreeGridComponent
  ],
  imports: [
    NgMaterialModule
  ],
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
    jqxTreeGridComponent
  ]
})
export class NgJQWidgetsModule {}
