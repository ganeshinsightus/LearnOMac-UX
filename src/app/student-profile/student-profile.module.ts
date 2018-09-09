import { AcademicDialogComponent } from "./profile/academic-dialog/academic-dialog.component";
import { AcademicListComponent } from "./profile/academic-list/academic-list.component";
import { AppRoutingModule } from "../app.routes";
import { AssessmentSummaryUpdateComponent } from "./performance-summary/assessment-summary/assessment-summary-update/assessment-summary-update.component";
import { AssessmentSummaryListComponent } from "./performance-summary/assessment-summary/assessment-summary-list/assessment-summary-list.component";
import { AssigneesComponent } from "./performance-summary/courses/assignees/assignees.component";
import { AssignNewCourseComponent } from "./performance-summary/courses/assign-new-course/assign-new-course.component";
import { AwardsDialogComponent } from "./profile/awards-dialog/awards-dialog.component";
import { AwardsListComponent } from "./profile/awards-list/awards-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClassroomDashboardModule } from "../classroom-dashboard/classroom-dashboard.module";
import { CoursesCompletedComponent } from "./performance-summary/courses/courses-completed/courses-completed.component";
import { CoursesInprogressComponent } from "./performance-summary/courses/courses-inprogress/courses-inprogress.component";
import { CoursesNewComponent } from "./performance-summary/courses/courses-new/courses-new.component";
import { CoursesPendingComponent } from "./performance-summary/courses/courses-pending/courses-pending.component";
import { InterestsDialogComponent } from "./profile/interests-dialog/interests-dialog.component";
import { LearningPathListComponent } from "./performance-summary/learning-path/learning-path-list/learning-path-list.component";
import { NewLearningPathComponent } from "./performance-summary/learning-path/new-learning-path/new-learning-path.component";
import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { ParentCommunicationComponent } from "./parent-communication/parent-communication.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfilePerformanceComponent } from "./performance-summary/performance-summary.component";
import { ProjectListComponent } from "./performance-summary/project/project-list/project-list.component";
import { ProjectListUpdateComponent } from "./performance-summary/project/project-list-update/project-list-update.component";
import { ProjectUpdateKnowledgeLevelDialogComponent } from "./performance-summary/project/project-update-knowledge-level-dialog/project-update-knowledge-level-dialog.component";
import { ProjectViewDialogComponent } from "./performance-summary/project/project-view-dialog/project-view-dialog.component";
import { SportsDialogComponent } from "./profile/sports-dialog/sports-dialog.component";
import { SportsListComponent } from "./profile/sports-list/sports-list.component";
import { StudentProfileComponent } from "./student-profile.component";
import { UpdateKnowledgeLevelDialogComponent } from "./performance-summary/assessment-summary/update-knowledge-level-dialog/update-knowledge-level-dialog.component";
import { NgJQWidgetsModule } from "../ng-jqwidgets.module";

@NgModule({
  declarations: [
    StudentProfileComponent,
    ProfileComponent,
    ProfilePerformanceComponent,
    AssessmentSummaryListComponent,
    AssessmentSummaryUpdateComponent,
    UpdateKnowledgeLevelDialogComponent,
    LearningPathListComponent,
    CoursesNewComponent,
    CoursesInprogressComponent,
    CoursesPendingComponent,
    CoursesCompletedComponent,
    ParentCommunicationComponent,
    AcademicDialogComponent,
    AcademicListComponent,
    SportsDialogComponent,
    SportsListComponent,
    AwardsDialogComponent,
    AwardsListComponent,
    InterestsDialogComponent,
    AssignNewCourseComponent,
    AssigneesComponent,
    NewLearningPathComponent,
    ProjectListComponent,
    ProjectListUpdateComponent,
    ProjectUpdateKnowledgeLevelDialogComponent,
    ProjectViewDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgMaterialModule,
    NgJQWidgetsModule,
    ClassroomDashboardModule,
    AppRoutingModule,
  ],
  exports: [
    StudentProfileComponent,
  ],
  entryComponents: [
    AcademicDialogComponent,
    SportsDialogComponent,
    AwardsDialogComponent,
    InterestsDialogComponent,
    UpdateKnowledgeLevelDialogComponent,
    AssigneesComponent,
    ProjectUpdateKnowledgeLevelDialogComponent,
    ProjectViewDialogComponent
  ]
})
export class StudentProfileModule {}
