import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./courses-details-published.component.html",
  styleUrls: ["./courses-details-published.component.scss"]
})
export class CoursesDetailsPublishedComponent {
  constructor(public dialog: MatDialog, private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Course Title",
      field: "title",
      floatingFilter: "true",
      width: 154,
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
      width: 154,
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
      width: 154,
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
      width: 154,
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
      headerName: "Approved on",
      field: "approvedon",
      width: 154,
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
      headerName: "Published on",
      field: "publishedon",
      width: 154,
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
      headerName: "Subscribers Count",
      field: "count",
      floatingFilter: "true",
      width: 154,
      filter: "agNumberColumnFilter",
      cellRenderer: function(params) {
        return `<a data-action-type='count'>` + params.value + `</a>`;
      }
    },
    {
      headerName: "Actions",
      suppressMenu: true,
      suppressSorting: true,
      width: 154,
      filter: "false",
      template: `
            <button type="button" data-action-type="deactivate" style="color:white;background-color:red;">
              DeActivate
            </button>
          `
    }
  ];

  rowData = [
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      prerequisite: "Probability,Trignometry"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      publishedby: "Ganesh",
      objective: "view", count: "6" ,
      
      createdon: "20/08/18" ,approvedon: "29/08/18", publishedon: "31/08/18",
      grades: "6,8,9",
      prerequisite: "Probability,Trignometry",
      course: "Course 1"
    }
  ];

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "deactivate":
          return this.openUpdateKnowledgeLevelDialog();

        case "count":
          return alert("Count is working");
      }
    }
  }

  onNavigate(value) {
    this.routes.navigate([value]);
  }

  openUpdateKnowledgeLevelDialog() {}

  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
