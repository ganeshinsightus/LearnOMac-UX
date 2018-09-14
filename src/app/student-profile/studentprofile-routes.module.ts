import { AcademicListComponent } from './profile/academic-list/academic-list.component';
import { AssessmentSummaryListComponent } from './performance-summary/assessment-summary/assessment-summary-list/assessment-summary-list.component';
import { AssessmentSummaryUpdateComponent } from './performance-summary/assessment-summary/assessment-summary-update/assessment-summary-update.component';
import { AwardsListComponent } from './profile/awards-list/awards-list.component';
import { LearningPathListComponent } from './performance-summary/learning-path/learning-path-list/learning-path-list.component';
import { NewLearningPathComponent } from './performance-summary/learning-path/new-learning-path/new-learning-path.component';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './performance-summary/project/project-list/project-list.component';
import { ProjectListUpdateComponent } from './performance-summary/project/project-list-update/project-list-update.component';
import { RouterModule, Routes } from '@angular/router';
import { SportsListComponent } from './profile/sports-list/sports-list.component';

const routes: Routes = [
  {
    path: "student/profile/academic",
    component: AcademicListComponent,
    data: { title: "Academic List" },
    pathMatch: "full"
  },
  {
    path: "student/profile/sports",
    component: SportsListComponent,
    data: { title: "Sports List" },
    pathMatch: "full"
  },
  {
    path: "student/profile/awards",
    component: AwardsListComponent,
    data: { title: "Awards List" },
    pathMatch: "full"
  },
  {
    path: "student/performance/assessment-summary-list",
    component: AssessmentSummaryListComponent,
    data: { title: "Assessment Summary List" },
    pathMatch: "full"
  },
  {
    path: "student/performance/update-assessment-summary",
    component: AssessmentSummaryUpdateComponent,
    data: { title: "Update Assessment Summary" },
    pathMatch: "full"
  },
  {
    path: "student/performance/learning-path-list",
    component: LearningPathListComponent,
    data: { title: "Learning Path List" },
    pathMatch: "full"
  },
  {
    path: "student/performance/learning-path-new",
    component: NewLearningPathComponent,
    data: { title: "New Learning Path" },
    pathMatch: "full"
  },
  {
    path: "student/performance/project-list",
    component: ProjectListComponent,
    data: { title: "Project List" },
    pathMatch: "full"
  },
  {
    path: "student/performance/project-list-update",
    component: ProjectListUpdateComponent,
    data: { title: "Project Update List" },
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProfileRoutesModule {}
