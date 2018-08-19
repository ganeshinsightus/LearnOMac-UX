import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NewsDialogComponent } from './news-dialog/news-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'home-news',
  templateUrl: './news.component.html',
  styleUrls: ['../home.component.scss']
})
export class NewsComponent {

  newsDialogRef: MatDialogRef<NewsDialogComponent>;
  showScroll:boolean = false;

  constructor(public dialog: MatDialog , private routes:Router ) { }
  openDialog() {
    this.newsDialogRef = this.dialog.open(NewsDialogComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.newsDialogRef.componentInstance.title = "odioCras justo odio";
    this.newsDialogRef.disableClose = true;
  }

  openNewsList(){
    this.routes.navigateByUrl('/news-list');
  }
}
