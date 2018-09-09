import { Component } from "@angular/core";

@Component({
    templateUrl: "student-profile.component.html",
    styleUrls: [ "student-profile.component.scss" ]
})
export class StudentProfileComponent {

    tabLinks = [
        { path: 'profile', label: 'Profile' },
        { path: 'performance', label: 'Performance' },
        { path: 'parent-communication', label: 'Parent Communication' },
      ];
}