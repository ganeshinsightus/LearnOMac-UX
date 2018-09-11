import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ProfileFilterComponent } from "../../dynamic-component/profile-filter/profile-filter.component";
import { Router } from "@angular/router";

@Component({
  selector: "lesson-tracking",
  templateUrl: "./lesson-tracking.component.html",
  styleUrls: ["../lesson-management.component.scss"]
})
export class LessonTrackingComponent {
  showScroll: boolean;
  showScrolls: boolean;
  profileFilterDialogRef: MatDialogRef<ProfileFilterComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {
  //  this.openDialog();
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  openDialog() {
    this.profileFilterDialogRef = this.dialog.open(ProfileFilterComponent, {
      width: "55%",
      height: "34vh"
    });
    this.profileFilterDialogRef.disableClose = true;
  }

}
