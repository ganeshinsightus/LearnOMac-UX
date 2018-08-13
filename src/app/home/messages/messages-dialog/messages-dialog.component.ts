import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'messages-dialog',
  templateUrl: './messages-dialog.component.html',
  styleUrls: ['./messages-dialog.component.scss']
})
export class MessagesDialogComponent {

  //public title: string = "";

  constructor(public dialogref: MatDialogRef<MessagesDialogComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
