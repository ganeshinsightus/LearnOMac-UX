import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'circulars-dialog',
  templateUrl: './circulars-dialog.component.html',
  styleUrls: ['./circulars-dialog.component.scss']
})
export class CircularsDialogComponent {

  constructor(public dialogref: MatDialogRef<CircularsDialogComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
