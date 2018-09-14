import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { CourseSubcriptionsDetailsNewComponent } from "./courses-subcriptions-details/courses-subcriptions-details-new/courses-subcriptions-details-new.component";
import { CourseSubcriptionsDetailsInprogressComponent } from "./courses-subcriptions-details/courses-subcriptions-details-inprogress/courses-subcriptions-details-inprogress.component";
import { CourseSubcriptionsDetailsCompletedComponent } from "./courses-subcriptions-details/courses-subcriptions-details-completed/courses-subcriptions-details-completed.component";
import { CourseSubcriptionsDetailsPendingComponent } from "./courses-subcriptions-details/courses-subcriptions-details-pending/courses-subcriptions-details-pending.component";
import { CoursesDetailsDraftsComponent } from "./courses-details/courses-details-drafts/courses-details-drafts.component";
import { CoursesDetailsApprovedComponent } from "./courses-details/courses-details-approved/courses-details-approved.component";
import { CoursesDetailsPendingApprovalComponent } from "./courses-details/courses-details-pending-approval/courses-details-pending-approval.component";
import { CoursesDetailsChangesComponent } from "./courses-details/courses-details-changes/courses-details-changes.component";
import { CoursesDetailsPublishedComponent } from "./courses-details/courses-details-published/courses-details-published.component";
import { NewCourseComponent } from "./new-course/new-course.component";

@NgModule({
  declarations: [
    CoursesComponent,
    CourseSubcriptionsDetailsNewComponent,
    CourseSubcriptionsDetailsInprogressComponent,
    CourseSubcriptionsDetailsPendingComponent,
    CourseSubcriptionsDetailsCompletedComponent,
    CoursesDetailsDraftsComponent,
    CoursesDetailsApprovedComponent,
    CoursesDetailsPendingApprovalComponent,
    CoursesDetailsChangesComponent,
    CoursesDetailsPublishedComponent,
    NewCourseComponent
  ],
  imports: [
    RouterModule,
    NgMaterialModule,
    NgJQWidgetsModule,
  ],
  exports: [
  ],
  entryComponents: [
  ]
})
export class CoursesModule {}
