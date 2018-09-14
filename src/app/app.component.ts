import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  showFiller:boolean;
  public menuItems: any[];

  constructor() {

    this.menuItems = [
      { url: "/", iconName: "dashboard", title: "My Dashboard" },
      { url: "/class-dashboard", iconName: "dashboard", title: "Class Dashboard" },
      { url: "/attendance", iconName: "playlist_add_check", title: "Attendance" },
      { url: "/student/profile", iconName: "assignment_in", title: "Student Profiles" },
      { url: "/lesson/plans", iconName: "track_changes", title: "Lesson Management" },
      { url: "/dashboard", iconName: "dashboard", title: "Curriculum Content" },
      { url: "/class-performance", iconName: "insert_chart", title: "Class Performance" },
      { url: "/courses", iconName: "insert_drive_file", title: "Courses" },
      { url: "/resources", iconName: "library_books", title: "My Learning Resources" }
    ];
    
  }
}
