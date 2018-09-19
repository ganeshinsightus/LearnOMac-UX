import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./courses-details-drafts.component.html",
  styleUrls: ["./courses-details-drafts.component.scss"]
})
export class CoursesDetailsDraftsComponent {

  constructor(public dialog: MatDialog, private routes: Router) {}
  
  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(65vh)";
  }

  data: any[] = [
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",
      concepts: "Probability,Trignometry"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",
      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      audience: "parents",
      objective: "To understand a probability problems ..",
      createdon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "objective", type: "string" },
      { name: "concepts", type: "string" },
      { name: "createdon", type: "date" },
      { name: "audience", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Course Title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 200
    },
    {
      text: "Course Objective",
      dataField: "objective",
      align: "center",
      cellsAlign: "center",
      width: 200
    },
    {
      text: "Pre-requisite Concepts",
      dataField: "concepts",
      align: "center",
      cellsAlign: "center",
      width: 200
    },
    {
      text: "Target Audience",
      align: "center",
      cellsAlign: "center",
      dataField: "audience",
      width: 200
    },
    {
      text: "Created on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "createdon",
      width: 200
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 200,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='color:white;background-color:red;margin-left: 72px;'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:skyblue;margin-left: 72px;
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
    if (value === "View") {
      // this.openDialog();
    }
  }
  onNavigate(value){
    this.routes.navigate([value]);
  }

 
  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
