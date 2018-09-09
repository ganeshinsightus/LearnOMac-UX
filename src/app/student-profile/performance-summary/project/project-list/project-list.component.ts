import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { ProjectViewDialogComponent } from "../project-view-dialog/project-view-dialog.component";


@Component({
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent {
  viewDialogRef:MatDialogRef<ProjectViewDialogComponent>
  constructor(public dialog: MatDialog, private routes: Router) {

  }

 
  ngOnInit(){
  }

  columnDefs = [
    {
      headerName: "Title",
      field: "title",
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
      headerName: "Lesson Name",
      field: "lesson",
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
      headerName: "Knowledge Level",
      field: "knowledge",
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
      headerName: "Details",
      suppressMenu: true,
      suppressSorting: true,
      width: 305,
      filter: "false",
      template: `
            <button type="button" data-action-type="view" style="color:white;background-color:#0d47a1;">
              View
            </button>
          `
    }
  ];

  rowData = [
    {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"Low performing"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
     {
      title:"Number System",
      lesson:"Real Numbers",
      objective:"something",
      knowledge:"At risk"
     },
  ]
  
  
  public onCellClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "view":
          this.openViewDialog();
      }
    }
  }

  openViewDialog() {
    this.viewDialogRef = this.dialog.open(ProjectViewDialogComponent, {
      width: "40%",
      height: "58vh"
    });
    this.viewDialogRef.disableClose = true;
  }
 

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
 
}
