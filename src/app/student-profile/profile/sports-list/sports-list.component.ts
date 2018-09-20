import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { SportsDialogComponent } from "../sports-dialog/sports-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "sports-list",
  templateUrl: "./sports-list.component.html",
  styleUrls: ["./sports-list.component.scss"]
})
export class SportsListComponent {
  public academicDialogRef: MatDialogRef<SportsDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  data: any[] = [
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Silver",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Football",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Bronze",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Silver",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    }
  ];

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }
  
    source: any = {
    dataType: "json",
    dataFields: [
      { name: "medal", type: "string" },
      { name: "sports", type: "string" },
      { name: "competitionlevel", type: "string" },
      { name: "receivedon", type: "date" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Medals",
      dataField: "medal",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Sports",
      dataField: "sports",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Competition Level",
      dataField: "competitionlevel",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Received on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "receivedon",
      width: 250
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 250,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='color:white;background-color:skyblue;margin-left: 115px;'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:red;margin-left: 115px;
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
    let uglyeditButtons = jqwidgets.createInstance(
      ".editButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Edit"
      }
    );
    let uglydeleteButtons = jqwidgets.createInstance(
      ".deleteButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Delete"
      }
    );
    let flatteneditButtons = flatten(uglyeditButtons);
    let flattendeleteButtons = flatten(uglydeleteButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flatteneditButtons) {
      for (let i = 0; i < flatteneditButtons.length; i++) {
        flatteneditButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattendeleteButtons) {
      for (let i = 0; i < flattendeleteButtons.length; i++) {
        flattendeleteButtons[i].addEventHandler(
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
    if (value === "Edit") {
       this.openSportsDialog();
    }
    if (value === "Delete") {
     alert("Data Deleted Successfully");
   }
  }
public openSportsDialog() {
    this.academicDialogRef = this.dialog.open(SportsDialogComponent, {
      width: "50%",
      height: "calc(83vh)"
    });
    this.academicDialogRef.disableClose = true;
  }
  onNavigation(value) {
    if (value) {
        this.routes.navigate([value]);
    }
    return false;
}
  onBack() {
    this.routes.navigateByUrl("/student/profile");
  }
}
