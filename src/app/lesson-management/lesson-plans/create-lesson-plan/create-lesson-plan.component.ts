import { Component, ViewChild } from "@angular/core";
import { MatOption, MatDialogRef, MatDialog } from "@angular/material";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { CollectionDialogComponent } from "../collection-grid-dialog/collection-grid-dialog.component";

@Component({
  templateUrl: "./create-lesson-plan.component.html",
  styleUrls: ["./create-lesson-plan.component.scss"]
})
export class CreateLessonPlanComponent {
  isLinear = false;
  hideData:boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  @ViewChild("allSelected")
  private allSelected: MatOption;
  collectionDialogRef:MatDialogRef<CollectionDialogComponent>;

  constructor(private _formBuilder: FormBuilder, private routes: Router,private dialog:MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      student: new FormControl(["", Validators.required])
    });
    this.fourthFormGroup = this._formBuilder.group({
      // student: new FormControl(["", Validators.required])
    });
  }
  openWebView(){
    this.hideData = true;
  }

  openResourcesDialog(){
    this.hideData = false;
    this.collectionDialogRef = this.dialog.open(
      CollectionDialogComponent,
      {
        width: "60%",
        height: "60vh"
      }
    );
    //this.contentDialogRef.componentInstance.content = true;
    this.collectionDialogRef.disableClose = true;
  }

   onBack() {
    this.routes.navigateByUrl("/lesson/plans");
  }
}
