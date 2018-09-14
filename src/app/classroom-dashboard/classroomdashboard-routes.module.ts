import { CommunicationListComponent } from './communication/communication-list/communication-list.component';
import { LearningPathsListComponent } from './learning-path/learning-paths-list/learning-paths-list.component';
import { NgModule } from '@angular/core';
import { PerformanceSummaryListComponent } from './peformance-summary/performance-summary-list/performance-summary-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "class-dashboard/performance-summary-list",
    component: PerformanceSummaryListComponent,
    data: { title: "Learning Paths List" },
    pathMatch: "full"
  },
  {
    path: "class-dashboard/learning-paths-list",
    component: LearningPathsListComponent,
    data: { title: "Performance Summary List" },
    pathMatch: "full"
  },
  {
    path: "class-dashboard/communication-list",
    component: CommunicationListComponent,
    data: { title: "Communication List" },
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomDashboardRoutesModule {}
