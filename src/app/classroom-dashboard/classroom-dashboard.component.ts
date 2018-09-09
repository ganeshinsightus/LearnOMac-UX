import { ClassroomFilterComponent } from "../dynamic-component/classroom-filter/classroom-filter.component";
import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  templateUrl: "classroom-dashboard.component.html",
  styleUrls: ["classroom-dashboard.component.scss"]
})
export class ClassroomDashboardComponent {
  filterPopupDialogRef: MatDialogRef<ClassroomFilterComponent>;

  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    this.openDialog();
  }
  openDialog() {
    this.filterPopupDialogRef = this.dialog.open(ClassroomFilterComponent, {
      width: "30%",
      height: "60vh"
    });
    this.filterPopupDialogRef.componentInstance.showClassroom = true;
    this.filterPopupDialogRef.disableClose = true;
  }
}
