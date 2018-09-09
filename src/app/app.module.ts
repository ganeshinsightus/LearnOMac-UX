import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { ClassroomDashboardModule } from "./classroom-dashboard/classroom-dashboard.module";
import { ClassroomFilterComponent } from "./dynamic-component/classroom-filter/classroom-filter.component";
import { FilterService } from "./common-services/filter.service";
import { DashboardModule } from "./dashboard/dashboard.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgMaterialModule } from "./ng-material.module";
import { NgModule } from "@angular/core";
import { PerformanceFilterComponent } from "./dynamic-component/performance-filter/performance-filter.component";
import { ProfileFilterComponent } from "./dynamic-component/profile-filter/profile-filter.component";
import { StudentProfileModule } from "./student-profile/student-profile.module";
import { StackedBarTable } from "./dynamic-component/stacked-bar-table/stacked-bar-table.component";
import { ClassroomPerformanceModule } from "./classroom-performance/classroom-performance.module";
import { ClassroomPerformanceFilterComponent } from "./dynamic-component/classroom-performance-filter/classroom-performance-filter.component";
import { NgJQWidgetsModule } from "./ng-jqwidgets.module";
import { LessonManagementModule } from "./lesson-management/lesson-management.module";
import { LessonPlanFilterComponent } from "./dynamic-component/lesson-plan-filter/lesson-plan-filter.component";
import { AttendanceModule } from "./attendance/attendance.module";
import { FormsModule } from "@angular/forms";
import { CoursesModule } from "./courses/courses.module";

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [FilterService],
  entryComponents: [
    ClassroomFilterComponent,
    ProfileFilterComponent,
    PerformanceFilterComponent,
    ClassroomPerformanceFilterComponent,
    LessonPlanFilterComponent
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
