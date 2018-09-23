import { Component, VERSION, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Pipe, PipeTransform } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { MatOption, MatDialogRef, MatDialog } from "@angular/material";
import { AssigneesComponent } from "../assignees/assignees.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./assign-new-course.component.html",
  styleUrls: ["./assign-new-course.component.scss"]
})
export class AssignNewCourseComponent {
  searchUserForm: FormGroup;
  subjectFilters = [
    {
      key: 1,
      value: "Maths"
    },
    {
      key: 2,
      value: "Science"
    },
    {
      key: 3,
      value: "Social"
    },
    {
      key: 4,
      value: "English"
    }
  ];

  gradeFilters = [
    {
      key: 1,
      value: "1"
    },
    {
      key: 2,
      value: "2"
    },
    {
      key: 3,
      value: "3"
    },
    {
      key: 4,
      value: "4"
    }
  ];

  @ViewChild("allSelected")
  private allSelected: MatOption;

  @ViewChild("allSelecteds")
  private allSelecteds: MatOption;

  newDialogRef: MatDialogRef<AssigneesComponent>;

  constructor(
    private routes: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      subject: new FormControl(""),
      grade: new FormControl("")
    });
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
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",
      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",
      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "objective", type: "string" },
      { name: "concepts", type: "string" },
      { name: "publishedon", type: "date" },
      { name: "createdby", type: "string" },
      { name: "grades", type: "string" }
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
      width: 178
    },
    {
      text: "Course Objective",
      dataField: "objective",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Pre-requisite Concepts",
      dataField: "concepts",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Grades Applicable",
      align: "center",
      cellsAlign: "center",
      dataField: "grades",
      width: 178
    },
    {
      text: "Created by",
      align: "center",
      cellsAlign: "center",
      dataField: "createdby",
      width: 178
    },
    {
      text: "Published on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "publishedon",
      width: 178
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 178,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='assignButton' style='color:white ;background-color:#d81b60;margin-left: 58px;'></div>`
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
    let uglyassignButtons = jqwidgets.createInstance(
      ".assignButton",
      "jqxButton",
      {
        width: 80,
        height: 24,
        value: "Assign"
      }
    );
    let flattenassignButtons = flatten(uglyassignButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenassignButtons) {
      for (let i = 0; i < flattenassignButtons.length; i++) {
        flattenassignButtons[i].addEventHandler(
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
    if (value === "Assign") {
      this.openAssignees();
    }
  }

  onNavigate(value) {
    this.routes.navigate([value]);
  }

  openAssignees() {
    this.newDialogRef = this.dialog.open(AssigneesComponent, {
      width: "39%",
      height: "calc(60vh)"
    });
    this.newDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.subject.patchValue([
        ...this.subjectFilters.map(item => item.key),
        0
      ]);
    } else {
      this.searchUserForm.controls.subject.patchValue([]);
    }
  }

  toggleAllGradeSelection() {
    if (this.allSelecteds.selected) {
      this.searchUserForm.controls.grade.patchValue([
        ...this.gradeFilters.map(item => item.key),
        0
      ]);
    } else {
      this.searchUserForm.controls.grade.patchValue([]);
    }
  }
}
