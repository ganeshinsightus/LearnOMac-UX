import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./performance-summary-list.component.html",
  styleUrls: ["./performance-summary-list.component.scss"]
})
export class PerformanceSummaryListComponent {
  constructor(private routes: Router) {}

  
  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(64vh)";
  }

  data: any[] = [
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Post lesson",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Rajan",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 2",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Post lesson",
      standard: "Grade 3",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Above Average"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Rajan",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 2",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "Mastered"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 9",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Satisfactory"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 1",
      lesson: "Maths-Probability",
      student: "Rajendra",
      knowledgelevel: "Mastered"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 8",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "At Risk"
    },
    {
      assessmenttype: "Adhoc lessons",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kishore",
      knowledgelevel: "Low Performing"
    },
    {
      assessmenttype: "Pre-requisite",
      standard: "Grade 4",
      lesson: "Maths-Probability",
      student: "Kiran",
      knowledgelevel: "Mastered"
    }
  ];

    
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "assessmenttype", type: "string" },
      { name: "standard", type: "string" },
      { name: "lesson", type: "string" },
      { name: "student", type: "string" },
      { name: "knowledgelevel", type: "string" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Assessment Type",
      dataField: "assessmenttype",
      align: "center",
      cellsAlign: "center",
      width: 244
    },
    {
      text: "Standard",
      dataField: "standard",
      align: "center",
      cellsAlign: "center",
      width: 244
    },
    {
      text: "Lesson",
      dataField: "lesson",
      align: "center",
      cellsAlign: "center",
      width: 244
    },
    {
      text: "Student Name",
      dataField: "student",
      align: "center",
      cellsAlign: "center",
      width: 244
    },
    {
      text: "Knowledge Level",
      dataField: "knowledgelevel",
      align: "center",
      cellsAlign: "center",
      width: 244
    },
  ];
 


  onBack() {
    this.routes.navigateByUrl("/class-dashboard");
  }
}
