import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef, MatChipInputEvent } from "@angular/material";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Students{
  name:string;
}

@Component({
  selector: "communication-new",
  templateUrl: "./communication-new.component.html",
  styleUrls: ["./communication-new.component.scss"]
})

export class CommunicationNewComponent {
  students = new FormControl();
  selected:boolean;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER , COMMA];
  studentsList: Students[] = [
    {name: 'Rajesh'},
    {name: 'Gowtham Sankar'},
    {name: 'Ashiff'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.studentsList.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
    
  }

  remove(student: Students): void {
    const index = this.studentsList.indexOf(student);

    if (index >= 0) {
      this.studentsList.splice(index, 1);
    }
  }
  constructor(public dialogref: MatDialogRef<CommunicationNewComponent>) {}
  closeDialog() {
    this.dialogref.close();
  }
  
}
