import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./performance-summary-list.component.html",
  styleUrls: ["./performance-summary-list.component.scss"]
})
export class PerformanceSummaryListComponent {
  constructor(private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Assessment Type",
      field: "assessmenttype",
      floatingFilter: "true",
      width: 245,
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
      headerName: "Standard",
      field: "standard",
      floatingFilter: "true",
      width: 245,
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
      headerName: "Lesson",
      field: "lesson",
      floatingFilter: "true",
      width: 245,
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
      headerName: "Student Name",
      field: "student",
      floatingFilter: "true",
      width: 245,
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
      field: "knowledgelevel",
      floatingFilter: "true",
      width: 245,
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
    }
  ];

  rowData = [
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Post lesson",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Rajan",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 2",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Post lesson",
      standard: "Grade 3",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Rajan",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 2",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "Mastered"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 9",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Satisfactory"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 1",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Mastered"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Mastered"
    }
  ];

  onBack() {
    this.routes.navigateByUrl("/classroom/dashboard");
  }
}
