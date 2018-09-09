import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";
import { LessonManagementComponent } from "./lesson-management.component";
import { LessonPlansComponent } from "./lesson-plans/lesson-plans.component";
import { LessonTrackingComponent } from "./lesson-tracking/lesson-tracking.component";
import { AssessmentsComponent } from "./assessments/assessments.component";
import { RouterModule } from "@angular/router";
import { CreateLessonPlanComponent } from "./lesson-plans/create-lesson-plan/create-lesson-plan.component";
import { ContentDialogComponent } from "./lesson-plans/content-dialog/content-dialog.component";
import { CollectionDialogComponent } from "./lesson-plans/collection-grid-dialog/collection-grid-dialog.component";

@NgModule({
  declarations: [
   LessonManagementComponent,
   LessonPlansComponent,
   LessonTrackingComponent,
   AssessmentsComponent,
   CreateLessonPlanComponent,
   ContentDialogComponent,
   CollectionDialogComponent
  ],
  imports: [
    RouterModule,
    NgMaterialModule,
    NgJQWidgetsModule,
  ],
  exports: [
  ],
  entryComponents: [
    ContentDialogComponent
  ]
})
export class LessonManagementModule {}
