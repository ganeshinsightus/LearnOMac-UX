import { Component } from "@angular/core";

@Component({
    templateUrl: "lesson-management.component.html",
    styleUrls: [ "lesson-management.component.scss" ]
})
export class LessonManagementComponent {

    tabLinks = [
        { path: 'plans', label: 'Lesson Plans' },
        { path: 'tracking', label: 'Lesson Tracking' },
        { path: 'assessments', label: 'Assessments' },
      ];
}