import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'communication-replied',
  templateUrl: './communication-replied.component.html',
  styleUrls: ['./communication-replied.component.scss']
})
export class CommunicationRepliedComponent {

  //public title: string = "";

  constructor(public dialogref: MatDialogRef<CommunicationRepliedComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
