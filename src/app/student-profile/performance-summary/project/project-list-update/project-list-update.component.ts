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

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Low performing",
      updatedby: "teacher"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

      knowledge: "Satisfactory",
      updatedby: "system"
    },
    {
      title: "Real Numbers in day to day life",
      lesson: "Real Numbers",

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
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Lesson Name",
      dataField: "lesson",
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Knowledge Level",
      dataField: "knowledge",
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Updated by",
      align: "center",
      cellsAlign: "center",
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
      width: 203,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='updateButton' style='color:white ;background-color:#0d47a1;margin-left: 58px;'></div>`
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
      width: 80,
      height: 24,
      value: "View"
    });
    let flattenviewButtons = flatten(uglyviewButtons);

    let uglyupdateButtons = jqwidgets.createInstance(
      ".updateButton",
      "jqxButton",
      {
        width: 80,
        height: 24,
        value: "Update Knowledge Level"
      }
    );
    let flattenupdateButtons = flatten(uglyupdateButtons);

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
    if (flattenupdateButtons) {
      for (let i = 0; i < flattenupdateButtons.length; i++) {
        flattenupdateButtons[i].addEventHandler(
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
      this.openViewDialog();
    }
    if (value === "Update Knowledge Level") {
      this.openUpdateKnowledgeLevelDialog();
    }
  }

  openUpdateKnowledgeLevelDialog() {
    this.uklDialogRef = this.dialog.open(
      ProjectUpdateKnowledgeLevelDialogComponent,
      {
        width: "40%",
        height: "60vh"
      }
    );
    this.uklDialogRef.disableClose = true;
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
