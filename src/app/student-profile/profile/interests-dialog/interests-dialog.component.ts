import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './interests-dialog.component.html',
  styleUrls: ['./interests-dialog.component.scss']
})
export class InterestsDialogComponent {

    constructor(public dialogref: MatDialogRef<InterestsDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
