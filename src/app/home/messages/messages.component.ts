import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { MessagesDialogComponent } from './messages-dialog/messages-dialog.component';

@Component({
  selector: 'home-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['../home.component.scss']
})
export class MessagesComponent {

  messagesDialogRef: MatDialogRef<MessagesDialogComponent>;

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.messagesDialogRef = this.dialog.open(MessagesDialogComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
    this.messagesDialogRef.disableClose = true;
  }

}
