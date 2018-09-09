import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ProfileFilterComponent } from "../../dynamic-component/profile-filter/profile-filter.component";
import { Router } from "@angular/router";

@Component({
  selector: "assessments",
  templateUrl: "./assessments.component.html",
  styleUrls: ["../lesson-management.component.scss"]
})
export class AssessmentsComponent {
  showScroll: boolean;
  showScrolls: boolean;
  profileFilterDialogRef: MatDialogRef<ProfileFilterComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {
   // this.openDialog();
  }
  
  openDialog() {
    this.profileFilterDialogRef = this.dialog.open(ProfileFilterComponent, {
      width: "30%",
      height: "60vh"
    });
    this.profileFilterDialogRef.disableClose = true;
  }

}
