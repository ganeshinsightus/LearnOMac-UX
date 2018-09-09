import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./pre-requisite-details.component.html",
  styleUrls: ["./pre-requisite-details.component.scss"]
})
export class PrerequisiteDetailsComponent {

  constructor(private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Student Names",
      field: "student",
      floatingFilter: "true",
      width: 405,
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
      width: 405,
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
      width: 405,
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
  ];

  rowData = [
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
     },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    }
  ];


  onBack() {
    this.routes.navigateByUrl("classroom/performance/detailed-view");
  }
}
