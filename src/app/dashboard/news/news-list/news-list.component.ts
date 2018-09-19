import { Component, ViewChild } from "@angular/core";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { MatDialog, MatDialogRef } from "@angular/material";
import { NewsDialogComponent } from "../news-dialog/news-dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent {
  newsDialogRef: MatDialogRef<NewsDialogComponent>;
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
    { title: "Cras justo odioCras", publishedon: "18/08/2018" },
    { title: " justo justo odioCras", publishedon: "22/03/2018" },
    { title: "odioCras Cras justo ", publishedon: "24/03/2018" },
    { title: "Cras justo odioCras", publishedon: "18/08/2018" },
    { title: "odioCras Cras justo ", publishedon: "24/03/2018" },
    { title: "Cras justo odioCras", publishedon: "18/08/2018" },
    { title: "odioCras Cras justo ", publishedon: "24/03/2018" },
    { title: "Cras justo odioCras", publishedon: "18/08/2018" },
    { title: "odioCras Cras justo ", publishedon: "24/03/2018" },
    { title: "Cras justo odioCras", publishedon: "18/08/2018" },
    { title: "odioCras Cras justo ", publishedon: "24/03/2018" },
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
      text: "News Title",
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
          `' class='viewButton' style='color:white;background-color:lightslategrey;margin-left: 178px;'></div>`
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
    this.newsDialogRef = this.dialog.open(NewsDialogComponent, {
      width: "50%",
      height: "calc(30vh)"
    });
    this.newsDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/");
  }
}
