import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home-courses",
  templateUrl: "./dashboard-courses.component.html",
  styleUrls: ["../dashboard.component.scss"]
})
export class DashboardCoursesComponent {
  constructor(private routes: Router) {}

  openCourseDetails() {
    this.routes.navigateByUrl("/courses-subcriptions-details-new");
  }
}
