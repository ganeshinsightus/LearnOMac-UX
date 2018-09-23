import { ClassPerformanceDetailsComponent } from "./performance-detailed-view/class-performance-summary/class-performance-details/class-performance-details.component";
import { ClassPerformanceUpdateComponent } from "./performance-detailed-view/class-performance-summary/class-performance-update/class-performance-update.component";
import { ClassroomPerformanceDetailedViewComponent } from "./performance-detailed-view/performance-detailed-view.component";
import { LearningPathDetailsComponent } from "./performance-detailed-view/publish-learning-paths/learning-paths-details/learning-path-details.component";
import { LearningPathPublishComponent } from "./performance-detailed-view/publish-learning-paths/learning-paths-publish/learning-path-publish.component";
import { NgModule } from "@angular/core";
import { PrerequisiteDetailsComponent } from "./performance-detailed-view/pre-requisite-standards-summary/pre-requisite-details/pre-requisite-details.component";
import { PrerequisiteUpdateComponent } from "./performance-detailed-view/pre-requisite-standards-summary/pre-requisite-update/pre-requisite-update.component";
import { ProjectSummaryDetailsComponent } from "./performance-detailed-view/projects-summary/projects-summary-details/projects-summary-details.component";
import { ProjectSummaryPublishComponent } from "./performance-detailed-view/projects-summary/project-summary-publish/project-summary-publish.component";
import { ProjectSummaryUpdateComponent } from "./performance-detailed-view/projects-summary/projects-summary-update/projects-summary-update.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "class-performance/detailed-view",
    component: ClassroomPerformanceDetailedViewComponent,
    data: { title: "Performance Detailed View" },
    pathMatch: "full"
  },
  {
    path: "class-performance/details",
    component: ClassPerformanceDetailsComponent,
    data: { title: "Class Performance Details" },
    pathMatch: "full"
  },
  {
    path: "class-performance/update",
    component: ClassPerformanceUpdateComponent,
    data: { title: "Class Performance Update" },
    pathMatch: "full"
  },
  {
    path: "class-performance/prerequisite-details",
    component: PrerequisiteDetailsComponent,
    data: { title: "Pre-requisite Performance Details" },
    pathMatch: "full"
  },
  {
    path: "class-performance/prerequisite-update",
    component: PrerequisiteUpdateComponent,
    data: { title: "Pre-requisite Performance Update" },
    pathMatch: "full"
  },
  {
    path: "class-performance/project-details",
    component: ProjectSummaryDetailsComponent,
    data: { title: "Project Summary Details" },
    pathMatch: "full"
  },
  {
    path: "class-performance/project-update",
    component: ProjectSummaryUpdateComponent,
    data: { title: "Project Summary Update" },
    pathMatch: "full"
  },
  {
    path: "class-performance/project-publish",
    component: ProjectSummaryPublishComponent,
    data: { title: "Project Summary Publish" },
    pathMatch: "full"
  },
  {
    path: "class-performance/learning-path-publish",
    component: LearningPathPublishComponent,
    data: { title: "Learning Path Publish" },
    pathMatch: "full"
  },
  {
    path: "class-performance/learning-path-details",
    component: LearningPathDetailsComponent,
    data: { title: "Learning Path Details" },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassPerformanceRoutesModule {}
