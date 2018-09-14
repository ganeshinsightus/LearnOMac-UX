import { Component, ViewChild } from "@angular/core";
import { MatOption, MatDialog, MatDialogRef } from "@angular/material";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  FormControlName
} from "@angular/forms";
import { Router } from "@angular/router";
import { CollectionDialogComponent } from "../../lesson-management/lesson-plans/collection-grid-dialog/collection-grid-dialog.component";

@Component({
  templateUrl: "./new-course.component.html",
  styleUrls: ["./new-course.component.scss"]
})
export class NewCourseComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  subjectValue: any;
  selected: any;
  contentdialogfRef:MatDialogRef<CollectionDialogComponent>;
  subjects1 = [
    { value: "telugu", valueFieldType: "false", viewValue: "Telugu" },
    { value: "english", valueFieldType: "false", viewValue: "English" },
    { value: "maths", valueFieldType: "false", viewValue: "Maths" },
    { value: "science", valueFieldType: "false", viewValue: "Science" },
    { value: "general", valueFieldType: "true", viewValue: "General" }
  ];
  subjects2 = [
    { value: "telugu", valueFieldType: "false", viewValue: "Telugu" },
    { value: "english", valueFieldType: "false", viewValue: "English" },
    { value: "maths", valueFieldType: "false", viewValue: "Maths" },
    { value: "science", valueFieldType: "false", viewValue: "Science" },
    { value: "general", valueFieldType: "true", viewValue: "General" }
  ];
  gradeValue: any;
  grades1 = [
    { value: "1", viewValue: "1 Standard" },
    { value: "2", viewValue: "2 Standard" },
    { value: "3", viewValue: "3 Standard" },
    { value: "4", viewValue: "4 Standard" },
    { value: "5",viewValue: "5 Standard" }
  ];
  grades2 = [
    { value: "1", viewValue: "1 Standard" },
    { value: "2", viewValue: "2 Standard" },
    { value: "3", viewValue: "3 Standard" },
    { value: "4", viewValue: "4 Standard" },
    { value: "5",viewValue: "5 Standard" }
  ];
  grades3 = [
    { value: "1", viewValue: "1 Standard" },
    { value: "2", viewValue: "2 Standard" },
    { value: "3", viewValue: "3 Standard" },
    { value: "4", viewValue: "4 Standard" },
    { value: "5",viewValue: "5 Standard" }
  ];
  checkTeacher :boolean = true;
  checkParent :boolean;
  checkStudent :boolean;
  @ViewChild("allSelected")
  private allSelected: MatOption;
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

  sectionSource: any[] = [
    {
      label: "Introduction",
      items: [
        {
          label: "Unit I - Number System ",
          items: [
            {
              label: "Real Numbers",
              selected: true
            },
            {
              label: "Sets",
              selected: true
            }
          ]
        },
        {
          label: "Unit II - Algebra",
          items: [
            {
              label: "Propogation",
              selected: true
            },
            {
              label: "Quadratic Equations",
              selected: true
            }
          ]
        }
      ]
    },
    {
      label: "Assessment",
      // expanded: true,
      items: [
        {
          label: "Unit I - Physics ",
          items: [
            {
              label: "Measurements",
              selected: true
            },
            {
              label: "Newton Laws",
              selected: true
            }
          ]
        },
        {
          label: "Unit II - Chemistry",
          items: [
            {
              label: "Solid State",
              selected: true
            },
            {
              label: "Liquid State",
              selected: true
            },
            {
              label: "Gaseous State",
              selected: true
            }
          ]
        }
      ]
    }
  ];

  targetSource: any[] = [
    {
      label: "Teachers",
      items: [
        {
          label: "Telugu",
          selected: true
        },
        {
          label: "English",
          selected: true
        },
        {
          label: "Maths",
          selected: true
        }
      ]
    },
    {
      label: "Parents",
      items: [
        {
          label: "6 standard",
          selected: true
        },
        {
          label: "8 standard",
          selected: true
        }
      ]
    },
    {
      label: "Students",
      items: [
        {
          label: "6 standard",
          selected: true
        },
        {
          label: "8 standard",
          selected: true
        }
      ]
    }
  ];

  constructor(private _formBuilder: FormBuilder, private routes: Router , private dialog:MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ["", Validators.required]
      subject: [""],
      grade: [""]
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ["", Validators.required]
      subject: [""],
      grade: [""]
    });
    this.thirdFormGroup = this._formBuilder.group({
      student: new FormControl(["", Validators.required])
    });
    this.fourthFormGroup = this._formBuilder.group({
      // student: new FormControl(["", Validators.required])
    });
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

  openResourcesDialog(){
    this.contentdialogfRef = this.dialog.open(
      CollectionDialogComponent,
      {
        width: "60%",
        height: "calc(60vh)"
      }
    );
    //this.contentDialogRef.componentInstance.content = true;
    this.contentdialogfRef.disableClose = true;
  }


  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
