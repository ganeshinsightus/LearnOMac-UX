import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { SportsDialogComponent } from "../sports-dialog/sports-dialog.component";

@Component({
  selector: "sports-list",
  templateUrl: "./sports-list.component.html",
  styleUrls: ["./sports-list.component.scss"]
})
export class SportsListComponent {
  public academicDialogRef: MatDialogRef<SportsDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  columnDefs = [
    {
      headerName: "Medals",
      field: "medal",
      floatingFilter: "true",
      width: 252,
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
      headerName: "Sports",
      field: "sports",
      floatingFilter: "true",
      width: 252,
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
      headerName: "Competition Level",
      field: "competitionlevel",
      floatingFilter: "true",
      width: 252,
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
      headerName: "Received on",
      field: "receivedon",
      width: 252,
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
      headerName: "Actions",
      suppressMenu: true,
      suppressSorting: true,
      filter: "false",
      width: 252,
      template: `<button type="button" data-action-type="edit" style="background-color:pink;color:red;">
               Edit
             </button>
             <button type="button" data-action-type="delete" style="color:white";background-color:red;">
               Delete
             </button>
          `
    }
  ];

  rowData = [
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Silver",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Football",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Bronze",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Gold",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    },
    {
      medal: "Silver",
      sports: "Cricket",
      competitionlevel: "State Level",
      receivedon: "29/01/18",
      action: "view"
    }
  ];

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
      return this.openSportsDialog();
    }
  }
  openSportsDialog() {
    this.academicDialogRef = this.dialog.open(SportsDialogComponent, {
      width: "50%",
      height: "83vh"
    });
    this.academicDialogRef.disableClose = true;
  }
  onNavigation(value) {
    if (value) {
        this.routes.navigate([value]);
    }
    return false;
}
  onBack() {
    this.routes.navigateByUrl("/student/profile");
  }
}
