import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./learning-paths-list.component.html",
  styleUrls: ["./learning-paths-list.component.scss"]
})
export class LearningPathsListComponent {
  pendingvalue: any;
  constructor(private routes: Router) {}

  ngOnInit() {}

  columnDefs = [
    {
      headerName: "Student Name",
      field: "student",
      floatingFilter: "true",
      width: 305,
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
      headerName: "Completed",
      field: "completed",
      floatingFilter: "true",
      width: 305,
      filter: "agNumberColumnFilter",
      cellRenderer: function(params) {
        return `<a data-action-type='completed'>` + params.value + `</a>`;
      }
    },
    {
      headerName: "In progress",
      field: "inprogress",
      floatingFilter: "true",
      width: 305,
      filter: "agNumberColumnFilter",
      cellRenderer: function(params) {
        return `<a data-action-type='inprogress'>` + params.value + `</a>`;
      }
    },
    {
      headerName: "Pending",
      field: "pending",
      floatingFilter: "true",
      width: 305,
      filter: "agNumberColumnFilter",
      cellRenderer: function(params) {
        return `<a data-action-type='pending'>` + params.value + `</a>`;
      }
    }
  ];

  rowData = [
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    },
    {
      student: "Rajendra",
      completed: "10",
      inprogress: "8",
      pending: "7"
    }
  ];

  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "completed":
          return alert("Completed working");
        case "inprogress":
          return alert("Inprogress working");
        case "pending":
          return alert("this.pendingvalue");
      }
    }
  }

  agInit(params: any) {
    this.pendingvalue = params.pending;
  }

  onBack() {
    this.routes.navigateByUrl("/classroom/dashboard");
  }
}
