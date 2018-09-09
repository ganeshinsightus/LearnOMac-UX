import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { CommunicationRepliedComponent } from '../../../classroom-dashboard/communication/communication-replied/communication-replied.component';

@Component({
  selector: "messages-list",
  templateUrl: "./messages-list.component.html",
  styleUrls: ["./messages-list.component.scss"]
})
export class MessagesListComponent {
  communicationDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  constructor(public dialog: MatDialog , private routes: Router) {}

  columnDefs = [
    {
      headerName: "Messages Title",
      field: "title",
      floatingFilter: "true",
      width: 410,
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
      width: 410,
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
          width:410,
          filter:"false",
          template:
            `<button type="button" data-action-type="view" style="color:white;background-color:#0d47a1 ;">
               View
             </button>
          `
    }
  ];

  rowData = [
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: " Could not do well in Social", published: "27/02/18", action: "view" },
    { title: "Could not do well in Science ", published: "29/03/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: "Could not do well in Science ", published: "29/03/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: " Could not do well in Science", published: "27/02/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: "Could not do well in Science ", published: "29/03/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: " Could not do well in Science", published: "27/02/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },
    { title: "Could not do well in Science ", published: "29/03/18", action: "view" },
    { title: "Could not do well in Maths", published: "29/01/18", action: "view" },   
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
    this.communicationDialogRef = this.dialog.open(CommunicationRepliedComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.communicationDialogRef.componentInstance.title = "odioCras justo odio";
    this.communicationDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/");
  }
}
