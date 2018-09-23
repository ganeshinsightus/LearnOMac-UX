import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreateLessonPlanComponent } from "./lesson-plans/create-lesson-plan/create-lesson-plan.component";
const routes: Routes = [
  {
    path: "lesson/plans/create-new",
    component: CreateLessonPlanComponent,
    data: { title: "Create Lesson Plan" },
    pathMatch: "full" 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonManagementRoutesModule {}
