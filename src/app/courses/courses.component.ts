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
    this.routes.navigateByUrl("/courses/courses-subcriptions-details-new");
  }

  openAssignCourse() {
    this.routes.navigateByUrl("/courses/assign-new-course");
  }

  openStudentCourseDetails() {
    this.routes.navigateByUrl("/courses/courses-new");
  }

  openMyCourseDetails() {
    this.routes.navigateByUrl("/courses/courses-details-approved");
  }

  openNewCourse(){
    this.routes.navigateByUrl("/courses/new-course");
  }
}
