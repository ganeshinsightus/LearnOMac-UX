import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "communication-new",
  templateUrl: "./communication-new.component.html",
  styleUrls: ["./communication-new.component.scss"]
})
export class CommunicationNewComponent {
  students = new FormControl();
  selected:boolean;

  studentsList: string[] = [
    "Ganesh", "Rajendra" , "Gowtham" ,"Sankar" ,"Balaji" ,"Ashiff"
  ];
  constructor(public dialogref: MatDialogRef<CommunicationNewComponent>) {}
  closeDialog() {
    this.dialogref.close();
  }
}
