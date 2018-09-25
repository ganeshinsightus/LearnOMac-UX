import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageCurriculumsComponent } from "./manage-curriculums/manage-curriculums.component";
import { AffiliationsComponent } from "./manage-curriculums/affiliations/affiliations.component";
import { CurriculumNewComponent } from "./manage-curriculums/curriculum-new/curriculum-new.component";
import { ManageSubjectsComponent } from "./manage-subjects/manage-subjects.component";
import { SubjectNewComponent } from "./manage-subjects/subject-new/subject-new.component";

const routes: Routes = [
  {
    path: "manage-curriculums",
    data: { title: "Manage Curriculums" },
    component: ManageCurriculumsComponent,
    pathMatch: "full"
  },
  {
    path: "create-curriculum",
    data: { title: "Create Curriculums" },
    component: CurriculumNewComponent,
    pathMatch: "full"
  },
  {
    path: "manage-curriculums/view-affiliations",
    data: { title: "View Affiliations" },
    component: AffiliationsComponent,
    pathMatch: "full"
  },
  {
    path: "manage-subjects",
    data: { title: "Manage Subjects" },
    component: ManageSubjectsComponent,
    pathMatch: "full"
  },
  {
    path: "create-subject",
    data: { title: "Create Subject" },
    component: SubjectNewComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
