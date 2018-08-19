import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent {
  newsDialogRef: MatDialogRef<NewsDialogComponent>;
  constructor(public dialog: MatDialog , private routes: Router) {}

  columnDefs = [
    {
      headerName: "News Title",
      field: "title",
      floatingFilter: "true",
      width: 420,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Published on",
      field: "published",
      width: 420,
      floatingFilter: "false",
      filter: "agDateColumnFilter",
      filterParams: {
        comparator: function(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          var dateParts = dateAsString.split("/");
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        clearButton: true
      }
    },
    {
      headerName: "Actions",
          suppressMenu: true,
          suppressSorting: true,
          filter: "false",
          width:420,
          template:
            `<button type="button" data-action-type="view" style="color:white;background-color:#d81b60;">
               View
             </button>
          `
    }
  ];

  rowData = [
    { title: "Cras justo odioCras", published: "29/01/18", action: "view" },
    { title: " justo justo odioCras", published: "27/02/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" },
    { title: "Cras justo odioCras", published: "29/01/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" },
    { title: "Cras justo odioCras", published: "29/01/18", action: "view" },
    { title: " justo justo odioCras", published: "27/02/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" },
    { title: " justo justo odioCras", published: "27/02/18", action: "view" },
    { title: "Cras justo odioCras", published: "29/01/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" },
    { title: "Cras justo odioCras", published: "29/01/18", action: "view" },
    { title: "odioCras Cras justo ", published: "29/03/18", action: "view" }
  ];


  public onRowClicked(e) {
    if (e.event.target !== undefined) {
        return this.openDialog();
    }
}

public onActionViewClick(data: any){
    console.log("View action clicked", data);
}
  public openDialog() {
    this.newsDialogRef = this.dialog.open(NewsDialogComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.newsDialogRef.componentInstance.title = "odioCras justo odio";
    this.newsDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/");
  }
}
