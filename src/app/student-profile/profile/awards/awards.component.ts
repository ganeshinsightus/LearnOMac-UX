import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'awards',
  templateUrl: './awards.component.html',
  //styleUrls: ['../student-profile.component.scss']
})
export class AwardComponent {

    constructor(public dialogref: MatDialogRef<AwardComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
