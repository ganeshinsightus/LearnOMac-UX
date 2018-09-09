import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./courses-subcriptions-details-completed.component.html",
  styleUrls: ["./courses-subcriptions-details-completed.component.scss"]
})
export class CourseSubcriptionsDetailsCompletedComponent {

  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Course Title",
      field: "title",
      floatingFilter: "true",
      width: 205,
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
      width: 205,
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
      width: 205,
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
        headerName: "Published by",
        field: "publishedby",
        floatingFilter: "true",
        width: 205,
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
      width: 205,
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
      suppressMenu: true,
      suppressSorting: true,
      width: 205,
      filter: "false",
      template: `
            <button type="button" data-action-type="subscribe" style="color:white;background-color:green;">
              Completed
            </button>
          `
    }
  ];

  rowData = [
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      prerequisite: "Probability,Trignometry",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh" ,objective:"view",
      publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    }
  ];

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

    
    }
  }

  onNavigate(value){
    this.routes.navigate([value]);
  }

 
  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
