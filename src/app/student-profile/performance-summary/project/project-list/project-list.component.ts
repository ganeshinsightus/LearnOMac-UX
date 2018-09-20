import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { ProjectViewDialogComponent } from "../project-view-dialog/project-view-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";


@Component({
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent {
  viewDialogRef:MatDialogRef<ProjectViewDialogComponent>
  constructor(public dialog: MatDialog, private routes: Router) {

  }

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
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"Low performing"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
  ]
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "lesson", type: "string" },
      { name: "knowledge", type: "string" }
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
      width: 304
    },
    {
      text: "Lesson Name",
      dataField: "lesson",
      align: "center",
      cellsAlign: "center",
      width: 304
    },
    {
      text: "Knowledge Level",
      dataField: "knowledge",
      align: "center",
      cellsAlign: "center",
      width: 304
    },
    {
      text: "Details",
      cellsAlign: "center",
      align: "center",
      width: 304,
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
    this.routes.navigateByUrl("/student/performance");
  }
 
}
