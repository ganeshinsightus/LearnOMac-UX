import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

export interface Lesson {
  value: string;
  viewValue: string;
}

export interface Lessons {
  disabled?: boolean;
  name: string;
  lessonchildren: Lesson[];
}

@Component({
  selector: "lesson-plan-filter",
  templateUrl: "./lesson-plan-filter.component.html",
  styleUrls: ["./lesson-plan-filter.component.scss"]
})
export class LessonPlanFilterComponent {
  filterForm: FormGroup;

  lessons: Lessons[] = [
    {
      name: "Unit I - Number System",
      lessonchildren: [
        { value: "realnumbers", viewValue: "Real Numbers" },
        { value: "sets", viewValue: "Sets" }
      ]
    },
    {
      name: "Unit II - Algebra",
      lessonchildren: [
        { value: "propagation", viewValue: "Propogation" },
        { value: "quadraticequations", viewValue: "Quadratic Equations" },
        { value: "sin and cos degree", viewValue: "Horsea" }
      ]
    }
  ];

  constructor(
    public dialogref: MatDialogRef<LessonPlanFilterComponent>,
    private filterBuilder: FormBuilder
  ) {
    this.createForm();
  }

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
