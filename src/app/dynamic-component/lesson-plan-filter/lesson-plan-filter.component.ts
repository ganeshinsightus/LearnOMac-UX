import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "lesson-plan-filter",
    templateUrl: "./lesson-plan-filter.component.html",
    styleUrls: ["./lesson-plan-filter.component.scss"]
  })
export class LessonPlanFilterComponent {
  filterForm: FormGroup;
  
  treeSource: any[] = [
    {
      label: "Unit I - Number System ",
      selected: false,
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
  ];

  constructor(
    public dialogref: MatDialogRef<LessonPlanFilterComponent>,
    private filterBuilder: FormBuilder
  ) {}
  closeDialog() {
    this.dialogref.close();
  }

  createForm() {
    this.filterForm = this.filterBuilder.group({
      grade: new FormControl(0),
      section: new FormControl(0),
      subject: new FormControl(0),
      lesson: new FormControl(0)
    });
  }
}
