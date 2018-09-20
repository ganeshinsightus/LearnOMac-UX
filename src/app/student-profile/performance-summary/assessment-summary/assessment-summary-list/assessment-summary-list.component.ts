import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";


@Component({
  templateUrl: "./assessment-summary-list.component.html",
  styleUrls: ["./assessment-summary-list.component.scss"]
})
export class AssessmentSummaryListComponent {

  constructor(public dialog: MatDialog, private routes: Router) {

  }
 
  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }

  
  data: any[]  = [
    {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 5-Maths",
      mapping:"Unit 3 - Probability",
      knowledge:"At risk"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
     {
      prerequisitestds:"Grade 8-Science",
      mapping:"Unit 3 - Liquid State",
      knowledge:"Low performing"
     },
  ]
 

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "prerequisitestds", type: "string" },
      { name: "mapping", type: "string" },
      { name: "knowledge", type: "string" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Pre-requisite Standard",
      dataField: "prerequisitestds",
      align: "center",
      cellsAlign: "center",
      width: 400
    },
    {
      text: "Curriculum Mapping",
      dataField: "mapping",
      align: "center",
      cellsAlign: "center",
      width: 400
    },
    {
      text: "Knowledge Level",
      dataField: "knowledge",
      align: "center",
      cellsAlign: "center",
      width: 400
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
 

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
 
}
