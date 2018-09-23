import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./courses-details-approved.component.html",
  styleUrls: ["./courses-details-approved.component.scss"]
})
export class CoursesDetailsApprovedComponent {
  constructor(public dialog: MatDialog, private routes: Router) {}
  
  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(65vh)";
  }

  data: any[] = [
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
    {
      title: "Grade 5-Maths.Unit 4- Probability",
      createdon:"30/08/18",
      approvedon: "31/08/18",
    },
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "title", type: "string" },
      { name: "createdon", type: "date" },
      { name: "approvedon", type: "date" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Course title",
      dataField: "title",
      align: "center",
      cellsAlign: "center",
      width: 300
    },
    {
      text: "Created on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "createdon",
      width: 300
    },
    {
      text: "Approved on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "approvedon",
      width: 300
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 300,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='viewButton' style='color:white;background-color:green;margin-left: 72px;'></div>`
        );
      }
    }
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
  rendered = (): void => {
    let uglyviewButtons = jqwidgets.createInstance(".viewButton", "jqxButton", {
      height: 26,
      width: 150,
      value: "Publish Course"
    });
    let flattenviewButtons = flatten(uglyviewButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenviewButtons) {
      for (let i = 0; i < flattenviewButtons.length; i++) {
        flattenviewButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
  };

  rowKey: number = -1;
  cellClick(event: any): void {
    this.rowKey = event.args.key;
  }
  editClick(event: any): void {
    let value = event.target.innerText;
    if (value === "View") {
      // this.openDialog();
    }
  }

  onNavigate(value) {
    this.routes.navigate([value]);
  }

  openUpdateKnowledgeLevelDialog() {}

  onBack() {
    this.routes.navigateByUrl("/courses");
  }
}
