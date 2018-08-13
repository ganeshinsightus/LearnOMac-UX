import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.scss']
})
export class NotificationsDialogComponent {


  constructor(public dialogref: MatDialogRef<NotificationsDialogComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
