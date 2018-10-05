import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

import { Router } from "@angular/router";
import { CommunicationRepliedComponent } from "../../../classroom-dashboard/communication/communication-replied/communication-replied.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { CommunicationReplyComponent } from "../../../classroom-dashboard/communication/communication-reply/communication-reply.component";

@Component({
  selector: "messages-list",
  templateUrl: "./messages-list.component.html",
  styleUrls: ["./messages-list.component.scss"]
})
export class MessagesListComponent {
  communicationDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(76vh)";
  }

  data: any[] =  [
    {
      subject: "Could not do well in Maths",
      receivedon: "29/01/18"
    },
    {
      subject: "Could not do well in Science",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Science ",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
    },
    {
      subject: "Could not do well in Maths",
      
      receivedon: "29/01/18",
      
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "subject", type: "string" },
      { name: "receivedon", type: "date" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Subject",
      dataField: "subject",
      align: "center",
      cellsAlign: "center",
      width: 420
    },
    {
      text: "Received on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "receivedon",
      width: 420
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 420,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white;background-color:skyblue;margin-left: 108px;'></div>
          <div data-row='` +
          row +
          `' class='replyButton' style='color:white;background-color:green;margin-left: 108px;
          margin-top: 2px;'></div>`
        );
      }
    }
  ];
  editSettings: any = {
    saveOnPageChange: true,
    saveOnBlur: true,
    saveOnSelectionChange: false,
    cancelOnEsc: true,
    saveOnEnter: true,
    editOnDoubleClick: false,
    editOnF2: false
  };
  rendered = (): void => {
    let uglyviewButtons = jqwidgets.createInstance(
      ".viewButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "View"
      }
    );
    let uglyreplyButtons = jqwidgets.createInstance(
      ".replyButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Reply"
      }
    );
    let flattenviewButtons = flatten(uglyviewButtons);
    let flattenreplyButtons = flatten(uglyreplyButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenviewButtons) {
      for (let i = 0; i < flattenviewButtons.length; i++) {
        flattenviewButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattenreplyButtons) {
      for (let i = 0; i < flattenreplyButtons.length; i++) {
        flattenreplyButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
  };

  rowKey: number = -1;
  cellClick(event: any): void {
    this.rowKey = event.args.key;
  }
  editClick(event: any): void {
    let value = event.target.innerText;
    if (value === "View") {
       this.openDialog();
    }
    if (value === "Reply") {
      this.openReplyDialog();
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
    this.routes.navigateByUrl("/");
  }
}
