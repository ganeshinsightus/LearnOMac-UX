import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { CommunicationRepliedComponent } from "../communication-replied/communication-replied.component";
import { Router } from "@angular/router";
import { CommunicationReplyComponent } from "../communication-reply/communication-reply.component";

@Component({
  selector: "communication-list",
  templateUrl: "./communication-list.component.html",
  styleUrls: ["./communication-list.component.scss"]
})
export class CommunicationListComponent {
  communicationDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  columnDefs = [
    {
      headerName: "From Parent of",
      field: "from",
      floatingFilter: "true",
      width: 309,
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
      headerName: "Subject",
      field: "subject",
      floatingFilter: "true",
      width: 309,
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
      headerName: "Received on",
      field: "receivedon",
      width: 309,
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
      width: 309,
      filter: "false",
      template: `
            <button type="button" data-action-type="view" style="color:white;background-color:#0d47a1;">
              View
            </button>
            <button type="button" data-action-type="reply" style="color:white;background-color:#0d47a1;">
              Reply
           </button>
          `
    }
  ];

  rowData = [
    {
      from: "me,ganesh",
      subject: "Could not do well in Maths",
      receivedon: "29/01/18"
    },
    {
      subject: "Could not do well in Science",
      from: "me,rajendra",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,ganesh",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,rajendra",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science",
      from: "me,ganesh",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,ganesh",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science ",
      from: "me,rajendra",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      action: "view , reply"
    },
    {
      subject: "Could not do well in Maths",
      from: "me,kiran",
      receivedon: "29/01/18",
      
    }
  ];

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "view":
          return this.openDialog();
        case "reply":
          return this.openReplyDialog();
      }
    }
  }

  public openDialog() {
    this.communicationDialogRef = this.dialog.open(
      CommunicationRepliedComponent,
      {
        width: "50%",
        height: "calc(60vh)"
      }
    );
    //this.communicationDialogRef.componentInstance.title = "odioCras justo odio";
    this.communicationDialogRef.disableClose = true;
  }

  public openReplyDialog() {
    this.communicationDialogRef = this.dialog.open(
      CommunicationReplyComponent,
      {
        width: "50%",
        height: "calc(78vh)"
      }
    );
    
    this.communicationDialogRef.disableClose = true;
  }


  onBack() {
    this.routes.navigateByUrl("/class-dashboard");
  }
}
