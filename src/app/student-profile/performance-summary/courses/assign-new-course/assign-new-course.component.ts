import { Component, VERSION, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { MatOption, MatDialogRef, MatDialog } from "@angular/material";
import { AssigneesComponent } from "../assignees/assignees.component";

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

  constructor(private routes: Router, private fb: FormBuilder, private dialog:MatDialog) {}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      subject: new FormControl(""),
      grade: new FormControl("")
    });
  }
 

  columnDefs = [
    {
      headerName: "Title",
      field: "title",
      floatingFilter: "true",
      width: 175,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Created by",
      field: "createdby",
      floatingFilter: "true",
      width: 175,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Course Objective",
      field: "objective",
      floatingFilter: "true",
      width: 175,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Prerequisite Concepts",
      field: "prerequisite",
      floatingFilter: "true",
      width: 175,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Published on",
      field: "publishedon",
      width: 175,
      floatingFilter: "false",
      filter: "agDateColumnFilter",
      filterParams: {
        comparator: function(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          var dateParts = dateAsString.split("/");
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        clearButton: true
      }
    },
    {
      headerName: "Grades Applicable",
      field: "grades",
      floatingFilter: "true",
      width: 175,
      filter: "agTextColumnFilter",
      filterParams: {
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        clearButton: true,
        suppressAndOrCondition: true
      }
    },
    {
      headerName: "Actions",
      suppressMenu: true,
      suppressSorting: true,
      width: 175,
      filter: "false",
      template: `
            <button type="button" data-action-type="assign" style="color:white;background-color:#d81b60 ;">
              Assign
            </button>
          `
    }
  ];

  rowData = [
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Step by step probability",
      createdby: "Ganesh",
      objective: "view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    }
  ];

  public oncellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "assign":
          return this.openAssignees();
      }
    }
  }

  onNavigate(value) {
    this.routes.navigate([value]);
  }

  openAssignees() {
      this.newDialogRef = this.dialog.open(AssigneesComponent, {
        width: "39%",
        height: "60vh"
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
