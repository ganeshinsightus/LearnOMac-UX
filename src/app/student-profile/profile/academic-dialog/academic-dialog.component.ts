import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'academic-dialog',
  templateUrl: './academic-dialog.component.html',
  styleUrls: ['./academic-dialog.component.scss']
})
export class AcademicDialogComponent {

    constructor(public dialogref: MatDialogRef<AcademicDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
