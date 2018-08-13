import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { CircularsComponent } from './circulars/circulars.component';
import { CircularsDialogComponent } from './circulars/circulars-dialog/circulars-dialog.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesDialogComponent } from './messages/messages-dialog/messages-dialog.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsDialogComponent } from './news/news-dialog/news-dialog.component';
import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsDialogComponent } from './notifications/notifications-dialog/notifications-dialog.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent,
        NewsDialogComponent,
        NewsDetailsComponent,
        NotificationsComponent,
        NotificationsDialogComponent,
        CircularsComponent,
        CircularsDialogComponent,
        MessagesComponent,
        MessagesDialogComponent,
        CoursesComponent,
        CalendarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgMaterialModule
    ],
    exports: [HomeComponent],
    entryComponents: [
        NewsDialogComponent,
        CircularsDialogComponent,
        NotificationsDialogComponent,
        MessagesDialogComponent
    ],
})
export class HomeModule {

}