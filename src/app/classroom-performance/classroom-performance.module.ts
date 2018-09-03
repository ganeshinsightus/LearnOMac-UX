import { AppRoutingModule } from "../app.routes";
import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { ClassroomPerformanceComponent } from "./classroom-performance.component";
import { ClassroomPerformanceDetailedViewComponent } from "./performance-detailed-view/performance-detailed-view.component";
import { ClassPerformanceDetailsComponent } from "./performance-detailed-view/class-performance-summary/class-performance-details/class-performance-details.component";
import { ClassPerformanceUpdateComponent } from "./performance-detailed-view/class-performance-summary/class-performance-update/class-performance-update.component";
import { PrerequisiteDetailsComponent } from "./performance-detailed-view/pre-requisite-standards-summary/pre-requisite-details/pre-requisite-details.component";
import { PrerequisiteUpdateComponent } from "./performance-detailed-view/pre-requisite-standards-summary/pre-requisite-update/pre-requisite-update.component";
import { ProjectSummaryDetailsComponent } from "./performance-detailed-view/projects-summary/projects-summary-details/projects-summary-details.component";
import { ProjectSummaryUpdateComponent } from "./performance-detailed-view/projects-summary/projects-summary-update/projects-summary-update.component";
import { LearningPathPublishComponent } from "./performance-detailed-view/publish-learning-paths/learning-paths-publish/learning-path-publish.component";
import { LearningPathDetailsComponent } from "./performance-detailed-view/publish-learning-paths/learning-paths-details/learning-path-details.component";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";
import { SourceDialogComponent } from "./performance-detailed-view/publish-learning-paths/source-dialog/source-dialog.component";

@NgModule({
  declarations: [
    ClassroomPerformanceComponent,
    ClassroomPerformanceDetailedViewComponent,
    ClassPerformanceDetailsComponent,
    ClassPerformanceUpdateComponent,
    PrerequisiteDetailsComponent,
    PrerequisiteUpdateComponent,
    ProjectSummaryDetailsComponent,
    ProjectSummaryUpdateComponent,
    LearningPathPublishComponent,
    LearningPathDetailsComponent,
    SourceDialogComponent
  ],
  imports: [
    NgMaterialModule,
    NgJQWidgetsModule,
    AppRoutingModule,
  ],
  exports: [],
  entryComponents: [
    SourceDialogComponent
  ]
})
export class ClassroomPerformanceModule {}
