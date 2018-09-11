import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  public menuItems: any[];

  constructor() {

    this.menuItems = [
      { url: "/", iconName: "dashboard", title: "My Dashboard" },
      { url: "/classroom/dashboard", iconName: "dashboard", title: "Classroom Dashboard" },
      { url: "/attendance", iconName: "playlist_add_check", title: "Attendance" },
      { url: "/student", iconName: "assignment_in", title: "Student Profiles" },
      { url: "/lesson", iconName: "track_changes", title: "Lesson Management" },
      { url: "/dashboard", iconName: "dashboard", title: "Curriculum Content" },
      { url: "/classroom/performance", iconName: "insert_chart", title: "Class Performance" },
      { url: "/courses", iconName: "insert_drive_file", title: "Courses" },
      { url: "/resources", iconName: "library_books", title: "My Learning Resources" }
    ];
    
  }
}
