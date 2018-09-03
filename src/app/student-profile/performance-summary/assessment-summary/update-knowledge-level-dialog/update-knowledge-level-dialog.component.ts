import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './update-knowledge-level-dialog.component.html',
  styleUrls: ['./update-knowledge-level-dialog.component.scss']
})
export class UpdateKnowledgeLevelDialogComponent {

    constructor(public dialogref: MatDialogRef<UpdateKnowledgeLevelDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
