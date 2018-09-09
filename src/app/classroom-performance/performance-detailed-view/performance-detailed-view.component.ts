import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Coordinates } from "../../dynamic-component/stacked-bar-chart/stacked-bar-chart";
import { Router } from "@angular/router";

@Component({
  templateUrl: "performance-detailed-view.component.html",
  styleUrls: ["../classroom-performance.component.scss"]
})
export class ClassroomPerformanceDetailedViewComponent {

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

  constructor(private routes: Router) {}
  ngOnInit() {
  }
 
  openClassDetails() {
    this.routes.navigateByUrl("class/performance/details");
  }

  openClassUpdate() {
    this.routes.navigateByUrl("class/performance/update");
  }

  openStandardDetails() {
    this.routes.navigateByUrl("class/prerequisite/details");
  }

  openStandardUpdate() {
    this.routes.navigateByUrl("class/prerequisite/update");
  }
  openProjectList(){
    this.routes.navigateByUrl('class/project/details');
  }
  openProjectListUpdate(){
    this.routes.navigateByUrl('class/project/update');
  }
  openLearningPathPublish(){
    this.routes.navigateByUrl('class/learning-path/publish');
  }
  openLearningPathDetails(){
    this.routes.navigateByUrl('class/learning-path/details');
  }
  
}
