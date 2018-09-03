import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './project-update-knowledge-level-dialog.component.html',
  styleUrls: ['./project-update-knowledge-level-dialog.component.scss']
})
export class ProjectUpdateKnowledgeLevelDialogComponent {

    constructor(public dialogref: MatDialogRef<ProjectUpdateKnowledgeLevelDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
