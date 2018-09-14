import { AssignNewCourseComponent } from "../student-profile/performance-summary/courses/assign-new-course/assign-new-course.component";
import { CoursesCompletedComponent } from "../student-profile/performance-summary/courses/courses-completed/courses-completed.component";
import { CoursesDetailsApprovedComponent } from "./courses-details/courses-details-approved/courses-details-approved.component";
import { CoursesDetailsChangesComponent } from "./courses-details/courses-details-changes/courses-details-changes.component";
import { CoursesDetailsDraftsComponent } from "./courses-details/courses-details-drafts/courses-details-drafts.component";
import { CoursesDetailsPendingApprovalComponent } from "./courses-details/courses-details-pending-approval/courses-details-pending-approval.component";
import { CoursesDetailsPublishedComponent } from "./courses-details/courses-details-published/courses-details-published.component";
import { CoursesInprogressComponent } from "../student-profile/performance-summary/courses/courses-inprogress/courses-inprogress.component";
import { CoursesNewComponent } from "../student-profile/performance-summary/courses/courses-new/courses-new.component";
import { CoursesPendingComponent } from "../student-profile/performance-summary/courses/courses-pending/courses-pending.component";
import { CourseSubcriptionsDetailsCompletedComponent } from "./courses-subcriptions-details/courses-subcriptions-details-completed/courses-subcriptions-details-completed.component";
import { CourseSubcriptionsDetailsInprogressComponent } from "./courses-subcriptions-details/courses-subcriptions-details-inprogress/courses-subcriptions-details-inprogress.component";
import { CourseSubcriptionsDetailsNewComponent } from "./courses-subcriptions-details/courses-subcriptions-details-new/courses-subcriptions-details-new.component";
import { CourseSubcriptionsDetailsPendingComponent } from "./courses-subcriptions-details/courses-subcriptions-details-pending/courses-subcriptions-details-pending.component";
import { NewCourseComponent } from "./new-course/new-course.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "courses/courses-subcriptions-details-new",
    component: CourseSubcriptionsDetailsNewComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-inprogress",
    component: CourseSubcriptionsDetailsInprogressComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-pending",
    component: CourseSubcriptionsDetailsPendingComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-completed",
    component: CourseSubcriptionsDetailsCompletedComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-details-approved",
    component: CoursesDetailsApprovedComponent,
    data: { title: "Courses Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-details-drafts",
    component: CoursesDetailsDraftsComponent,
    data: { title: "Courses Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-details-published",
    component: CoursesDetailsPublishedComponent,
    data: { title: "Courses Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-details-pending-approval",
    component: CoursesDetailsPendingApprovalComponent,
    data: { title: "Courses Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-details-changes",
    component: CoursesDetailsChangesComponent,
    data: { title: "Courses Details" },
    pathMatch: "full"
  },
  {
    path: "courses/new-course",
    component: NewCourseComponent,
    data: { title: "New Course" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-new",
    component: CoursesNewComponent,
    data: { title: "Courses New" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-inprogress",
    component: CoursesInprogressComponent,
    data: { title: "Courses Inprogress" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-pending",
    component: CoursesPendingComponent,
    data: { title: "Courses Pending" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-completed",
    component: CoursesCompletedComponent,
    data: { title: "Courses Completed" },
    pathMatch: "full"
  },
  {
    path: "courses/assign-new-course",
    component: AssignNewCourseComponent,
    data: { title: "Assign new course" },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutesModule {}
