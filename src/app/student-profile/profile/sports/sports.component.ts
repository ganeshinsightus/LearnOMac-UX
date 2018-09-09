import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  //styleUrls: ['../student-profile.component.scss']
})
export class SportsComponent {

    constructor(public dialogref: MatDialogRef<SportsComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
