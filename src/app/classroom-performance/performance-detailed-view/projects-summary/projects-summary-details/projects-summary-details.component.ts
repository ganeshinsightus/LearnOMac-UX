import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog, MatOption } from "@angular/material";
import { Router } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { SourceDialogComponent } from "../../publish-learning-paths/source-dialog/source-dialog.component";

@Component({
  templateUrl: "./projects-summary-details.component.html",
  styleUrls: ["./projects-summary-details.component.scss"]
})
export class ProjectSummaryDetailsComponent {
  isLinear = false;

  firstFormGroup: FormGroup;

  secondFormGroup: FormGroup;

  thirdFormGroup: FormGroup;

  step = 0;

  @ViewChild("allSelected")
  private allSelected: MatOption;

  isAssignees: boolean = false;

  checkBox: boolean = true;

  threeStates: boolean = true;

  viewDialogRef:MatDialogRef<SourceDialogComponent>;

  videoSource: any[] = [
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
  ];

  documentSource: any[] = [
    {
      label: "Probability Explanation pdf",
      selected: true
    },
    {
      label: "Probability Advance Concepts pdf",
      selected: true
    }
  ];

  projectSource: any[] = [
    {
      label: "Probability Problems",
      selected: true
    },
    {
      label: "Probability Advance Problems",
      selected: true
    }
  ];

  otherSource: any[] = [
    {
      label: "Logical games which related to Probability",
      selected: true
    },
    {
      label: "Mind Quiz - Probability",
      selected: true
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
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private routes: Router
  ) {}

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
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.thirdFormGroup.controls.student.patchValue([
        ...this.studentFilters.map(item => item.key),
        0
      ]);
    } else {
      this.thirdFormGroup.controls.student.patchValue([]);
    }
  }

  openViewAssignees() {
    this.viewDialogRef = this.dialog.open(SourceDialogComponent, {
      width: "40%",
      height: "50vh"
    });
    this.viewDialogRef.componentInstance.viewAssignees = true;
    this.viewDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/class-performance/detailed-view");
  }
}
