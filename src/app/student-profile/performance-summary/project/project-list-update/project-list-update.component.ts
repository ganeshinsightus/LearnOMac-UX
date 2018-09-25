import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { ProjectUpdateKnowledgeLevelDialogComponent } from "../project-update-knowledge-level-dialog/project-update-knowledge-level-dialog.component";
import { ProjectViewDialogComponent } from "../project-view-dialog/project-view-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./project-list-update.component.html",
  styleUrls: ["./project-list-update.component.scss"]
})
export class ProjectListUpdateComponent {
  uklDialogRef: MatDialogRef<ProjectUpdateKnowledgeLevelDialogComponent>;
  viewDialogRef: MatDialogRef<ProjectViewDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }

  data: any[] = [
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Low performing",
      updatedby: "teacher"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",
      remarks: "-",

      knowledge: "Satisfactory",
      updatedby: "system"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "lesson", type: "string" },
      { name: "knowledge", type: "string" },
      { name: "remarks", type: "string" },
      { name: "updatedby", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Project Title",
      dataField: "title",
      editable: false,
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Lesson Name",
      dataField: "lesson",
      align: "center",
      editable: false,
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Knowledge Level",
      dataField: "knowledge",
      width: 200,
      cellsAlign: "center",
      align: "center",
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let newknowledgelevels = [
          "Low Performing",
          "Satisfactory",
          "Above Average",
          "Mastered"
        ];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: newknowledgelevels,
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
      text: "Remarks",
      dataField: "remarks",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Updated by",
      align: "center",
      cellsAlign: "center",
      editable: false,
      dataField: "updatedby",
      width: 203
    },
    {
      text: "Details",
      cellsAlign: "center",
      align: "center",
      width: 203,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white ;background-color:#0d47a1;margin-left: 58px;'></div>`
        );
      }
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      columnType: "none",
      width: 200,
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='margin-left: 5em; float: left ; background-color:#0d47a1; color:white'></div>
                    <div data-row='` +
          row +
          `' class='cancelButton' style='display: none; float: left; margin-left: 1em ;background-color:red; color:white'></div>`
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
    let uglyViewButtons = jqwidgets.createInstance(".viewButton", "jqxButton", {
      width: 60,
      height: 24,
      value: "View"
    });
    let flattenViewButtons = flatten(uglyViewButtons);
    let uglyCancelButtons = jqwidgets.createInstance(
      ".cancelButton",
      "jqxButton",
      { width: 60, height: 24, value: "Cancel" }
    );
    let flattenCancelButtons = flatten(uglyCancelButtons);
    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
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
    if (flattenViewButtons) {
      for (let i = 0; i < flattenViewButtons.length; i++) {
        flattenViewButtons[i].addEventHandler(
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
    if (value === "View") {
      this.openViewDialog();
    }
  }

  openViewDialog() {
    this.viewDialogRef = this.dialog.open(ProjectViewDialogComponent, {
      width: "40%",
      height: "58vh"
    });
    this.viewDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
