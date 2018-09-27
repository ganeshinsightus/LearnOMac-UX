import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "awards-list",
  templateUrl: "./awards-list.component.html",
  styleUrls: ["./awards-list.component.scss"]
})
export class AwardsListComponent {
  constructor(private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  data: any[] = [
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "General",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Sports",
      award: "Best Batsman Award",
      awardedon: "30-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018"
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
      { name: "category", type: "string" },
      { name: "award", type: "string" },
      { name: "awardedon", type: "date" }
    ],
    localData: this.data
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Category",
      dataField: "category",
      align: "center",
      editable: true,
      cellsAlign: "center",
      width: 312,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let categories = ["Academic", "Sports", "General"];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: categories,
          width: "100%",
          height: "100%"
        });
      },
      initEditor: (row, cellvalue, editor, celltext, width, height) => {
        // set the editor's current value. The callback is called each time the editor is displayed.
        editor.jqxDropDownList("selectItem", cellvalue);
      },
      getEditorValue: (row, cellvalue, editor) => {
        // return the editor's value.
        return editor.val();
      }
    },
    {
      text: "Awarded Title",
      dataField: "award",
      align: "center",
      cellsAlign: "center",
      editable: true,
      width: 312,
      columntype: "datetimeinput",
      validation: (cell: any, value: any): any => {
        if (value == "") return true;
        let year = value.getFullYear();
        if (year >= 2017) {
          return {
            result: false,
            message: "Ship Date should be before 1/1/2017"
          };
        }
        return true;
      }
    },
    {
      text: "Awarded on",
      align: "center",
      cellsAlign: "center",
      editable: true,
      cellsFormat: "d",
      dataField: "awardedon",
      columnType:"datetimeinput",
      width: 312
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 312,
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
