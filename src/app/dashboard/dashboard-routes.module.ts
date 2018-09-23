import { CircularListComponent } from "./circulars/circulars-list/circulars-list.component";
import { CourseSubcriptionsDetailsCompletedComponent } from "../courses/courses-subcriptions-details/courses-subcriptions-details-completed/courses-subcriptions-details-completed.component";
import { CourseSubcriptionsDetailsInprogressComponent } from "../courses/courses-subcriptions-details/courses-subcriptions-details-inprogress/courses-subcriptions-details-inprogress.component";
import { CourseSubcriptionsDetailsNewComponent } from "../courses/courses-subcriptions-details/courses-subcriptions-details-new/courses-subcriptions-details-new.component";
import { CourseSubcriptionsDetailsPendingComponent } from "../courses/courses-subcriptions-details/courses-subcriptions-details-pending/courses-subcriptions-details-pending.component";
import { MessagesListComponent } from "./messages/messages-list/messages-list.component";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { NgModule } from "@angular/core";
import { NotificationsListComponent } from "./notifications/notifications-list/notifications-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard/news-list",
    component: NewsListComponent,
    data: { title: "News List" },
    pathMatch: "full"
  },
  {
    path: "dashboard/circular-list",
    component: CircularListComponent,
    data: { title: "Circular List" },
    pathMatch: "full"
  },
  {
    path: "dashboard/notifications-list",
    component: NotificationsListComponent,
    data: { title: " Notifications List" },
    pathMatch: "full"
  },
  {
    path: "dashboard/message-list",
    component: MessagesListComponent,
    data: { title: "Message List" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-new",
    component: CourseSubcriptionsDetailsNewComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-inprogress",
    component: CourseSubcriptionsDetailsInprogressComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-pending",
    component: CourseSubcriptionsDetailsPendingComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
  {
    path: "courses/courses-subcriptions-details-completed",
    component: CourseSubcriptionsDetailsCompletedComponent,
    data: { title: "Courses Subcriptions Details" },
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutesModule {}
