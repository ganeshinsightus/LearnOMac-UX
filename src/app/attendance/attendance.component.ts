import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AbsenceDialogComponent } from "./absence-dialog/absence-dialog.component";
import { FilterService } from "../common-services/filter.service";
import { FilterDialogService } from "../common-services/filter-dialog.service.";

@Component({
  templateUrl: "attendance.component.html",
  styleUrls: ["attendance.component.scss"]
})
export class AttendanceComponent {
  viewDialogRef: MatDialogRef<AbsenceDialogComponent>;
  constructor(private dialog: MatDialog , private filter:FilterDialogService) {
   this.filter.openAttendanceFilter()
  }

  openViewAbsentees() {
    this.viewDialogRef = this.dialog.open(AbsenceDialogComponent, {
      width: "55%",
      height: "cal(47vh)"
    });
    this.viewDialogRef.disableClose = true;
  }
}
