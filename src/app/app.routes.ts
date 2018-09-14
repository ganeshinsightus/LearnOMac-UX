import { AssessmentsComponent } from "./lesson-management/assessments/assessments.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { ClassroomDashboardComponent } from "./classroom-dashboard/classroom-dashboard.component";
import { ClassroomPerformanceComponent } from "./classroom-performance/classroom-performance.component";
import { CoursesComponent } from "./courses/courses.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LessonManagementComponent } from "./lesson-management/lesson-management.component";
import { LessonPlansComponent } from "./lesson-management/lesson-plans/lesson-plans.component";
import { LessonTrackingComponent } from "./lesson-management/lesson-tracking/lesson-tracking.component";
import { NgModule } from "@angular/core";
import { ParentCommunicationComponent } from "./student-profile/parent-communication/parent-communication.component";
import { ProfileComponent } from "./student-profile/profile/profile.component";
import { ProfilePerformanceComponent } from "./student-profile/performance-summary/performance-summary.component";
import { RouterModule, Routes } from "@angular/router";
import { StudentProfileComponent } from "./student-profile/student-profile.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: "Dashboard" },
    pathMatch: "full"
  },
  {
    path: "attendance",
    component: AttendanceComponent,
    data: { title: "Student Attendance" },
    pathMatch: "full"
  },
  {
    path: "class-dashboard",
    component: ClassroomDashboardComponent,
    data: { title: "Class Dashboard" },
    pathMatch: "full"
  },
  {
    path: "class-performance",
    component: ClassroomPerformanceComponent,
    data: { title: "Class Performance" },
    pathMatch: "full"
  },
  {
    path: "courses",
    component: CoursesComponent,
    data: { title: "Courses" },
    pathMatch: "full"
  },
  {
    path: "student",
    component: StudentProfileComponent,
    data: { title: "Student Profile" },
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "profile", component: ProfileComponent, pathMatch: "full" },
      {
        path: "performance",
        component: ProfilePerformanceComponent,
        pathMatch: "full"
      },
      {
        path: "parent-communication",
        component: ParentCommunicationComponent,
        pathMatch: "full"
      }
    ]
  },
  {
    path: "lesson",
    component: LessonManagementComponent,
    data: { title: "Lesson Management" },
    children: [
      { path: "", redirectTo: "plans", pathMatch: "full" },
      { path: "plans", component: LessonPlansComponent, pathMatch: "full" },
      {
        path: "tracking",
        component: LessonTrackingComponent,
        pathMatch: "full"
      },
      {
        path: "assessments",
        component: AssessmentsComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
