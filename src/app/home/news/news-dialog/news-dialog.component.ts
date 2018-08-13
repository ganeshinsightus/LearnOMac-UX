import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss']
})
export class NewsDialogComponent {

  //public title: string = "";

  constructor(public dialogref: MatDialogRef<NewsDialogComponent>) {

  }
  closeDialog() {
    this.dialogref.close();
  }
}
