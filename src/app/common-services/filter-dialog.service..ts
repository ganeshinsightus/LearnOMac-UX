import { Injectable } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { FilterComponent } from "../common-component/filter/filter.component";

@Injectable()
export class FilterDialogService{
    filterPopupDialogRef: MatDialogRef<FilterComponent>;
    
    constructor(private dialog:MatDialog){
    }

    openAttendanceFilter() {
        this.filterPopupDialogRef = this.dialog.open(FilterComponent, {
          width: "55%",
          height: "calc(46vh)"
        });
        this.filterPopupDialogRef.componentInstance.showAttendance = true;
        this.filterPopupDialogRef.disableClose = true;
      }

      
}
