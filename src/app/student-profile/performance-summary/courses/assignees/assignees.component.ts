import { Component, ViewChild } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MatChipInputEvent, MatOption } from "@angular/material";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Router } from "@angular/router";

export interface Students {
  name: string;
}

@Component({
  templateUrl: "./assignees.component.html",
  styleUrls: ["./assignees.component.scss"]
})
export class AssigneesComponent {
  searchUserForm: FormGroup;
  studentFilters = [
    {
      key: 1,
      value: "Ajith"
    },
    {
      key: 2,
      value: "Vijay"
    },
    {
      key: 3,
      value: "Kamal"
    },
    {
      key: 4,
      value: "Surya"
    }
  ];

  @ViewChild("allSelected")
  private allSelected: MatOption;

  newDialogRef: MatDialogRef<AssigneesComponent>;

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      student: new FormControl("")
    });
  }

  constructor(
    public dialogref: MatDialogRef<AssigneesComponent>,
    private routes: Router,
    private fb: FormBuilder
  ) {}

  closeDialog() {
    this.dialogref.close();
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.student.patchValue([
        ...this.studentFilters.map(item => item.key),
        0
      ]);
    } else {
      this.searchUserForm.controls.student.patchValue([]);
    }
  }
}
