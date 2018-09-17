import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { FilterComponent } from "../../common-component/filter/filter.component";

@Component({
  selector: "lesson-tracking",
  templateUrl: "./lesson-tracking.component.html",
  styleUrls: ["../lesson-management.component.scss"]
})
export class LessonTrackingComponent {
  showScroll: boolean;
  showScrolls: boolean;
  profileFilterDialogRef: MatDialogRef<FilterComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {
  //  this.openDialog();
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  openDialog() {
    this.profileFilterDialogRef = this.dialog.open(FilterComponent, {
      width: "55%",
      height: "calc(58vh)"
    });
    this.profileFilterDialogRef.componentInstance.showLessonPlan = true;
    this.profileFilterDialogRef.disableClose = true;
  }

}
