import { Component } from "@angular/core";
import { CommunicationReplyComponent } from "../../classroom-dashboard/communication/communication-reply/communication-reply.component";
import { CommunicationRepliedComponent } from "../../classroom-dashboard/communication/communication-replied/communication-replied.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { PerformanceFilterComponent } from "../../dynamic-component/performance-filter/performance-filter.component";
import { CommunicationNewComponent } from "../../classroom-dashboard/communication/communication-new/communication-new.component";

@Component({
  templateUrl: "./parent-communication.component.html",
  styleUrls: ["../student-profile.component.scss"]
})
export class ParentCommunicationComponent {
  performanceFilterDialogRef:MatDialogRef<PerformanceFilterComponent>;
  communicationDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  newDialogRef: MatDialogRef<CommunicationNewComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {

  }

  openNewDialog() {
    this.newDialogRef = this.dialog.open(CommunicationNewComponent, {
      width: "55%",
      height: "44vh"
    });
    this.newDialogRef.disableClose = true;
  }
 
  columnDefs = [
    {
      headerName: "Subject",
      field: "subject",
      floatingFilter: "true",
      width: 418,
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
      width: 418,
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
      width: 418,
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
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      subject: "Could not do well in Science",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Science",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      subject: "Could not do well in Science ",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view, reply"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18",
      action: "view , reply"
    },
   
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
        height: "60vh"
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
        height: "78vh"
      }
    );
    //this.communicationDialogRef.componentInstance.title = "odioCras justo odio";
    this.communicationDialogRef.disableClose = true;
  }


  onBack() {
    this.routes.navigateByUrl("/");
  }
 
}
