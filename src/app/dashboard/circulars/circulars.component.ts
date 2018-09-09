import { Component } from '@angular/core';
import { CircularsDialogComponent } from './circulars-dialog/circulars-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'home-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['../home.component.scss']
})
export class CircularsComponent {

  circularsDialogRef: MatDialogRef<CircularsDialogComponent>;
  constructor(public dialog: MatDialog , private routes:Router) { }

  openDialog() {
    this.circularsDialogRef = this.dialog.open(CircularsDialogComponent, {
      width: '50%',
      height: '30vh'
    });
    //this.circularsDialogRef.componentInstance.title = "odioCras justo odio";
    this.circularsDialogRef.disableClose = true;
  }
  openCircularList(){
    this.routes.navigateByUrl('/circular-list');
  }
}
