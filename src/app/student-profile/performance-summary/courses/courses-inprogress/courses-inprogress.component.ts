import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { UpdateKnowledgeLevelDialogComponent } from "../../assessment-summary/update-knowledge-level-dialog/update-knowledge-level-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./courses-inprogress.component.html",
  styleUrls: ["./courses-inprogress.component.scss"]
})
export class CoursesInprogressComponent {
  uklDialogRef: MatDialogRef<UpdateKnowledgeLevelDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

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
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",
      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",
      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdby: "Ganesh",
      objective: "To understand a probability problems ..",
      publishedon: "31/08/18",
      grades: "6,8,9",

      concepts: "Probability,Trignometry",
      subscribedon: "02/09/18",
      startedon: "03/09/18",
      duedate: "09/09/18",
      
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "objective", type: "string" },
      { name: "concepts", type: "string" },
      { name: "grades", type: "string" },
      { name: "createdby", type: "string" },
      { name: "publishedon", type: "date" },
      { name: "subscribedon", type: "date" },
      { name: "startedon", type: "date" },
      { name: "duedate", type: "date" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Course Title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 137
    },
    {
      text: "Course Objective",
      dataField: "objective",
      align: "center",
      cellsAlign: "center",
      width: 137
    },
    {
      text: "Pre-requisite Concepts",
      dataField: "concepts",
      align: "center",
      cellsAlign: "center",
      width: 137
    },
    {
      text: "Grades Applicable",
      align: "center",
      cellsAlign: "center",
      dataField: "grades",
      width: 137
    },
    {
      text: "Created by",
      align: "center",
      cellsAlign: "center",
      dataField: "createdby",
      width: 137
    },
    {
      text: "Published on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "publishedon",
      width: 137
    },
    {
      text: "Subscribed on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "subscribedon",
      width: 137
    },
    {
      text: "Started on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "startedon",
      width: 137
    },
    {
      text: "Due date",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "duedate",
      width: 137
    },
  ];
  editSettings: any = {
    saveOnPageChange: true,
    saveOnBlur: true,
    saveOnSelectionChange: false,
    cancelOnEsc: true,
    saveOnEnter: true,
    editOnDoubleClick: false,
    editOnF2: false
  };

  onNavigate(value){
    this.routes.navigate([value]);
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
