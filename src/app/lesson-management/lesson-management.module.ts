import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";
import { LessonManagementComponent } from "./lesson-management.component";
import { LessonPlansComponent } from "./lesson-plans/lesson-plans.component";
import { LessonTrackingComponent } from "./lesson-tracking/lesson-tracking.component";
import { AssessmentsComponent } from "./assessments/assessments.component";
import { RouterModule } from "@angular/router";
import { CreateLessonPlanComponent } from "./lesson-plans/create-lesson-plan/create-lesson-plan.component";
import { CollectionDialogComponent } from "./lesson-plans/collection-grid-dialog/collection-grid-dialog.component";
import { LessonManagementRoutesModule } from "./lessonmanagement-routes.module";

@NgModule({
  declarations: [
   LessonManagementComponent,
   LessonPlansComponent,
   LessonTrackingComponent,
   AssessmentsComponent,
   CreateLessonPlanComponent,
   CollectionDialogComponent
  ],
  imports: [
    RouterModule,
    NgMaterialModule,
    NgJQWidgetsModule,
    LessonManagementRoutesModule
  ],
  exports: [
  ],
  entryComponents: [
    CollectionDialogComponent
  ]
})
export class LessonManagementModule {}
