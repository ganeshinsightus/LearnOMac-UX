import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'communication-view',
  templateUrl: './communication-view.component.html',
  styleUrls: ['./communication-view.component.scss']
})
export class CommunicationViewComponent {

  //public title: string = "";

  constructor(public dialogref: MatDialogRef<CommunicationViewComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
