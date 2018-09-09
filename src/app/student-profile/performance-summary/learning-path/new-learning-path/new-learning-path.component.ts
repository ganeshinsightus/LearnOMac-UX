import { Component, ViewChild } from "@angular/core";
import { MatOption } from "@angular/material";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./new-learning-path.component.html",
  styleUrls: ["./new-learning-path.component.scss"]
})
export class NewLearningPathComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
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

  treeSource: any[] = [
    {
      label: "Mathematics",
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
      label: "Science",
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

  contentSource: any[] = [
    {
      label: "3 Videos",
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
    },
    {
      label: "2 Document",
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
    },
    {
      label: "2 Activities",
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
    },
    {
      label: "2 Other Sources",
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
    },
    {
      label: "Assessment",
      checked: true,
      selected: true
    }
  ];

  constructor(private _formBuilder: FormBuilder, private routes: Router) {}

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

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
