import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { NgJQWidgetsModule } from '../ng-jqwidgets.module';
import { AdminRoutesModule } from './admin-routes.module';
import { ManageCurriculumsComponent } from './manage-curriculums/manage-curriculums.component';
import { AffiliationsComponent } from './manage-curriculums/affiliations/affiliations.component';
import { CurriculumNewComponent } from './manage-curriculums/curriculum-new/curriculum-new.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { Subject } from 'rxjs';
import { SubjectNewComponent } from './manage-subjects/subject-new/subject-new.component';

@NgModule({
    declarations: [
        ManageCurriculumsComponent,
        CurriculumNewComponent,
        AffiliationsComponent,
        ManageSubjectsComponent,
        SubjectNewComponent
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
        SubjectNewComponent
    ],
    entryComponents: [
    ],
})
export class AdminModule {

}