import { Component, ViewChild } from "@angular/core";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { Router } from "@angular/router";
import { ProjectViewDialogComponent } from "../../../student-profile/performance-summary/project/project-view-dialog/project-view-dialog.component";
import { MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: "manage-project-content",
  templateUrl: "./manage-project-content.component.html",
  styleUrls: ["./manage-project-content.component.scss"]
})
export class ManageProjectContentComponent {
  viewDialogRef: MatDialogRef<ProjectViewDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(77vh)";
  }
  data: any[] = [
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    },
    {
      title: "Activity 1 - real number quiz",
      lesson: "Real Numbers",
      addedon: "10-08-2018",
      updatedon:"18-08-2018"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "lesson", type: "string" },
      { name: "addedon", type: "date" },
      { name: "updatedon", type: "date" }
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
      width: 249
    },
    {
      text: "Lesson Name",
      dataField: "lesson",
      align: "center",
      cellsAlign: "center",
      width: 249
    },
    {
      text: "Added on",
      dataField: "addedon",
      align: "center",
      cellsFormat: "d",
      cellsAlign: "center",
      width: 249
    },
    {
      text: "Last updated on",
      dataField: "updatedon",
      align: "center",
      cellsFormat: "d",
      cellsAlign: "center",
      width: 249
    },
    {
      text: "Details",
      cellsAlign: "center",
      align: "center",
      width: 249,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white ;background-color:#0d47a1;margin-left: 108px;'></div>`
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
    this.routes.navigateByUrl("/manage-contents");
  }
}
