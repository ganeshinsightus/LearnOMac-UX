import { AcademicListComponent } from "./student-profile/profile/academic-list/academic-list.component";
import { AssessmentsComponent } from "./lesson-management/assessments/assessments.component";
import { AssessmentSummaryListComponent } from "./student-profile/performance-summary/assessment-summary/assessment-summary-list/assessment-summary-list.component";
import { AssessmentSummaryUpdateComponent } from "./student-profile/performance-summary/assessment-summary/assessment-summary-update/assessment-summary-update.component";
import { AssignNewCourseComponent } from "./student-profile/performance-summary/courses/assign-new-course/assign-new-course.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { AwardsListComponent } from "./student-profile/profile/awards-list/awards-list.component";
import { CircularListComponent } from "./dashboard/circulars/circulars-list/circulars-list.component";
import { ClassPerformanceDetailsComponent } from "./classroom-performance/performance-detailed-view/class-performance-summary/class-performance-details/class-performance-details.component";
import { ClassPerformanceUpdateComponent } from "./classroom-performance/performance-detailed-view/class-performance-summary/class-performance-update/class-performance-update.component";
import { ClassroomDashboardComponent } from "./classroom-dashboard/classroom-dashboard.component";
import { ClassroomPerformanceComponent } from "./classroom-performance/classroom-performance.component";
import { ClassroomPerformanceDetailedViewComponent } from "./classroom-performance/performance-detailed-view/performance-detailed-view.component";
import { CollectionDialogComponent } from "./lesson-management/lesson-plans/collection-grid-dialog/collection-grid-dialog.component";
import { CommunicationListComponent } from "./classroom-dashboard/communication/communication-list/communication-list.component";
import { CoursesCompletedComponent } from "./student-profile/performance-summary/courses/courses-completed/courses-completed.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesDetailsApprovedComponent } from "./courses/courses-details/courses-details-approved/courses-details-approved.component";
import { CoursesDetailsChangesComponent } from "./courses/courses-details/courses-details-changes/courses-details-changes.component";
import { CoursesDetailsDraftsComponent } from "./courses/courses-details/courses-details-drafts/courses-details-drafts.component";
import { CoursesDetailsPendingApprovalComponent } from "./courses/courses-details/courses-details-pending-approval/courses-details-pending-approval.component";
import { CoursesDetailsPublishedComponent } from "./courses/courses-details/courses-details-published/courses-details-published.component";
import { CoursesInprogressComponent } from "./student-profile/performance-summary/courses/courses-inprogress/courses-inprogress.component";
import { CoursesNewComponent } from "./student-profile/performance-summary/courses/courses-new/courses-new.component";
import { CoursesPendingComponent } from "./student-profile/performance-summary/courses/courses-pending/courses-pending.component";
import { CourseSubcriptionsDetailsCompletedComponent } from "./courses/courses-subcriptions-details/courses-subcriptions-details-completed/courses-subcriptions-details-completed.component";
import { CourseSubcriptionsDetailsInprogressComponent } from "./courses/courses-subcriptions-details/courses-subcriptions-details-inprogress/courses-subcriptions-details-inprogress.component";
import { CourseSubcriptionsDetailsNewComponent } from "./courses/courses-subcriptions-details/courses-subcriptions-details-new/courses-subcriptions-details-new.component";
import { CourseSubcriptionsDetailsPendingComponent } from "./courses/courses-subcriptions-details/courses-subcriptions-details-pending/courses-subcriptions-details-pending.component";
import { CreateLessonPlanComponent } from "./lesson-management/lesson-plans/create-lesson-plan/create-lesson-plan.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LearningPathDetailsComponent } from "./classroom-performance/performance-detailed-view/publish-learning-paths/learning-paths-details/learning-path-details.component";
import { LearningPathListComponent } from "./student-profile/performance-summary/learning-path/learning-path-list/learning-path-list.component";
import { LearningPathPublishComponent } from "./classroom-performance/performance-detailed-view/publish-learning-paths/learning-paths-publish/learning-path-publish.component";
import { LearningPathsListComponent } from "./classroom-dashboard/learning-path/learning-paths-list/learning-paths-list.component";
import { LessonManagementComponent } from "./lesson-management/lesson-management.component";
import { LessonPlansComponent } from "./lesson-management/lesson-plans/lesson-plans.component";
import { LessonTrackingComponent } from "./lesson-management/lesson-tracking/lesson-tracking.component";
import { MessagesListComponent } from "./dashboard/messages/messages-list/messages-list.component";
import { NewCourseComponent } from "./courses/new-course/new-course.component";
import { NewLearningPathComponent } from "./student-profile/performance-summary/learning-path/new-learning-path/new-learning-path.component";
import { NewsListComponent } from "./dashboard/news/news-list/news-list.component";
import { NgModule } from "@angular/core";
import { NotificationsListComponent } from "./dashboard/notifications/notifications-list/notifications-list.component";
import { ParentCommunicationComponent } from "./student-profile/parent-communication/parent-communication.component";
import { PerformanceSummaryListComponent } from "./classroom-dashboard/peformance-summary/performance-summary-list/performance-summary-list.component";
import { PrerequisiteDetailsComponent } from "./classroom-performance/performance-detailed-view/pre-requisite-standards-summary/pre-requisite-details/pre-requisite-details.component";
import { PrerequisiteUpdateComponent } from "./classroom-performance/performance-detailed-view/pre-requisite-standards-summary/pre-requisite-update/pre-requisite-update.component";
import { ProfileComponent } from "./student-profile/profile/profile.component";
import { ProfilePerformanceComponent } from "./student-profile/performance-summary/performance-summary.component";
import { ProjectListComponent } from "./student-profile/performance-summary/project/project-list/project-list.component";
import { ProjectListUpdateComponent } from "./student-profile/performance-summary/project/project-list-update/project-list-update.component";
import { ProjectSummaryDetailsComponent } from "./classroom-performance/performance-detailed-view/projects-summary/projects-summary-details/projects-summary-details.component";
import { ProjectSummaryPublishComponent } from "./classroom-performance/performance-detailed-view/projects-summary/project-summary-publish/project-summary-publish.component";
import { ProjectSummaryUpdateComponent } from "./classroom-performance/performance-detailed-view/projects-summary/projects-summary-update/projects-summary-update.component";
import { RouterModule, Routes } from "@angular/router";
import { SportsListComponent } from "./student-profile/profile/sports-list/sports-list.component";
import { StackedBarTable } from "./dynamic-component/stacked-bar-table/stacked-bar-table.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "classroom/dashboard",
    component: ClassroomDashboardComponent,
    data: { title: "Classroom Dashboard" }
  },
  {
    path: "performance-summary-list",
    component: PerformanceSummaryListComponent,
    data: { title: "Learning Paths List" }
  },
  {
    path: "learning-paths-list",
    component: LearningPathsListComponent,
    data: { title: "Performance Summary List" }
  },
  {
    path: "news-list",
    component: NewsListComponent,
    data: { title: "News List" }
  },
  {
    path: "circular-list",
    component: CircularListComponent,
    data: { title: "Circular List" }
  },
  {
    path: "notifications-list",
    component: NotificationsListComponent,
    data: { title: "Notifications List" }
  },
  {
    path: "message-list",
    component: MessagesListComponent,
    data: { title: "Message List" }
  },
  {
    path: "communication-list",
    component: CommunicationListComponent,
    data: { title: "Communication List" }
  },
  {
    path: "student",
    component: StudentProfileComponent,
    data: { title: "Student Profile" },
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "profile", component: ProfileComponent },
      { path: "performance", component: ProfilePerformanceComponent },
      { path: "parent-communication", component: ParentCommunicationComponent }
    ]
  },
  {
    path: "academic",
    component: AcademicListComponent,
    data: { title: "Academic List" }
  },
  {
    path: "sports",
    component: SportsListComponent,
    data: { title: "Sports List" }
  },
  {
    path: "awards",
    component: AwardsListComponent,
    data: { title: "Awards List" }
  },
  {
    path: "assessment-summary-list",
    component: AssessmentSummaryListComponent,
    data: { title: "Assessment Summary List" }
  },
  {
    path: "update-assessment-summary",
    component: AssessmentSummaryUpdateComponent,
    data: { title: "Update Assessment Summary" }
  },
  {
    path: "learning-path-list",
    component: LearningPathListComponent,
    data: { title: "Learning Path List" }
  },
  {
    path: "learning-path-new",
    component: NewLearningPathComponent,
    data: { title: "New Learning Path" }
  },
  {
    path: "courses-new",
    component: CoursesNewComponent,
    data: { title: "Courses New" }
  },
  {
    path: "courses-inprogress",
    component: CoursesInprogressComponent,
    data: { title: "Courses Inprogress" }
  },
  {
    path: "courses-pending",
    component: CoursesPendingComponent,
    data: { title: "Courses Pending" }
  },
  {
    path: "courses-completed",
    component: CoursesCompletedComponent,
    data: { title: "Courses Completed" }
  },
  {
    path: "assign-new-course",
    component: AssignNewCourseComponent,
    data: { title: "Assign new course" }
  },
  {
    path: "project-list",
    component: ProjectListComponent,
    data: { title: "Project List" }
  },
  {
    path: "project-list-update",
    component: ProjectListUpdateComponent,
    data: { title: "Project Update List" }
  },
  {
    path: "classroom/performance",
    component: ClassroomPerformanceComponent,
    data: { title: "Classroom Performance" }
  },
  {
    path: "classroom/performance/detailed-view",
    component: ClassroomPerformanceDetailedViewComponent,
    data: { title: "Performance Detailed View" }
  },
  {
    path: "class/performance/details",
    component: ClassPerformanceDetailsComponent,
    data: { title: "Class Performance Details" }
  },
  {
    path: "class/performance/update",
    component: ClassPerformanceUpdateComponent,
    data: { title: "Class Performance Update" }
  },
  {
    path: "class/prerequisite/details",
    component: PrerequisiteDetailsComponent,
    data: { title: "Pre-requisite Performance Details" }
  },
  {
    path: "class/prerequisite/update",
    component: PrerequisiteUpdateComponent,
    data: { title: "Pre-requisite Performance Update" }
  },
  {
    path: "class/project/details",
    component: ProjectSummaryDetailsComponent,
    data: { title: "Project Summary Details" }
  },
  {
    path: "class/project/update",
    component: ProjectSummaryUpdateComponent,
    data: { title: "Project Summary Update" }
  },
  {
    path: "class/project/publish",
    component: ProjectSummaryPublishComponent,
    data: { title: "Project Summary Publish" }
  },
  {
    path: "class/learning-path/publish",
    component: LearningPathPublishComponent,
    data: { title: "Learning Path Publish" }
  },
  {
    path: "class/learning-path/details",
    component: LearningPathDetailsComponent,
    data: { title: "Learning Path Details" }
  },
  {
    path: "lesson",
    component: LessonManagementComponent,
    data: { title: "Lesson Management" },
    children: [
      { path: "", redirectTo: "plans", pathMatch: "full" },
      { path: "plans", component: LessonPlansComponent },
      { path: "tracking", component: LessonTrackingComponent },
      { path: "assessments", component: AssessmentsComponent }
    ]
  },
  {
    path: "create-lesson-plan",
    component: CreateLessonPlanComponent,
    data: { title: "Create Lesson Plan" }
  },
  {
    path: "attendance",
    component: AttendanceComponent,
    data: { title: "Student Attendance" }
  },
  {
    path: "courses",
    component: CoursesComponent,
    data: { title: "My Courses" }
  },
  {
    path: "courses-subcriptions-details-new",
    component: CourseSubcriptionsDetailsNewComponent,
    data: { title: "Courses Subcriptions Details" }
  },
  {
    path: "courses-subcriptions-details-inprogress",
    component: CourseSubcriptionsDetailsInprogressComponent,
    data: { title: "Courses Subcriptions Details" }
  },
  {
    path: "courses-subcriptions-details-pending",
    component: CourseSubcriptionsDetailsPendingComponent,
    data: { title: "Courses Subcriptions Details" }
  },
  {
    path: "courses-subcriptions-details-completed",
    component: CourseSubcriptionsDetailsCompletedComponent,
    data: { title: "Courses Subcriptions Details" }
  },
  {
    path: "courses-details-approved",
    component: CoursesDetailsApprovedComponent,
    data: { title: "Courses Details" }
  },
  {
    path: "courses-details-drafts",
    component: CoursesDetailsDraftsComponent,
    data: { title: "Courses Details" }
  },
  {
    path: "courses-details-published",
    component: CoursesDetailsPublishedComponent,
    data: { title: "Courses Details" }
  },
  {
    path: "courses-details-pending-approval",
    component: CoursesDetailsPendingApprovalComponent,
    data: { title: "Courses Details" }
  },
  {
    path: "courses-details-changes",
    component: CoursesDetailsChangesComponent,
    data: { title: "Courses Details" }
  },
  {
    path: "new-course",
    component: NewCourseComponent,
    data: { title: "New Course" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
