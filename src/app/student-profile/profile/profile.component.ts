import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { AcademicDialogComponent } from "./academic-dialog/academic-dialog.component";
import { AwardsDialogComponent } from "./awards-dialog/awards-dialog.component";
import { SportsDialogComponent } from "./sports-dialog/sports-dialog.component";
import { InterestsDialogComponent } from "./interests-dialog/interests-dialog.component";
import { FilterComponent } from "../../common-component/filter/filter.component";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["../student-profile.component.scss"]
})
export class ProfileComponent {
  showScroll: boolean;
  showScrolls: boolean;
  profileFilterDialogRef: MatDialogRef<FilterComponent>;
  academicDialogRef: MatDialogRef<AcademicDialogComponent>;
  awardDialogRef: MatDialogRef<AwardsDialogComponent>;
  sportsDialogRef: MatDialogRef<SportsDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {
    this.openDialog();
  }

  openAcademicList() {
    this.routes.navigateByUrl("/student/profile/academic");
  }
  openAwardsList() {
    this.routes.navigateByUrl("/student/profile/awards");
  }
  openSportsList() {
    this.routes.navigateByUrl("/student/profile/sports");
  }
  openDialog() {
    this.profileFilterDialogRef = this.dialog.open(FilterComponent, {
      width: "55%",
      height: "calc(59vh)"
    });
    this.profileFilterDialogRef.componentInstance.showProfile = true;
    this.profileFilterDialogRef.disableClose = true;
  }

  openAcademicDialog() {
    this.academicDialogRef = this.dialog.open(AcademicDialogComponent, {
      width: "50%",
      height: "calc(70vh)"
    });
    this.academicDialogRef.disableClose = true;
  }

  openAwardDialog() {
    this.academicDialogRef = this.dialog.open(AwardsDialogComponent, {
      width: "50%",
      height: "calc(70vh)"
    });
    this.academicDialogRef.disableClose = true;
  }

  openSportsDialog() {
    this.academicDialogRef = this.dialog.open(SportsDialogComponent, {
      width: "50%",
      height: "calc(83vh)"
    });
    this.academicDialogRef.disableClose = true;
  }

  openInterestsDialog() {
    this.academicDialogRef = this.dialog.open(InterestsDialogComponent, {
      width: "50%",
      height: "calc(70vh)"
    });
    this.academicDialogRef.disableClose = true;
  }
}
