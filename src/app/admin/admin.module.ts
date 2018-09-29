import { AdminRoutesModule } from './admin-routes.module';
import { AffiliationsComponent } from './manage-curriculums/affiliations/affiliations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurriculumNewComponent } from './manage-curriculums/curriculum-new/curriculum-new.component';
import { DocumentContentComponent } from './manage-content/document-content/document-content.component';
import { ManageContentComponent } from './manage-content/manage-content.component';
import { ManageCurriculumsComponent } from './manage-curriculums/manage-curriculums.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageSyllabusComponent } from './manage-syllabus/manage-syllabus.component';
import { NgJQWidgetsModule } from '../ng-jqwidgets.module';
import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { OtherResourcesContentComponent } from './manage-content/otherresources-content/otherresources-content.component';
import { SubjectNewComponent } from './manage-subjects/subject-new/subject-new.component';
import { VideoContentComponent } from './manage-content/video-content/video-content.component';
import { ProjectContentComponent } from './manage-content/project-content/project-content.component';
import { ManageProjectContentComponent } from './manage-content/manage-project-content/manage-project-content.component';
import { PrerequisiteMappingComponent } from './pre-requisite-mapping/pre-requisite-mapping.component';

@NgModule({
  declarations: [
    ManageCurriculumsComponent,
    CurriculumNewComponent,
    AffiliationsComponent,
    ManageSubjectsComponent,
    SubjectNewComponent,
    ManageSyllabusComponent,
    ManageContentComponent,
    VideoContentComponent,
    DocumentContentComponent,
    OtherResourcesContentComponent,
    ProjectContentComponent,
    ManageProjectContentComponent,
    PrerequisiteMappingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgMaterialModule,
    NgJQWidgetsModule,
    AdminRoutesModule
  ],
  exports: [
    ManageCurriculumsComponent,
    AffiliationsComponent,
    CurriculumNewComponent,
    ManageSubjectsComponent,
    SubjectNewComponent,
    ManageSyllabusComponent,
    ManageContentComponent,
    VideoContentComponent,
    DocumentContentComponent,
    OtherResourcesContentComponent,
    ProjectContentComponent,
    ManageProjectContentComponent,
    PrerequisiteMappingComponent
  ],
  entryComponents: []
})
export class AdminModule {}
