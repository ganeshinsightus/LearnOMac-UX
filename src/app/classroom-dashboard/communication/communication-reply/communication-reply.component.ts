import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'communication-reply',
  templateUrl: './communication-reply.component.html',
  styleUrls: ['./communication-reply.component.scss']
})
export class CommunicationReplyComponent {

  //public title: string = "";

  constructor(public dialogref: MatDialogRef<CommunicationReplyComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
