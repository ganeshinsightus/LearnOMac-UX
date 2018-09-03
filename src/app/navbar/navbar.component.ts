import { Component } from "@angular/core";
import { FilterService } from "../common-services/filter.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "navbar-component",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  filterForm: FormGroup;
  showClassRoomDashboardFilter: boolean;
  showClassRoomPerformanceFilter: boolean;
  showClassroomPerformanceDetailedViewFilter: boolean;
  showLessonFilter: boolean;
  showStudentProfile: boolean;
  showStudentPerformance: boolean;
  checkPath: string;

  treeSource: any[] = [
    {
      label: "Unit I - Number System ",
      selected: false,
      items: [
        {
          label: "Real Numbers",
          selected: true
        },
        {
          label: "Sets",
          selected: true
        }
      ]
    },
    {
      label: "Unit II - Algebra",
      items: [
        {
          label: "Propogation",
          selected: true
        },
        {
          label: "Quadratic Equations",
          selected: true
        }
      ]
    }
  ];

  constructor(
    private filterBuilder: FormBuilder,
    private filterService: FilterService,
    private routes: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.routes.events.subscribe(() => {
      this.checkPath = this.routes.url;
      if (this.checkPath === this.filterService.isClassroomDashboardPath) {
        this.showClassRoomDashboardFilter = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
      } else if (
        this.checkPath === this.filterService.isClassroomPerformancePath
      ) {
        this.showClassRoomPerformanceFilter = this.filterService.isShowFilter;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
      } else if (
        this.checkPath ===
        this.filterService.isClassroomPerformanceDetailedViewPath
      ) {
        this.showClassroomPerformanceDetailedViewFilter = this.filterService.isShowFilter;
        this.showClassRoomPerformanceFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
      } else if (this.checkPath === this.filterService.isStudentProfilePath) {
        this.showStudentProfile = this.filterService.isShowFilter;
        this.showClassRoomDashboardFilter = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
      } else if (
        this.checkPath === this.filterService.isStudentPerformancePath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomDashboardFilter = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
      } else if (
        this.checkPath === this.filterService.isStudentCommunicationPath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomDashboardFilter = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
      } else {
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
      }
    });
  }

  createForm() {
    this.filterForm = this.filterBuilder.group({
      grade: new FormControl(0),
      section: new FormControl(0),
      subject: new FormControl(0),
      student: new FormControl(0),
      lesson: new FormControl(0)
    });
  }
}
