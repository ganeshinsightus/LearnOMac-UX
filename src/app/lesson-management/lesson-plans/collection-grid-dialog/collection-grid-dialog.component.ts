import { Component, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import 'ag-grid'

@Component({
  templateUrl: "./collection-grid-dialog.component.html",
  styleUrls: ["./collection-grid-dialog.component.scss"]
})
export class CollectionDialogComponent {
    private gridApi;
    private gridColumnApi;
    private rowData: any[];
  
    private columnDefs;
    private groupDefaultExpanded;
    private getDataPath;
    private autoGroupColumnDef;
  
    constructor() {
      this.columnDefs = [
        {
          field: "groupType",
          valueGetter: function(params) {
            return params.data ? "Provided" : "Filler";
          }
        }
      ];
      this.rowData = [
        { orgHierarchy: ["A"] },
        {
          orgHierarchy: ["A", "B"]
        },
        {
          orgHierarchy: ["C", "D"]
        },
        {
          orgHierarchy: ["E", "F", "G", "H"]
        }
      ];
      this.groupDefaultExpanded = -1;
      this.getDataPath = function(data) {
        return data.orgHierarchy;
      };
      this.autoGroupColumnDef = {
        headerName: "Organisation Hierarchy",
        cellRendererParams: {
          suppressCount: true,
          padding: 20
        }
      };
    }
  
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
}
