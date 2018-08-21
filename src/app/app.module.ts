import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ClassroomDashboardModule } from "./classroom/classroom-dashboard.module";
import { FilterService } from "./common-services/filter.service";
import { HomeModule } from "./home/home.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgMaterialModule } from "./ng-material.module";
import { NgModule } from "@angular/core";
import { StudentProfileModule } from "./student-profile/student-profile.module";
import { ClassroomFilterComponent } from "./dynamic-component/filter-popup/filter-popup.component";
import { ProfileFilterComponent } from "./dynamic-component/profile-filter/profile-filter.component";
import { PerformanceFilterComponent } from "./dynamic-component/performance-filter/performance-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassroomFilterComponent,
    ProfileFilterComponent,
    PerformanceFilterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgMaterialModule,
    HomeModule,
    ClassroomDashboardModule,
    StudentProfileModule
  ],
  providers: [FilterService],
  entryComponents: [
    ClassroomFilterComponent,
    ProfileFilterComponent,
    PerformanceFilterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
