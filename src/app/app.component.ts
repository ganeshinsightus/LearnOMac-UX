import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  showFiller: boolean;
  showAdminMenu: boolean = true;
  showTeacherMenu: boolean = false;
  public teacherMenuItems: any[];
  public adminMenuItems: any[];

  constructor() {
    this.teacherMenuItems = [
      { url: "/", iconName: "dashboard", title: "My Dashboard" },
      {
        url: "/class-dashboard",
        iconName: "dashboard",
        title: "Class Dashboard"
      },
      { url: "/attendance", iconName: "ballot", title: "Attendance" },
      {
        url: "/student/profile",
        iconName: "assignment_in",
        title: "Student Profiles"
      },
      {
        url: "/lesson/plans",
        iconName: "track_changes",
        title: "Lesson Management"
      },
      {
        url: "/content-library",
        iconName: "dashboard",
        title: "Content Library"
      },
      {
        url: "/class-performance",
        iconName: "insert_chart",
        title: "Class Performance"
      },
      { url: "/courses", iconName: "insert_drive_file", title: "Courses" },
      {
        url: "/resources",
        iconName: "library_books",
        title: "My Learning Resources"
      }
    ];

    this.adminMenuItems = [
      {
        url: "/manage-curriculums",
        iconName: "dashboard",
        title: "Manage Curriculums"
      },
      {
        url: "/manage-subjects",
        iconName: "library_books",
        title: "Manage Subjects"
      },
      {
        url: "/manage-lessons",
        iconName: "assignment_in",
        title: "Manage Lessons"
      },
      {
        url: "/prerequisite-standards-mapping",
        iconName: "track_changes",
        title: "Prerequisite Standards Mapping"
      },
      {
        url: "/manage-lesson-plan-templates",
        iconName: "insert_chart",
        title: "Manage Lesson Plan Templates"
      },
      {
        url: "/manage-content",
        iconName: "insert_drive_file",
        title: "Manage Content"
      },
      {
        url: "/manage-questions",
        iconName: "ballot",
        title: "Manage Questions"
      }
    ];
  }
}
