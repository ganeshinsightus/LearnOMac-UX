import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";


@Component({
  templateUrl: "./assessment-summary-list.component.html",
  styleUrls: ["./assessment-summary-list.component.scss"]
})
export class AssessmentSummaryListComponent {

  constructor(public dialog: MatDialog, private routes: Router) {

  }

 
  ngOnInit(){
  }

  columnDefs = [
    {
      headerName: "Prerequisite Standards",
      field: "prerequisitestds",
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
      headerName: "Curiculum Lesson Mapping",
      field: "mapping",
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
    // {
    //   headerName: "Received on",
    //   field: "receivedon",
    //   width: 405,
    //   floatingFilter: "false",
    //   filter: "agDateColumnFilter",
    //   filterParams: {
    //     comparator: function(filterLocalDateAtMidnight, cellValue) {
    //       var dateAsString = cellValue;
    //       var dateParts = dateAsString.split("/");
    //       var cellDate = new Date(
    //         Number(dateParts[2]),
    //         Number(dateParts[1]) - 1,
    //         Number(dateParts[0])
    //       );
    //       if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
    //         return 0;
    //       }
    //       if (cellDate < filterLocalDateAtMidnight) {
    //         return -1;
    //       }
    //       if (cellDate > filterLocalDateAtMidnight) {
    //         return 1;
    //       }
    //     },
    //     clearButton: true
    //   }
    // },
    // {
    //   headerName: "Actions",
    //   suppressMenu: true,
    //   suppressSorting: true,
    //   width: 405,
    //   filter: "false",
    //   template: `
    //         <button type="button" data-action-type="view" style="color:white;background-color:#0d47a1;">
    //           View
    //         </button>
    //         <button type="button" data-action-type="reply" style="color:white;background-color:#0d47a1;">
    //           Reply
    //        </button>
    //       `
    // }
  ];

  rowData = [
    {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
  ]
  
  
  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "view":
        //  return this.openDialog();
        case "reply":
        //  return this.openReplyDialog();
      }
    }
  }

 

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
 
}
