import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgMaterialModule } from './ng-material.module';
import { NewsModule } from './news/news.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    NewsModule,
    NgMaterialModule,    
    HomeModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
