import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { CircularsComponent } from './circulars/circulars.component';
import { CircularsDialogComponent } from './circulars/circulars-dialog/circulars-dialog.component';
import { DashboardCoursesComponent } from './courses/dashboard-courses.component';
import { DashboardComponent } from './dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { NewsComponent } from './news/news.component';
import { NewsDialogComponent } from './news/news-dialog/news-dialog.component';
import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsDialogComponent } from './notifications/notifications-dialog/notifications-dialog.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { CircularListComponent } from './circulars/circulars-list/circulars-list.component';
import { NotificationsListComponent } from './notifications/notifications-list/notifications-list.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { DashboardRoutesModule } from './dashboard-routes.module';

@NgModule({
    declarations: [
        DashboardComponent,
        NewsComponent,
        NewsDialogComponent,
        NewsListComponent,
        NotificationsComponent,
        NotificationsDialogComponent,
        NotificationsListComponent,
        CircularsComponent,
        CircularsDialogComponent,
        CircularListComponent,
        MessagesComponent,
        MessagesListComponent,
        DashboardCoursesComponent,
        CalendarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgMaterialModule,
        DashboardRoutesModule
    ],
    exports: [DashboardComponent],
    entryComponents: [
        NewsDialogComponent,
        CircularsDialogComponent,
        NotificationsDialogComponent,
    ],
})
export class DashboardModule {

}