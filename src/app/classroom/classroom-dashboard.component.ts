import { Component } from "@angular/core";
import {
  MatDialogRef,
  MatDialog
} from "@angular/material";
import { ClassroomFilterComponent } from "../dynamic-component/filter-popup/filter-popup.component";

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
      height: "57vh"
    });
    this.filterPopupDialogRef.disableClose = true;
  }
}
