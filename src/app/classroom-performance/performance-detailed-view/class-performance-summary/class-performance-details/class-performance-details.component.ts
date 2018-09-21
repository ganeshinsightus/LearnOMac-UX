import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./class-performance-details.component.html",
  styleUrls: ["./class-performance-details.component.scss"]
})
export class ClassPerformanceDetailsComponent {
  constructor(private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  data: any[] = [
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
     },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    },
    {
      student:"Ganesh",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
    },
    {
      student:"Kiran",
      knowledge: "Above Average",
      updatedon: "20/08/18",
    }
  ];

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }

    
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "student", type: "string" },
      { name: "knowledge", type: "string" },
      { name: "updatedon", type: "date" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Student Name",
      dataField: "student",
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
    {
      text: "Updated on",
      dataField: "updatedon",
      align: "center",
      cellsFormat: "d",
      cellsAlign: "center",
      width: 400
    }
  ];
 
  onBack() {
    this.routes.navigateByUrl("class-performance/detailed-view");
  }
}
