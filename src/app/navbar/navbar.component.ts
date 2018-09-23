import { Component } from "@angular/core";
import { FilterService } from "../common-services/filter.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { FilterDialogService } from "../common-services/filter-dialog.service.";

export interface Lesson {
  value: string;
  viewValue: string;
}

export interface Lessons {
  disabled?: boolean;
  name: string;
  lessonchildren: Lesson[];
}

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
  showLessonPlan: boolean;
  showLessonTracking: boolean;
  showAttendanceFilter: boolean;
  showCurriculumContent: boolean;
  checkPath: string;

  lessons: Lessons[] = [
    {
      name: "Unit I - Number System",
      lessonchildren: [
        { value: "realnumbers", viewValue: "Real Numbers" },
        { value: "sets", viewValue: "Sets" }
      ]
    },
    {
      name: "Unit II - Algebra",
      lessonchildren: [
        { value: "propagation", viewValue: "Propogation" },
        { value: "quadraticequations", viewValue: "Quadratic Equations" },
        { value: "horsea-5", viewValue: "Horsea" }
      ]
    }
  ];

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
    private filterDialogService: FilterDialogService,
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
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (this.checkPath === this.filterService.isCurriculumContent) {
        this.showCurriculumContent = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showClassRoomDashboardFilter = false;
      } else if (this.checkPath === this.filterService.isAttendancePath) {
        this.showAttendanceFilter = this.filterService.isShowFilter;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showLessonTracking = false;
        this.showLessonPlan = false;
        this.showCurriculumContent = false;
      } else if (this.checkPath === this.filterService.isLessonPlanPath) {
        this.showLessonPlan = this.filterService.isShowFilter;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (this.checkPath === this.filterService.isLessonTrackingPath) {
        this.showLessonTracking = this.filterService.isShowFilter;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showLessonPlan = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (
        this.checkPath === this.filterService.isClassroomPerformancePath
      ) {
        this.showClassRoomPerformanceFilter = this.filterService.isShowFilter;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (
        this.checkPath ===
        this.filterService.isClassroomPerformanceDetailedViewPath
      ) {
        this.showClassroomPerformanceDetailedViewFilter = this.filterService.isShowFilter;
        this.showClassRoomPerformanceFilter = false;
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (this.checkPath === this.filterService.isStudentProfilePath) {
        this.showStudentProfile = this.filterService.isShowFilter;
        this.showClassRoomDashboardFilter = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (
        this.checkPath === this.filterService.isStudentPerformancePath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomDashboardFilter = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else if (
        this.checkPath === this.filterService.isStudentCommunicationPath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomDashboardFilter = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      } else {
        this.showClassRoomDashboardFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
        this.showClassRoomPerformanceFilter = false;
        this.showClassroomPerformanceDetailedViewFilter = false;
        this.showLessonPlan = false;
        this.showLessonTracking = false;
        this.showAttendanceFilter = false;
        this.showCurriculumContent = false;
      }
    });
  }

  createForm() {
    this.filterForm = this.filterBuilder.group({
      grade: new FormControl(),
      section: new FormControl(),
      subject: new FormControl(),
      student: new FormControl(),
      lesson: new FormControl()
    });
  }

  openFilterDialog() {
    this.filterDialogService.openAttendanceFilter();
  }
}
