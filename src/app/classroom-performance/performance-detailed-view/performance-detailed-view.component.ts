import { Component } from "@angular/core";
import { Coordinates } from "../../common-component/stacked-bar-chart/stacked-bar-chart";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FilterComponent } from "../../common-component/filter/filter.component";

@Component({
  templateUrl: "performance-detailed-view.component.html",
  styleUrls: ["../classroom-performance.component.scss"]
})
export class ClassroomPerformanceDetailedViewComponent {

  showScroll:boolean;
  showScroll1:boolean;
  showScroll2:boolean;

  performanceFilterDialogRef:MatDialogRef<FilterComponent>;

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

  values6: Coordinates[] = [
    { title: "Low Performing", value: 50 },
    { title: "Satisfactory", value: 0 },
    { title: "Above Average", value: 0 },
    { title: "Mastered", value: 50 }
  ];

  project_values1: Coordinates[] = [
    { title: "Assessment Pending", value: 4 },
    { title: "Low Performing", value: 6 },
    { title: "Satisfactory", value: 7 },
    { title: "Above Average", value: 8 },
    { title: "Mastered", value: 3 }
  ];

  project_values2: Coordinates[] = [
    { title: "Assessment Pending", value: 0 },
    { title: "Low Performing", value: 16 },
    { title: "Satisfactory", value: 27 },
    { title: "Above Average", value: 28 },
    { title: "Mastered", value: 9 }
  ];

  project_values3: Coordinates[] = [
    { title: "Assessment Pending", value: 14 },
    { title: "Low Performing", value: 0 },
    { title: "Satisfactory", value: 0 },
    { title: "Above Average", value: 0 },
    { title: "Mastered", value: 0 }
  ];

  project_values4: Coordinates[] = [
    { title: "Assessment Pending", value: 0 },
    { title: "Low Performing", value: 0 },
    { title: "Satisfactory", value: 0 },
    { title: "Above Average", value: 0 },
    { title: "Mastered", value: 0 }
  ];

  constructor(private routes: Router , private dialog: MatDialog) {
    this.openDialog()
  }

  openDialog() {
    this.performanceFilterDialogRef = this.dialog.open(
      FilterComponent,
      {
        width: "55%",
        height: "calc(32vh)"
      }
    );
    this.performanceFilterDialogRef.componentInstance.showPerformanceDetailedView = true ;
    this.performanceFilterDialogRef.disableClose = true;
  }
 
  openClassDetails() {
    this.routes.navigateByUrl("class-performance/details");
  }

  openClassUpdate() {
    this.routes.navigateByUrl("class-performance/update");
  }

  openStandardDetails() {
    this.routes.navigateByUrl("class-performance/prerequisite-details");
  }

  openStandardUpdate() {
    this.routes.navigateByUrl("class-performance/prerequisite-update");
  }
  openProjectViewDetails(){
    this.routes.navigateByUrl('class-performance/project-details');
  }
  openProjectListUpdate(){
    this.routes.navigateByUrl('class-performance/project-update');
  }
  openProjectListPublish(){
    this.routes.navigateByUrl('class-performance/project-publish');
  }

  openLearningPathPublish(){
    this.routes.navigateByUrl('class-performance/learning-path-publish');
  }
  openLearningPathDetails(){
    this.routes.navigateByUrl('class-performance/learning-path-details');
  }
  
}
