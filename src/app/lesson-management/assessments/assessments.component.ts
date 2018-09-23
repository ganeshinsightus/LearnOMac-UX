import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "assessments",
  templateUrl: "./assessments.component.html",
  styleUrls: ["../lesson-management.component.scss"]
})
export class AssessmentsComponent {
  showScroll: boolean;
  showScrolls: boolean;
  //profileFilterDialogRef: MatDialogRef<ProfileFilterComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {
   // this.openDialog();
  }
  
 
}
