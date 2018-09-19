import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

import { Router } from "@angular/router";
import { CommunicationRepliedComponent } from "../../../classroom-dashboard/communication/communication-replied/communication-replied.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

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

  data: any[] = [
    { title: "Could not do well in Maths", publishedon: "18/08/2018" },
    { title: " Could not do well in Science", publishedon: "22/03/2018" },
    { title: "Could not do well in Social Science ", publishedon: "24/03/2018" },
    { title: "Could not do well in Maths", publishedon: "18/08/2018" },
    { title: "Could not do well in Social Science ", publishedon: "24/03/2018" },
    { title: "Could not do well in Maths", publishedon: "18/08/2018" },
    { title: " Could not do well in Science", publishedon: "13/08/2018" },
    { title: "Could not do well in Social Science ", publishedon: "24/03/2018" },
    { title: "Could not do well in Maths", publishedon: "18/08/2018" },
    { title: "Could not do well in Maths", publishedon: "18/08/2018" },
    { title: "Could not do well in Social Science ", publishedon: "24/03/2018" }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "publishedon", type: "date" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Messages Title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 420
    },
    {
      text: "Published on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "publishedon",
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
          `' class='viewButton' style='color:white;background-color:#0d47a1;margin-left: 178px;'></div>`
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
    let uglyviewButtons = jqwidgets.createInstance(".viewButton", "jqxButton", {
      width: 60,
      height: 24,
      value: "View"
    });
    let flattenviewButtons = flatten(uglyviewButtons);

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

  onBack() {
    this.routes.navigateByUrl("/");
  }
}
