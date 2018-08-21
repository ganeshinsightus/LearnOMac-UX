import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMaterialModule } from "../ng-material.module";
import { NgModule } from "@angular/core";
import { StudentProfileComponent } from "./student-profile.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfilePerformanceComponent } from "./performance-summary/performance-summary.component";
import { ProfileCommunicationComponent } from "./communication/communication.component";
import { ClassroomDashboardModule } from "../classroom/classroom-dashboard.module";
import { StackedBarChartlevel4Component } from "./performance-summary/stacked-bar-chart-level4/stacked-bar-chart-level4";
import { AcademicComponent } from "./profile/academic/academic.component";
import { AwardComponent } from "./profile/awards/awards.component";
import { SportsComponent } from "./profile/sports/sports.component";
import { AppRoutingModule } from "../app.routes";

@NgModule({
  declarations: [
    StudentProfileComponent,
    ProfileComponent,
    ProfilePerformanceComponent,
    ProfileCommunicationComponent,
    StackedBarChartlevel4Component,
    AcademicComponent,
    AwardComponent,
    SportsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgMaterialModule,
    ClassroomDashboardModule,
    AppRoutingModule
  ],
  exports: [StudentProfileComponent, StackedBarChartlevel4Component],
  entryComponents: [AcademicComponent, AwardComponent, SportsComponent]
})
export class StudentProfileModule {}
