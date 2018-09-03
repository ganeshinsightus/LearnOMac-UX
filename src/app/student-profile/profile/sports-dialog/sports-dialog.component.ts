import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'sports-dialog',
  templateUrl: './sports-dialog.component.html',
  styleUrls: ['./sports-dialog.component.scss']
})
export class SportsDialogComponent {

    constructor(public dialogref: MatDialogRef<SportsDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
