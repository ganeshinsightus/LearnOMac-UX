import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunicationComponent } from './communication/communication.component';
import { CommunicationReplyComponent } from './communication/communication-reply/communication-reply.component';
import { ClassroomDashboardComponent } from './classroom-dashboard.component';
import { LearningPathComponent } from './learning-path/learning-path.component';
import { LessonSummaryComponent } from './lesson-summary/lesson-summary.component';
import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { PerformanceSummaryComponent } from './peformance-summary/performance-summary.component';
import { CommunicationNewComponent } from './communication/communication-new/communication-new.component';
import { CommunicationRepliedComponent } from './communication/communication-replied/communication-replied.component';
import { CommunicationViewComponent } from './communication/communication-view/communication-view.component';
import { CommunicationListComponent } from './communication/communication-list/communication-list.component';
import { PerformanceSummaryListComponent } from './peformance-summary/performance-summary-list/performance-summary-list.component';
import { LearningPathsListComponent } from './learning-path/learning-paths-list/learning-paths-list.component';
import { ClassroomDashboardRoutesModule } from './classroomdashboard-routes.module';

@NgModule({
    declarations: [
        ClassroomDashboardComponent,
        LessonSummaryComponent,
        LearningPathComponent,
        LearningPathsListComponent,
        CommunicationComponent,
        CommunicationReplyComponent,
        CommunicationNewComponent,
        CommunicationRepliedComponent,
        CommunicationViewComponent,
        CommunicationListComponent,
        PerformanceSummaryComponent,
        PerformanceSummaryListComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgMaterialModule,
        ClassroomDashboardRoutesModule
    ],
    exports: [ClassroomDashboardComponent],
    entryComponents: [
        CommunicationReplyComponent,
        CommunicationNewComponent,
        CommunicationRepliedComponent,
        CommunicationViewComponent       
    ],
})
export class ClassroomDashboardModule {

}