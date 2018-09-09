import { Component, ViewChild } from "@angular/core";
import { MatOption, MatDialogRef, MatDialog } from "@angular/material";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { SourceDialogComponent } from "../source-dialog/source-dialog.component";

@Component({
  templateUrl: "./learning-path-details.component.html",
  styleUrls: ["./learning-path-details.component.scss"]
})
export class LearningPathDetailsComponent {
  isLinear = false;
  
  firstFormGroup:FormGroup;

  secondFormGroup:FormGroup;

  viewDialogRef: MatDialogRef<SourceDialogComponent>;

  step = 0;

  
  @ViewChild("allSelected")
  private allSelected: MatOption;

  isAssignees:boolean = false;

  checkBox:boolean = false;

  threeStates:boolean = false;

  videoSource: any[] = [
    {
      label: "3 Videos",
      expanded: true,
      checkboxes: true,
      items: [
        {
          label: "Probability - Basics",
          selected: true
        },
        {
          label: "Probability - Real Life Video",
          selected: true
        },
        {
          label: "Probability - Brief Introduction",
          selected: true
        }
      ]
    }
  ];

  documentSource: any[] = [
    {
      label: "2 Document",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Probability Explanation pdf",
          selected: true
        },
        {
          label: "Probability Advance Concepts pdf",
          selected: true
        }
      ]
    }
  ];

  projectSource: any[] = [
    {
      label: "2 Activities",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Probability Problems",
          selected: true
        },
        {
          label: "Probability Advance Problems",
          selected: true
        }
      ]
    }
  ];

  otherSource: any[] = [
    {
      label: "2 Other Sources",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Logical games which related to Probability",
          selected: true
        },
        {
          label: "Mind Quiz - Probability",
          selected: true
        }
      ]
    }
  ];

  studentFilters = [
    {
      key: 1,
      value: "Ajith"
    },
    {
      key: 2,
      value: "Kumar"
    },
    {
      key: 3,
      value: "Karthik"
    },
    {
      key: 4,
      value: "Mukesh"
    }
  ];


  constructor(
    private dialog: MatDialog,
    private routes:Router
  ) {}

   setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  
  openVideoDialog() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "38vh"
    });
    this.viewDialogRef.componentInstance.videos = true;
    this.viewDialogRef.disableClose = true;
  }

  
  openDocumentDialog() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "38vh"
    });
    this.viewDialogRef.componentInstance.documents = true;
    this.viewDialogRef.disableClose = true;
  }

  openProjectDialog() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "38vh"
    });
    this.viewDialogRef.componentInstance.projects = true;
    this.viewDialogRef.disableClose = true;
  }

  openOtherSourceDialog() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "38vh"
    });
    this.viewDialogRef.componentInstance.others = true;
    this.viewDialogRef.disableClose = true;
  }

  openViewDialog() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "38vh"
    });
    this.viewDialogRef.componentInstance.assignees = true;
    this.viewDialogRef.disableClose = true;
  }

  onBack(){
    this.routes.navigateByUrl('/classroom/performance/detailed-view');
  }
}
