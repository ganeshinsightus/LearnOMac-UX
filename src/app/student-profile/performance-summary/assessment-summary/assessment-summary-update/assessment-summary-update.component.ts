import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { UpdateKnowledgeLevelDialogComponent } from "../update-knowledge-level-dialog/update-knowledge-level-dialog.component";

@Component({
  templateUrl: "./assessment-summary-update.component.html",
  styleUrls: ["./assessment-summary-update.component.scss"]
})
export class AssessmentSummaryUpdateComponent {
  uklDialogRef: MatDialogRef<UpdateKnowledgeLevelDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Prerequisite Standards",
      field: "prerequisitestds",
      floatingFilter: "true",
      width: 152,
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
      headerName: "Curiculum Lesson Mapping",
      field: "mapping",
      floatingFilter: "true",
      width: 152,
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
      headerName: "Knowledge Level",
      field: "knowledge",
      floatingFilter: "true",
      width: 152,
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
      width: 152,
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
      width: 152,
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
      headerName: "Learning Method",
      field: "lmethods",
      floatingFilter: "true",
      width: 152,
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
      headerName: "Remarks",
      field: "remarks",
      floatingFilter: "true",
      width: 152,
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
      width: 152,
      filter: "false",
      template: `
            <button type="button" data-action-type="update" style="color:white;background-color:#512da8 ;">
              UpdateKnowledge Level
            </button>
          `
    }
  ];

  rowData = [
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      updatedby: "System",
      lmethods: "-",
      remarks: "-"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Special one to one session",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      lmethods: "Learned from peers",
      remarks: "nothing",
      updatedby: "Teacher"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Special one to one session",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      lmethods: "Learned from peers",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Independent Study",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Class presentation by Student",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Class presentation by Student",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Revision by Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    }
  ];

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "update":
          return this.openUpdateKnowledgeLevelDialog();
      }
    }
  }

  openUpdateKnowledgeLevelDialog() {
    this.uklDialogRef = this.dialog.open(UpdateKnowledgeLevelDialogComponent, {
      width: "40%",
      height: "72vh"
    });
    this.uklDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
