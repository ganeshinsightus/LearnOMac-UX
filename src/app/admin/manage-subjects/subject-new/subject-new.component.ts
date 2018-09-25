import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "subject-new",
  templateUrl: "./subject-new.component.html",
  styleUrls: ["./subject-new.component.scss"]
})

export class SubjectNewComponent {
  students = new FormControl();
  constructor (private routes:Router ){}

  onBack(){
    this.routes.navigateByUrl('/manage-subjects');
  }
}
