import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FilterComponent } from "../common-component/filter/filter.component";

@Component({
  templateUrl: "curriculum-content.component.html",
  styleUrls: ["curriculum-content.component.scss"]
})
export class CurriculumContentComponent {
  showScroll1:boolean;
  showScroll2:boolean;
  showScroll3:boolean;
  showScroll4:boolean;
  filterPopupDialogRef: MatDialogRef<FilterComponent>;

  constructor(private dialog: MatDialog) {
    this.openDialog();
  }
  
  openDialog() {
    this.filterPopupDialogRef = this.dialog.open(FilterComponent, {
      width: "55%",
      height: "cal(59vh)"
    });
    this.filterPopupDialogRef.componentInstance.showCurriculumContent = true;
    this.filterPopupDialogRef.disableClose = true;
  }

}
