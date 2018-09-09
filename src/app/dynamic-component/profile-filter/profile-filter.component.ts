import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "profile-filter",
    templateUrl: "./profile-filter.component.html",
    styleUrls: ["./profile-filter.component.scss"]
  })
export class ProfileFilterComponent {
  filterForm: FormGroup;
  constructor(
    public dialogref: MatDialogRef<ProfileFilterComponent>,
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
      student: new FormControl(0)
    });
  }
}
