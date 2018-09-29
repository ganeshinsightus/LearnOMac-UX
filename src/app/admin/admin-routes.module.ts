import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageCurriculumsComponent } from "./manage-curriculums/manage-curriculums.component";
import { AffiliationsComponent } from "./manage-curriculums/affiliations/affiliations.component";
import { CurriculumNewComponent } from "./manage-curriculums/curriculum-new/curriculum-new.component";
import { ManageSubjectsComponent } from "./manage-subjects/manage-subjects.component";
import { SubjectNewComponent } from "./manage-subjects/subject-new/subject-new.component";
import { ManageSyllabusComponent } from "./manage-syllabus/manage-syllabus.component";
import { ManageContentComponent } from "./manage-content/manage-content.component";
import { VideoContentComponent } from "./manage-content/video-content/video-content.component";
import { OtherResourcesContentComponent } from "./manage-content/otherresources-content/otherresources-content.component";
import { DocumentContentComponent } from "./manage-content/document-content/document-content.component";
import { ProjectContentComponent } from "./manage-content/project-content/project-content.component";
import { ManageProjectContentComponent } from "./manage-content/manage-project-content/manage-project-content.component";
import { PrerequisiteMappingComponent } from "./pre-requisite-mapping/pre-requisite-mapping.component";

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
  {
    path: "manage-syllabus",
    data: { title: "Manage Syllabus" },
    component: ManageSyllabusComponent,
    pathMatch: "full"
  },
  {
    path: "manage-contents",
    data: { title: "Manage Contents" },
    component: ManageContentComponent,
    pathMatch: "full"
  },
  {
    path: "video-content",
    data: { title: "Video Content" },
    component: VideoContentComponent,
    pathMatch: "full"
  },
  {
    path: "document-content",
    data: { title: "Document Content" },
    component: DocumentContentComponent,
    pathMatch: "full"
  },
  {
    path: "otherresources-content",
    data: { title: "Other Learning Resources Content" },
    component: OtherResourcesContentComponent,
    pathMatch: "full"
  },
  {
    path: "project-content",
    data: { title: "Project Content" },
    component: ProjectContentComponent,
    pathMatch: "full"
  },
  {
    path: "manage-project-content",
    data: { title: "Project Content" },
    component: ManageProjectContentComponent,
    pathMatch: "full"
  },
  {
    path: "prerequisite-mapping" ,
    data:{ title:"Pre-requisite Mapping" },
    component: PrerequisiteMappingComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
