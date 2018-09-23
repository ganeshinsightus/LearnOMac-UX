import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { ClassroomPerformanceFilterComponent } from "../dynamic-component/classroom-performance-filter/classroom-performance-filter.component";
import { Coordinates } from "../dynamic-component/stacked-bar-chart/stacked-bar-chart";
import { Router } from "@angular/router";

@Component({
  templateUrl: "classroom-performance.component.html",
  styleUrls: ["classroom-performance.component.scss"]
})
export class ClassroomPerformanceComponent {
  showScroll:boolean;

  values1: Coordinates[] = [
    { title: "Low Performing", value: 40 },
    { title: "Averge", value: 21 },
    { title: "Above Average", value: 54 },
    { title: "Mastered", value: 9 }
  ];

  values2: Coordinates[] = [
    { title: "Low Performing", value: 25 },
    { title: "Satisfactory", value: 30 },
    { title: "Above Average", value: 12 },
    { title: "Mastered", value: 3 }
  ];

  values3: Coordinates[] = [
    { title: "Low Performing", value: 60 },
    { title: "Satisfactory", value: 29 },
    { title: "Above Average", value: 44 },
    { title: "Mastered", value: 10 }
  ];

  values4: Coordinates[] = [
    { title: "Low Performing", value: 22 },
    { title: "Satisfactory", value: 4 },
    { title: "Above Average", value: 12 },
    { title: "Mastered", value: 40 }
  ];

  values5: Coordinates[] = [
    { title: "Low Performing", value: 9 },
    { title: "Satisfactory", value: 45 },
    { title: "Above Average", value: 33 },
    { title: "Mastered", value: 45 }
  ];

  filterPopupDialogRef: MatDialogRef<ClassroomPerformanceFilterComponent>;

  constructor(private dialog: MatDialog, private routes: Router) {
    this.openDialog();
  }

  openDialog() {
    this.filterPopupDialogRef = this.dialog.open(
      ClassroomPerformanceFilterComponent,
      {
        width: "55%",
        height: "calc(59vh)"
      }
    );
    this.filterPopupDialogRef.disableClose = true;
  }

  openPerformanceUpdate() {
    this.routes.navigateByUrl("class-performance/update");
  }

  openDetailedView() {
    this.routes.navigateByUrl("/class-performance/detailed-view");
  }
}
