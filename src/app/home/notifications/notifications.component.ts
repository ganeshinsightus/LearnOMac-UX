import { Component } from '@angular/core';
import { NotificationsDialogComponent } from './notifications-dialog/notifications-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'home-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['../home.component.scss']
})
export class NotificationsComponent {
  notificationsDialogRef: MatDialogRef<NotificationsDialogComponent>;
  constructor(public dialog: MatDialog , public routes: Router) { }

  openDialog() {
    this.notificationsDialogRef = this.dialog.open(NotificationsDialogComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.notificationsDialogRef.componentInstance.title = "odioCras justo odio";
    this.notificationsDialogRef.disableClose = true;
  }

  openNotificationsList(){
    this.routes.navigateByUrl('/notifications-list')
  }
}
