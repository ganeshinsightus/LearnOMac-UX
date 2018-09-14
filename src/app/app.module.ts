import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { AttendanceModule } from "./attendance/attendance.module";
import { BrowserModule } from "@angular/platform-browser";
import { ClassroomDashboardModule } from "./classroom-dashboard/classroom-dashboard.module";
import { ClassroomFilterComponent } from "./dynamic-component/classroom-filter/classroom-filter.component";
import { ClassroomPerformanceFilterComponent } from "./dynamic-component/classroom-performance-filter/classroom-performance-filter.component";
import { ClassroomPerformanceModule } from "./classroom-performance/classroom-performance.module";
import { CommonModule } from "@angular/common";
import { CoursesModule } from "./courses/courses.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { EmptyPageComponent } from "./dynamic-component/empty-page/empty-page.component";
import { FilterDialogService } from "./common-services/filter-dialog.service.";
import { FilterService } from "./common-services/filter.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LessonManagementModule } from "./lesson-management/lesson-management.module";
import { LessonPlanFilterComponent } from "./dynamic-component/lesson-plan-filter/lesson-plan-filter.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgJQWidgetsModule } from "./ng-jqwidgets.module";
import { NgMaterialModule } from "./ng-material.module";
import { NgModule } from "@angular/core";
import { PerformanceFilterComponent } from "./dynamic-component/performance-filter/performance-filter.component";
import { ProfileFilterComponent } from "./dynamic-component/profile-filter/profile-filter.component";
import { StackedBarTable } from "./dynamic-component/stacked-bar-table/stacked-bar-table.component";
import { StudentProfileModule } from "./student-profile/student-profile.module";

@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    NavbarComponent,
    ClassroomFilterComponent,
    ClassroomPerformanceFilterComponent,
    ProfileFilterComponent,
    PerformanceFilterComponent,
    StackedBarTable,
    LessonPlanFilterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NgJQWidgetsModule,
    DashboardModule,
    ClassroomDashboardModule,
    StudentProfileModule,
    ClassroomPerformanceModule,
    LessonManagementModule,
    AttendanceModule,
    CoursesModule
  ],
  providers: [FilterService, FilterDialogService],
  entryComponents: [
    ClassroomFilterComponent,
    ProfileFilterComponent,
    PerformanceFilterComponent,
    ClassroomPerformanceFilterComponent,
    LessonPlanFilterComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
