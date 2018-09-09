import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { UpdateKnowledgeLevelDialogComponent } from "../../assessment-summary/update-knowledge-level-dialog/update-knowledge-level-dialog.component";


@Component({
  templateUrl: "./learning-path-list.component.html",
  styleUrls: ["./learning-path-list.component.scss"]
})
export class LearningPathListComponent {
  uklDialogRef: MatDialogRef<UpdateKnowledgeLevelDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Title",
      field: "title",
      floatingFilter: "true",
      width: 153,
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
      headerName: "Created on",
      field: "createdon",
      width: 153,
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
      headerName: "Created by",
      field: "createdby",
      floatingFilter: "true",
      width: 153,
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
      headerName: "Due date",
      field: "duedate",
      width: 153,
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
      headerName: "Status",
      field: "status",
      floatingFilter: "true",
      width: 153,
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
      headerName: "Completed on",
      field: "completedon",
      width: 153,
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
      headerName: "Knowledge Level",
      field: "knowledge",
      floatingFilter: "true",
      width: 153,
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
      width: 153,
      filter: "false",
      template: `
            <button type="button" data-action-type="reassign" style="color:white;background-color:green;" >
              Re-assign
            </button>
          `
    }
  ];

  rowData = [
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

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");
      debugger;
      if (data.status == "completed") {
        switch (actionType) {
          case "reassign":
            return this.openUpdateKnowledgeLevelDialog();
        }
      }
    }
  }

  openUpdateKnowledgeLevelDialog() {
    alert("Reassigned Successfully");
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
