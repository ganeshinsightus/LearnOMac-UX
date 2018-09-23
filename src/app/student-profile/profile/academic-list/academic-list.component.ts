import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { AcademicDialogComponent } from "../academic-dialog/academic-dialog.component";

@Component({
  selector: "academic-list",
  templateUrl: "./academic-list.component.html",
  styleUrls: ["./academic-list.component.scss"]
})
export class AcademicListComponent {
  public academicDialogRef: MatDialogRef<AcademicDialogComponent>;

  tabLinks = [
    { path: 'student/profile/academic', label: 'Academic' },
    { path: 'student/profile/sports', label: 'Sports' },
    { path: 'student/profile/awards', label: 'Awards' }
  ];

  constructor(public dialog: MatDialog, private routes: Router) {}

  columnDefs = [
    {
      headerName: "Badge",
      field: "badge",
      floatingFilter: "true",
      width: 180,
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
      width: 180,
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
      headerName: "Awarded by",
      field: "awardedby",
      floatingFilter: "true",
      width: 180,
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
      headerName: "Role",
      field: "role",
      floatingFilter: "true",
      width: 180,
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
      headerName: "Subject",
      field: "subject",
      floatingFilter: "true",
      width: 180,
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
      headerName: "Topic",
      field: "topic",
      floatingFilter: "true",
      width: 180,
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
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Guru",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      grade: "9",
      badge: "Guru",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "edit"
    }
  ];

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
      return this.openAcademicDialog();
    }
  }

  openAcademicDialog() {
    this.academicDialogRef = this.dialog.open(AcademicDialogComponent, {
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
