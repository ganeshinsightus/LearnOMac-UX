import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ClassroomDashboardComponent } from "./classroom/classroom-dashboard.component";
import { NewsListComponent } from "./home/news/news-list/news-list.component";
import { CircularListComponent } from "./home/circulars/circulars-list/circulars-list.component";
import { NotificationsListComponent } from "./home/notifications/notifications-list/notifications-list.component";
import { CommunicationListComponent } from "./classroom/communication/communication-list/communication-list.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { ProfileComponent } from "./student-profile/profile/profile.component";
import { ProfilePerformanceComponent } from "./student-profile/performance-summary/performance-summary.component";
import { ProfileCommunicationComponent } from "./student-profile/communication/communication.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "classroom",
    component: ClassroomDashboardComponent,
    data: { title: "Classroom Dashboard" }
  },
  {
    path: "news-list",
    component: NewsListComponent,
    data: { title: "News List" }
  },
  {
    path: "circular-list",
    component: CircularListComponent,
    data: { title: "Circular List" }
  },
  {
    path: "notifications-list",
    component: NotificationsListComponent,
    data: { title: "Notifications List" }
  },
  {
    path: "message-list",
    component: CommunicationListComponent,
    data: { title: "Message List" }
  },
  {
    path: "communication-list",
    component: CommunicationListComponent,
    data: { title: "Communication List" }
  },
  {
    path: "student",
    component: StudentProfileComponent,
    data: { title: "Student Profile" },
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent  },
      { path: 'performance', component: ProfilePerformanceComponent },
      { path: 'communication', component: ProfileCommunicationComponent  },
    ] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
