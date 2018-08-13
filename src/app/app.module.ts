import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router"

import { MatNativeDateModule } from "@angular/material";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgMaterialModule } from './ng-material.module';
import { NewsModule } from './news/news.module';
import { NewsListComponent } from './news/new-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    NewsModule,
    NgMaterialModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
