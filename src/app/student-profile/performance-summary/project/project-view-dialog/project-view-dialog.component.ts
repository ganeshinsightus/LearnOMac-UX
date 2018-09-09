import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './project-view-dialog.component.html',
  styleUrls: ['./project-view-dialog.component.scss']
})
export class ProjectViewDialogComponent {

    constructor(public dialogref: MatDialogRef<ProjectViewDialogComponent>) {

    }
    closeDialog() {
      this.dialogref.close();
    }
  
}
