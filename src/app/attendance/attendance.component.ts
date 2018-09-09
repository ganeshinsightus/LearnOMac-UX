import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AbsenceDialogComponent } from "./absence-dialog/absence-dialog.component";
import { ClassroomFilterComponent } from "../dynamic-component/classroom-filter/classroom-filter.component";

@Component({
  templateUrl: "attendance.component.html",
  styleUrls: ["attendance.component.scss"]
})
export class AttendanceComponent {
  viewDialogRef: MatDialogRef<AbsenceDialogComponent>;
  filterPopupDialogRef: MatDialogRef<ClassroomFilterComponent>;

  constructor(private dialog: MatDialog) {}


  ngOnInit(){
      this.openDialog()
  }

  openDialog() {
    this.filterPopupDialogRef = this.dialog.open(ClassroomFilterComponent, {
      width: "30%",
      height: "48vh"
    });
    this.filterPopupDialogRef.componentInstance.showAttendance = true;
    this.filterPopupDialogRef.disableClose = true;
  }

  openViewAbsentees() {
    this.viewDialogRef = this.dialog.open(AbsenceDialogComponent, {
      width: "40%",
      height: "60vh"
    });
    this.viewDialogRef.disableClose = true;
  }
}
