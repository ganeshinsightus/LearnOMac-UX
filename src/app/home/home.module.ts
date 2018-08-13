import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { MatIconModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { NewsDialogComponent } from "./news/news-dialog/news-dialog.component";
import { CircularsDialogComponent } from "./circulars/circulars-dialog/circulars-dialog.component";
import { NotificationsDialogComponent } from "./notifications/notifications-dialog/notifications-dialog.component";
import { MessagesDialogComponent } from "./messages/messages-dialog/messages-dialog.component";
import { NewsComponent } from "./news/news.component";
import { NewsDetailsComponent } from "./news/news-details/news-details.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { CircularsComponent } from "./circulars/circulars.component";
import { MessagesComponent } from "./messages/messages.component";
import { CoursesComponent } from "./courses/courses.component";
import { BrowserAnimationsModule } from "../../../node_modules/@angular/platform-browser/animations";
import { CalendarComponent } from "./calendar/calendar.component";

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
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
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