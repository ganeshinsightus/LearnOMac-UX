import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./courses-subcriptions-details-new.component.html",
  styleUrls: ["./courses-subcriptions-details-new.component.scss"]
})
export class CourseSubcriptionsDetailsNewComponent {
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
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      concepts: "Probability,Trignometry"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

      concepts: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",

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
      { name: "publishedon", type: "date" },
      { name: "createdby", type: "string" }
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
      width: 203
    },
    {
      text: "Course Objective",
      dataField: "objective",
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Pre-requisite Concepts",
      dataField: "concepts",
      align: "center",
      cellsAlign: "center",
      width: 203
    },
    {
      text: "Created by",
      align: "center",
      cellsAlign: "center",
      dataField: "createdby",
      width: 203
    },
    {
      text: "Published on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "publishedon",
      width: 203
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
          `' class='viewButton' style='color:white;background-color:green;margin-left: 58px;'></div>`
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
      value: "Subscribe"
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
      // this.openDialog();
    }
  }


  onNavigate(value) {
    this.routes.navigate([value]);
  }

  openUpdateKnowledgeLevelDialog() {
    alert("updated soon");
  }

  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
