import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { UpdateKnowledgeLevelDialogComponent } from "../../assessment-summary/update-knowledge-level-dialog/update-knowledge-level-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./learning-path-list.component.html",
  styleUrls: ["./learning-path-list.component.scss"]
})
export class LearningPathListComponent {
  uklDialogRef: MatDialogRef<UpdateKnowledgeLevelDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  data: any[] = [
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon: "20/08/18",
      createdby: "System",
      duedate: "31/08/18",
      status: "new",
      completedon: "-",
      knowledge: "-"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon: "20/08/18",
      createdby: "System",
      duedate: "31/08/18",
      status: "new",
      completedon: "-",
      knowledge: "-"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon: "20/08/18",
      createdby: "System",
      duedate: "31/08/18",
      status: "new",
      completedon: "-",
      knowledge: "-"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon: "20/08/18",
      createdby: "System",
      duedate: "31/08/18",
      status: "new",
      completedon: "-",
      knowledge: "-"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon: "20/08/18",
      createdby: "System",
      duedate: "31/08/18",
      status: "new",
      completedon: "-",
      knowledge: "-"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    },
    {
      title: "Grade 5-Maths.Unit 4- Trignometry",
      createdon: "20/08/18",
      createdby: "Teacher",
      duedate: "31/08/18",
      status: "completed",
      completedon: "28/08/18",
      knowledge: "Satisfactory"
    }
  ];

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(65vh)";
  }

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "createdon", type: "date" },
      { name: "createdby", type: "string" },
      { name: "duedate", type: "date" },
      { name: "status", type: "string" },
      { name: "completedon", type: "date" },
      { name: "knowledge", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Created on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "createdon",
      width: 150
    },
    {
      text: "Created by",
      dataField: "createdby",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Due date",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "duedate",
      width: 150
    },
    {
      text: "Status",
      dataField: "status",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Completed on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "completedon",
      width: 150
    },
    {
      text: "Update Knowledge Level",
      dataField: "knowledge",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 150,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='reassignButton' style='color:white;background-color:skyblue;margin-left:50px;'></div>`
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
    let uglyreassignButtons = jqwidgets.createInstance(
      ".reassignButton",
      "jqxButton",
      {
        width: 100,
        height: 24,
        value: "Reassign"
      }
    );

    let flattenreassignButtons = flatten(uglyreassignButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenreassignButtons) {
      for (let i = 0; i < flattenreassignButtons.length; i++) {
        flattenreassignButtons[i].addEventHandler(
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
    if (value === "Reassign") {
      alert("Reassigned Successfully");
    }
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
