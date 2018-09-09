import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'academic',
  templateUrl: './academic.component.html',
  //styleUrls: ['../student-profile.component.scss']
})
export class AcademicComponent {

    constructor(public dialogref: MatDialogRef<AcademicComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
