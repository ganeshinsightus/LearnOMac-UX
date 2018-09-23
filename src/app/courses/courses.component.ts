import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "courses.component.html",
  styleUrls: ["courses.component.scss"]
})
export class CoursesComponent {
  constructor(private routes: Router) {}

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
