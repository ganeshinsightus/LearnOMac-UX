import { Component } from "@angular/core";
import { PerformanceFilterComponent } from "../../dynamic-component/performance-filter/performance-filter.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { Coordinates } from "../../dynamic-component/stacked-bar-chart-level4/stacked-bar-chart-level4";

@Component({
  selector: "profile-performance",
  templateUrl: "./performance-summary.component.html",
  styleUrls: ["../student-profile.component.scss"]
})
export class ProfilePerformanceComponent {
  showScroll: boolean;
  showAssignment: boolean;

  courses1: Coordinates[] = [
    { title: "New", value: 10 },
    { title: "In progress", value: 30 },
    { title: "Pending", value: 3 },
    { title: "Completed", value: 20 }
  ];

  courses2: Coordinates[] = [
    { title: "New", value: 30 },
    { title: "In progress", value: 20 },
    { title: "Pending", value: 4 },
    { title: "Completed", value: 10 }
  ];

  courses3: Coordinates[] = [
    { title: "New", value: 4 },
    { title: "In progress", value: 17 },
    { title: "Pending", value: 8 },
    { title: "Completed", value: 15 }
  ];

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
    { title: "Low Performing", value: 0 },
    { title: "Satisfactory", value: 0 },
    { title: "Above Average", value: 0 },
    { title: "Mastered", value: 0 }
  ];

  performanceFilterDialogRef: MatDialogRef<PerformanceFilterComponent>;

  constructor(private dialog: MatDialog, private routes: Router) {
    this.openDialog();
  }
  openDialog() {
    this.performanceFilterDialogRef = this.dialog.open(
      PerformanceFilterComponent,
      {
        width: "55%",
        height: "calc(32vh)"
      }
    );
    this.performanceFilterDialogRef.disableClose = true;
  }
  openCreatePath() {
    this.routes.navigateByUrl("/student/performance/learning-path-new");
  }
  openAssessmentList() {
    this.routes.navigateByUrl("/student/performance/assessment-summary-list");
  }
  openUpdateList() {
    this.routes.navigateByUrl("/student/performance/update-assessment-summary");
  }

  openLearningPathList() {
    this.routes.navigateByUrl("/student/performance/learning-path-list");
  }
  openCourses() {
    this.routes.navigateByUrl("/courses/courses-new");
  }
  openAssignCourses() {
    this.routes.navigateByUrl("/courses/assign-new-course");
  }
  openProjectList() {
    this.routes.navigateByUrl("/student/performance/project-list");
  }
  openProjectListUpdate() {
    this.routes.navigateByUrl("/student/performance/project-list-update");
  }
}
