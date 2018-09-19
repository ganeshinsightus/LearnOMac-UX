import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./learning-paths-list.component.html",
  styleUrls: ["./learning-paths-list.component.scss"]
})
export class LearningPathsListComponent {
  pendingvalue: any;
  constructor(private routes: Router) {}

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "completed":
          return alert("Completed working");
        case "inprogress":
          return alert("Inprogress working");
        case "pending":
          return alert("this.pendingvalue");
      }
    }
  }

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(64vh)";
  }
  data: any[] = [
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [{ name: "student", type: "string" }],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Student Name",
      dataField: "student",
      align: "center",
      cellsAlign: "center",
      width: 305
    },
    {
      text: "Completed",
      cellsAlign: "center",
      align: "center",
      width: 305,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='completedButton' style='color:white;background-color:green;margin-left: 111px;'></div>`
        );
      }
    },
    {
      text: "In Progress",
      cellsAlign: "center",
      align: "center",
      width: 305,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='inprogressButton' style='color:white;background-color:orange;margin-left: 111px;'></div>`
        );
      }
    },
    {
      text: "Pending",
      cellsAlign: "center",
      align: "center",
      width: 305,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='pendingButton' style='color:white;background-color:red;margin-left: 111px;'></div>`
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
    let uglycompletedButtons = jqwidgets.createInstance(
      ".completedButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "10"
      }
    );
    let uglyinprogressButtons = jqwidgets.createInstance(
      ".inprogressButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "05"
      }
    );
    let uglypendingButtons = jqwidgets.createInstance(
      ".pendingButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "03"
      }
    );
    let flattencompletedButtons = flatten(uglycompletedButtons);
    let flatteninprogressButtons = flatten(uglyinprogressButtons);
    let flattenpendingButtons = flatten(uglypendingButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattencompletedButtons) {
      for (let i = 0; i < flattencompletedButtons.length; i++) {
        flattencompletedButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flatteninprogressButtons) {
      for (let i = 0; i < flatteninprogressButtons.length; i++) {
        flatteninprogressButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattenpendingButtons) {
      for (let i = 0; i < flattenpendingButtons.length; i++) {
        flattenpendingButtons[i].addEventHandler(
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
    if (value === "10") {
      alert("Show Completed Learning Paths");
    } else if (value === "03") {
      alert("Show Pending Learning Paths");
    } else {
      alert("Show InProgress Learning Paths");
    }
  }

  onBack() {
    this.routes.navigateByUrl("/class-dashboard");
  }
}
