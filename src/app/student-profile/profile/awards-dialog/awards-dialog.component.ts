import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'awards-dialog',
  templateUrl: './awards-dialog.component.html',
  styleUrls: ['./awards-dialog.component.scss']
})
export class AwardsDialogComponent {

    constructor(public dialogref: MatDialogRef<AwardsDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
