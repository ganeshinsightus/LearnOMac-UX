import { AcademicComponent } from "./academic/academic.component";
import { AwardComponent } from "./awards/awards.component";
import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ProfileFilterComponent } from "../../dynamic-component/profile-filter/profile-filter.component";
import { Router } from "@angular/router";
import { SportsComponent } from "./sports/sports.component";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["../student-profile.component.scss"]
})
export class ProfileComponent {
  showScroll: boolean;
  showScrolls: boolean;
  profileFilterDialogRef: MatDialogRef<ProfileFilterComponent>;
  academicDialogRef: MatDialogRef<AcademicComponent>;
  awardDialogRef: MatDialogRef<AwardComponent>;
  sportsDialogRef: MatDialogRef<SportsComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.profileFilterDialogRef = this.dialog.open(ProfileFilterComponent, {
      width: "30%",
      height: "57vh"
    });
    this.profileFilterDialogRef.disableClose = true;
  }

  openAcademicDialog() {
    this.academicDialogRef = this.dialog.open(AcademicComponent, {
      width: "50%",
      height: "60vh"
    });
    this.academicDialogRef.disableClose = true;
  }

  openAwardDialog() {
    this.academicDialogRef = this.dialog.open(AwardComponent, {
      width: "50%",
      height: "60vh"
    });
    this.academicDialogRef.disableClose = true;
  }

  openSportsDialog() {
    this.academicDialogRef = this.dialog.open(SportsComponent, {
      width: "50%",
      height: "60vh"
    });
    this.academicDialogRef.disableClose = true;
  }
}
