import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { AwardsDialogComponent } from "../awards-dialog/awards-dialog.component";

@Component({
  selector: "awards-list",
  templateUrl: "./awards-list.component.html",
  styleUrls: ["./awards-list.component.scss"]
})
export class AwardsListComponent {
  public academicDialogRef: MatDialogRef<AwardsDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  columnDefs = [
    {
      headerName: "Category",
      field: "category",
      floatingFilter: "true",
      width: 353,
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
      headerName: "Awards Title",
      field: "award",
      floatingFilter: "true",
      width: 353,
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
      headerName: "Awarded on",
      field: "awardedon",
      width: 353,
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
      width: 180,
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
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "General",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Sports",
      award: "Best Batsman Award",
      awardedon: "30-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      action: "view"
    }
  ];

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
      return this.openAwardsDialog();
    }
  }
  openAwardsDialog() {
    this.academicDialogRef = this.dialog.open(AwardsDialogComponent, {
      width: "50%",
      height: "70vh"
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
