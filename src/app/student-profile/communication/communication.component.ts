import { Component } from "@angular/core";
import { PerformanceFilterComponent } from "../../dynamic-component/performance-filter/performance-filter.component";
import {
  MatDialog,
  MatDialogRef
} from "@angular/material";

@Component({
  selector: "profile-communication",
  templateUrl: "./communication.component.html",
  styleUrls: ["../student-profile.component.scss"]
})
export class ProfileCommunicationComponent {
  performanceFilterDialogRef: MatDialogRef<PerformanceFilterComponent>;

  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.performanceFilterDialogRef = this.dialog.open(
      PerformanceFilterComponent,
      {
        width: "30%",
        height: "71vh"
      }
    );
    this.performanceFilterDialogRef.disableClose = true;
  }

  ngOnInit() {
    this.openDialog();
  }
}
