import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
    templateUrl: "./classroom-performance-filter.component.html",
    styleUrls: ["./classroom-performance-filter.component.scss"]
  })
export class ClassroomPerformanceFilterComponent {
  filterForm: FormGroup;
  constructor(
    public dialogref: MatDialogRef<ClassroomPerformanceFilterComponent>,
    private filterBuilder: FormBuilder
  ) {}

  ngOnInit(){
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
      student: new FormControl(0)
    });
  }
}
