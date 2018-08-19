import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ClassroomDashboardModule } from "./classroom/classroom-dashboard.module";
import { HomeModule } from "./home/home.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgMaterialModule } from "./ng-material.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    NgMaterialModule,
    HomeModule,
    ClassroomDashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
