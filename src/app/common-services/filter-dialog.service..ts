import { Injectable } from "@angular/core";
import { ClassroomFilterComponent } from "../dynamic-component/classroom-filter/classroom-filter.component";
import { MatDialogRef, MatDialog } from "@angular/material";

@Injectable()
export class FilterDialogService{
    filterPopupDialogRef: MatDialogRef<ClassroomFilterComponent>;
    
    constructor(private dialog:MatDialog){
    }

    openAttendanceFilter() {
        this.filterPopupDialogRef = this.dialog.open(ClassroomFilterComponent, {
          width: "55%",
          height: "calc(46vh)"
        });
        this.filterPopupDialogRef.componentInstance.showAttendance = true;
        this.filterPopupDialogRef.disableClose = true;
      }

      
}
