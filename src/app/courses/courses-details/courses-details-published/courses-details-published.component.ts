import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./courses-details-published.component.html",
  styleUrls: ["./courses-details-published.component.scss"]
})
export class CoursesDetailsPublishedComponent {
  constructor(public dialog: MatDialog, private routes: Router) {}

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
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      
      concepts: "Probability,Trignometry"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      
      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "To understand a probability problems ..",
      createdon: "20/08/18",
      approvedon: "29/08/18",
      publishedon: "31/08/18",
      count: "6",
      

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
      { name: "approvedon", type: "date" },
      { name: "publishedon", type: "date" },
      { name: "count", type: "number" }
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
      width: 152
    },
    {
      text: "Course Objective",
      dataField: "objective",
      align: "center",
      cellsAlign: "center",
      width: 152
    },
    {
      text: "Pre-requisite Concepts",
      dataField: "concepts",
      align: "center",
      cellsAlign: "center",
      width: 152
    },
    {
      text: "Published on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "publishedon",
      width: 152
    },
    {
      text: "Created on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "createdon",
      width: 152
    },
    {
      text: "Approved on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "approvedon",
      width: 152
    },
    {
      text: "Subcribers count",
      cellsAlign: "center",
      align: "center",
      width: 152,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          value +
          `' class='countButton' style='color:white;background-color:skyblue;margin-left: 32px;'></div>`
        );
      }
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 152,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white;background-color:green;margin-left: 32px;'></div>`
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
      value: "Assign"
    });
    let flattenviewButtons = flatten(uglyviewButtons);
    let uglycountButtons = jqwidgets.createInstance(".countButton", "jqxButton", {
      width: 80,
      height: 24,
      value: "Count"
    });
    let flattencountButtons = flatten(uglycountButtons);

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
    if (flattencountButtons) {
      for (let i = 0; i < flattencountButtons.length; i++) {
        flattencountButtons[i].addEventHandler(
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
  onNavigate(value) {
    this.routes.navigate([value]);
  }

  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
