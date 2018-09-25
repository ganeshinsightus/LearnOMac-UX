import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AttendanceModule } from './attendance/attendance.module';
import { BrowserModule } from '@angular/platform-browser';
import { ClassroomDashboardModule } from './classroom-dashboard/classroom-dashboard.module';
import { ClassroomPerformanceModule } from './classroom-performance/classroom-performance.module';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { CurriculumContentModule } from './curriculum-content/curriculum-content.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmptyPageComponent } from './common-component/empty-page/empty-page.component';
import { FilterComponent } from './common-component/filter/filter.component';
import { FilterDialogService } from './common-services/filter-dialog.service.';
import { FilterService } from './common-services/filter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonManagementModule } from './lesson-management/lesson-management.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgJQWidgetsModule } from './ng-jqwidgets.module';
import { NgMaterialModule } from './ng-material.module';
import { NgModule } from '@angular/core';
import { StackedBarTable } from './common-component/stacked-bar-table/stacked-bar-table.component';
import { StudentProfileModule } from './student-profile/student-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    NavbarComponent,
    FilterComponent,
    StackedBarTable
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
    CoursesModule,
    CurriculumContentModule,
    AdminModule
  ],
  providers: [FilterService, FilterDialogService],
  entryComponents: [FilterComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
