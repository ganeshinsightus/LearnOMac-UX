import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "sports-list",
  templateUrl: "./sports-list.component.html",
  styleUrls: ["./sports-list.component.scss"]
})
export class SportsListComponent {
  constructor(private routes: Router) {}

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
      { name: "receivedon", type: "date" }
    ],
    localData: this.data
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Medals",
      dataField: "medal",
      align: "center",
      cellsAlign: "center",
      width: 250,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let medals = ["Gold", "Silver", "Bronze"];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: medals,
          width: "100%",
          height: "100%"
        });
      }
    },
    {
      text: "Sports",
      dataField: "sports",
      align: "center",
      cellsAlign: "center",
      width: 250,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let sports = [
          "Chess",
          "Cricket",
          "Volley Ball",
          "Hockey",
          "Basket Ball"
        ];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: sports,
          width: "100%",
          height: "100%"
        });
      }
    },
    {
      text: "Competition Level",
      dataField: "competitionlevel",
      align: "center",
      cellsAlign: "center",
      editable: true,
      width: 250
    },
    {
      text: "Received on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      editable: true,
      dataField: "receivedon",
      width: 250,
      columnType: "datetimeinput"
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
          `' class='editButton' style='margin-left: 5em;background-color:#004d73; color:white;float:left'></div>
                    <div data-row='` +
          row +
          `' class='cancelButton' style='display: none; float: left; margin-left: 1em ;background-color:red; color:white'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:red;margin-left: 5em;
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
    let uglyEditButtons = jqwidgets.createInstance(".editButton", "jqxButton", {
      width: 60,
      height: 24,
      value: "Edit"
    });
    let flattenEditButtons = flatten(uglyEditButtons);
    let uglyCancelButtons = jqwidgets.createInstance(
      ".cancelButton",
      "jqxButton",
      { width: 60, height: 24, value: "Cancel" }
    );
    let flattenCancelButtons = flatten(uglyCancelButtons);

    let uglydeleteButtons = jqwidgets.createInstance(
      ".deleteButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Delete"
      }
    );
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
    if (flattenEditButtons) {
      for (let i = 0; i < flattenEditButtons.length; i++) {
        flattenEditButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattenCancelButtons) {
      for (let i = 0; i < flattenCancelButtons.length; i++) {
        flattenCancelButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            let rowKey = event.target.getAttribute("data-row");
            this.treeGrid.endRowEdit(rowKey, true);
          }
        );
      }
    }
  };

  rowKey: number = -1;
  rowClick(event: any): void {
    this.rowKey = event.args.key;
  }

  editClick(event: any): void {
    let editButtonsContainers = document.getElementsByClassName("editButton");
    let cancelButtonsContainers = document.getElementsByClassName(
      "cancelButton"
    );
    let value = event.target.innerText;
    if (value === "Delete") {
      alert("Data Deleted Successfully");
    }
    if (value === "Edit") {
      this.treeGrid.beginRowEdit(this.rowKey.toString());
      for (let i = 0; i < editButtonsContainers.length; i++) {
        (<HTMLElement>editButtonsContainers[i]).style.marginLeft = "5em";
        (<HTMLElement>cancelButtonsContainers[i]).style.display = "none";
      }
      (<HTMLElement>editButtonsContainers[this.rowKey]).innerText = "Save";
      (<HTMLElement>editButtonsContainers[this.rowKey]).style.marginLeft =
        "1em";
      (<HTMLElement>cancelButtonsContainers[this.rowKey]).style.display =
        "inline-block";
    } else {
      (<HTMLElement>editButtonsContainers[this.rowKey]).innerText = "Edit";
      (<HTMLElement>editButtonsContainers[this.rowKey]).style.marginLeft =
        "5em";
      (<HTMLElement>cancelButtonsContainers[this.rowKey]).style.display =
        "none";
      this.treeGrid.endRowEdit(this.rowKey.toString());
    }
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
