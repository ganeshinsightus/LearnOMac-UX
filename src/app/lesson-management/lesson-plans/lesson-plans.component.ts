import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { FilterComponent } from "../../common-component/filter/filter.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "lesson-plans",
  templateUrl: "./lesson-plans.component.html",
  styleUrls: ["../lesson-management.component.scss"]
})
export class LessonPlansComponent {
  showScroll: boolean;
  showScrolls: boolean;
  lessonplanFilterDialogRef: MatDialogRef<FilterComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {
    this.openDialog();
  }


  openDialog() {
    this.lessonplanFilterDialogRef = this.dialog.open(
      FilterComponent,
      {
        width: "55%",
        height: "calc(69vh)"
      }
    );
    this.lessonplanFilterDialogRef.componentInstance.showLessonPlan = true;
    this.lessonplanFilterDialogRef.disableClose = true;
  }

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(63vh)";
  }

  data: any[] = [
    {
      title: "Probability with samples",
      template: "Math 1 with samples",
      createdon: "1/2/18",
      updatedon: "4/2/18",
      createdby: "Rajendra",
      updatedby: "Rajendra",
      status: "Published"
      //view , activate , copy , print
    },
    {
      title: "Probability 2 with samples",
      template: "Math 2 with samples",
      createdon: "5/2/18",
      updatedon: "8/2/18",
      createdby: "me",
      updatedby: "me",
      status: "Draft"
      //view , edit , delete , publish 
    },
    {
        title: "Probability 4 with samples",
        template: "Math 2 with samples",
        createdon: "5/2/18",
        updatedon: "8/2/18",
        createdby: "me",
        updatedby: "me",
        status: "Published"
        //view , activate , edit , copy, delete  
      },
    {
      title: "Probability Updated with samples",
      template: "Math 2 with samples",
      createdon: "10/2/18",
      updatedon: "18/2/18",
      createdby: "me",
      updatedby: "me",
      status: "Active"
      //view , deactivate , edit , delete
    },
    
  ];

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "template", type: "string" },
      { name: "createdon", type: "date" }, 
      { name: "createdby", type: "string" },
      { name: "updatedon", type: "date" }, 
      { name: "updatedby", type: "string" },
      { name: "status", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Lesson Plan Title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 157
    },
    {
      text: "Lesson Plan Template",
      dataField: "template",
      align: "center",
      cellsAlign: "center",
      width: 157
    },
    {
      text: "Created on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "createdon",
      width: 157
    },
    {
      text: "Created by",
      dataField: "createdby",
      align: "center",
      cellsAlign: "center",
      width: 157
    },
    {
      text: "Updated on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "updatedon",
      width: 157
    },
    {
      text: "Updated by",
      dataField: "updatedby",
      align: "center",
      cellsAlign: "center",
      width: 157
    },
    {
      text: "Status",
      dataField: "status",
      align: "center",
      cellsAlign: "center",
      width: 157
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 157,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white;background-color:skyblue;margin-left:48px'></div>
          <div data-row='` +
          row +
          `' class='replyButton' style='color:white;background-color:green;margin-left:48px;
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
    let uglyviewButtons = jqwidgets.createInstance(
      ".viewButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "View"
      }
    );
    let uglyreplyButtons = jqwidgets.createInstance(
      ".replyButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Copy"
      }
    );
    let flattenviewButtons = flatten(uglyviewButtons);
    let flattenreplyButtons = flatten(uglyreplyButtons);

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
    if (flattenreplyButtons) {
      for (let i = 0; i < flattenreplyButtons.length; i++) {
        flattenreplyButtons[i].addEventHandler(
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
     //  this.openDialog();
    }
    if (value === "Reply") {
     // this.openReplyDialog();
   }
  }


  openNewLessonPlan(){
      this.routes.navigateByUrl('/lesson/plans/create-new')
  }
}
