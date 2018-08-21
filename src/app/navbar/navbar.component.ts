import { Component } from "@angular/core";
import { FilterService } from "../common-services/filter.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "navbar-component",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  filterForm: FormGroup;
  showClassRoomFilter: boolean;
  showStudentProfile: boolean;
  showStudentPerformance: boolean;
  checkPath: string;

  constructor(
    private filterBuilder: FormBuilder,
    private filterService: FilterService,
    private routes: Router
  ) {
    this.createForm();
    //this.checkPath = this.currentPath.path();
  }

  

  ngOnInit() {
    this.routes.events.subscribe(() => {
      this.checkPath = this.routes.url;
      if (this.checkPath === this.filterService.isClassroomPath) {
        this.showClassRoomFilter = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
      } else if (this.checkPath === this.filterService.isStudentProfilePath) {
        this.showStudentProfile = this.filterService.isShowFilter;
        this.showClassRoomFilter = false;
        this.showStudentPerformance = false;
      } else if (
        this.checkPath === this.filterService.isStudentPerformancePath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomFilter = false;
      } else if (
        this.checkPath === this.filterService.isStudentCommunicationPath
      ) {
        this.showStudentPerformance = this.filterService.isShowFilter;
        this.showStudentProfile = false;
        this.showClassRoomFilter = false;
      } else {
        this.showClassRoomFilter = false;
        this.showStudentProfile = false;
        this.showStudentPerformance = false;
      }    
    });
  }

  createForm() {
    this.filterForm = this.filterBuilder.group({
      grade: new FormControl(0),
      section: new FormControl(0),
      subject: new FormControl(0),
      student: new FormControl(0)
    });
  }
}
