import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";
import { RouterModule } from "@angular/router";
import { AttendanceComponent } from "./attendance.component";
import { AbsenceDialogComponent } from "./absence-dialog/absence-dialog.component";

@NgModule({
  declarations: [
    AttendanceComponent,
    AbsenceDialogComponent
  ],
  imports: [
    RouterModule,
    NgMaterialModule,
    NgJQWidgetsModule,
  ],
  exports: [
  ],
  entryComponents: [
    AbsenceDialogComponent
  ]
})
export class AttendanceModule {}
