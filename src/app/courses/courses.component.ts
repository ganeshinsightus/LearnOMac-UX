import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ClassroomFilterComponent } from "../dynamic-component/classroom-filter/classroom-filter.component";
import { Router } from "@angular/router";

@Component({
  templateUrl: "courses.component.html",
  styleUrls: ["courses.component.scss"]
})
export class CoursesComponent {
  constructor(private routes: Router) {}

  ngOnInit() {}

  openCoursesDetails() {
    this.routes.navigateByUrl("courses-subcriptions-details-new");
  }

  openAssignCourse() {
    this.routes.navigateByUrl("/assign-new-course");
  }

  openStudentCourseDetails() {
    this.routes.navigateByUrl("/courses-new");
  }

  openMyCourseDetails() {
    this.routes.navigateByUrl("/courses-details-approved");
  }
}
