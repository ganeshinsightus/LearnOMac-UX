import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./pre-requisite-update.component.html",
  styleUrls: ["./pre-requisite-update.component.scss"]
})
export class PrerequisiteUpdateComponent {
  showSave:boolean;
  
  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {}

  knowledgeLevels = [
    "Low Performing",
    "Satisfactory",
    "Above Average",
    "Mastered"
  ];
  learningMethods = [
    "Special one to one session",
    "Independent Study",
    "Learned from peers",
    "Classroom presentation by Student",
    "Revision by Teacher"
  ];
  
  columnDefs = [
    {
      headerName: "Student Name",
      field: "student",
      floatingFilter: "true",
      width: 175,
      editable: false,
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
      headerName: "Present Knowledge Level",
      field: "preknowledge",
      floatingFilter: "true",
      width: 175,
      editable: false,
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
      headerName: "Updated on",
      field: "updatedon",
      width: 175,
      editable: false,
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
      headerName: "Updated by",
      field: "updatedby",
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
      headerName: "New Knowledge Level",
      field: "newknowledge",
      floatingFilter: "true",
      width: 175,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: this.knowledgeLevels
      }
    },
    {
      headerName: "Learning Method",
      field: "method",
      floatingFilter: "true",
      width: 175,
      editable: true,
      filter: "agTextColumnFilter",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: this.learningMethods
      }
    },
    {
      headerName: "Remarks",
      field: "remarks",
      floatingFilter: "true",
      width: 175,
      editable: true,
      filter: "agTextColumnFilter",
      cellEditor: "agTextCellEditor",
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
  ];

  rowData = [
    {
      student: "Ganesh",
      preknowledge: "-",
      updatedon: "20/08/18",
      updatedby: "System",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "-",
      updatedon: "20/08/18",
      updatedby: "System",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledge: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledge: "Above Average",
      remarks: "-"
    }
  ];
  
  onEdit() {
    this.showSave = true;
  }

  onSave() {
    alert("Data saved successfully");
  }

  onBack() {
    this.routes.navigateByUrl("class-performance/detailed-view");
  }

  
}
