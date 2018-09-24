import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { UpdateKnowledgeLevelDialogComponent } from "../update-knowledge-level-dialog/update-knowledge-level-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./assessment-summary-update.component.html",
  styleUrls: ["./assessment-summary-update.component.scss"]
})
export class AssessmentSummaryUpdateComponent {
  uklDialogRef: MatDialogRef<UpdateKnowledgeLevelDialogComponent>;

  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }

  data: any[] = [
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      updatedby: "System",
      lmethods: "-",
      remarks: "-"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Special one to one session",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      lmethods: "Learned from peers",
      remarks: "nothing",
      updatedby: "Teacher"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Special one to one session",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 5-Maths",
      mapping: "Unit 3 - Probability",
      knowledge: "Satisfactory",
      updatedon: "20/08/18",
      lmethods: "Learned from peers",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Independent Study",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Class presentation by Student",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Class presentation by Student",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      updatedby: "Teacher",
      lmethods: "Revision by Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    },
    {
      prerequisitestds: "Grade 8-Science",
      mapping: "Unit 3 - Liquid State",
      knowledge: "Low performing",
      updatedon: "26/08/18",
      lmethods: "Revision by Teacher",
      updatedby: "Teacher",
      remarks: "nothing"
    }
  ];

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "prerequisitestds", type: "string" },
      { name: "mapping", type: "string" },
      { name: "knowledge", type: "string" },
      { name: "updatedon", type: "date" },
      { name: "updatedby", type: "string" },
      { name: "lmethods", type: "string" },
      { name: "remarks", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Pre-requisite Standards",
      dataField: "prerequisitestds",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Curriculum Mapping",
      dataField: "mapping",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Update Knowledge Level",
      dataField: "knowledge",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Updated on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "updatedon",
      width: 150
    },
    {
      text: "Updated by",
      dataField: "updatedby",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Learning Methods",
      dataField: "lmethods",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Remarks",
      dataField: "remarks",
      align: "center",
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 250,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='updateButton' style='color:white;background-color:#512da8;margin-left:25px;'></div>`
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
    let uglyupdateButtons = jqwidgets.createInstance(".updateButton", "jqxButton", {
      width: 200,
      height: 24,
      value: "Update Knowledge Level"
    });
  
    let flattenupdateButtons = flatten(uglyupdateButtons);
  
    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenupdateButtons) {
      for (let i = 0; i < flattenupdateButtons.length; i++) {
        flattenupdateButtons[i].addEventHandler(
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
    if (value === "Update Knowledge Level") {
      this.openUpdateKnowledgeLevelDialog();
    }
  }

  openUpdateKnowledgeLevelDialog() {
    this.uklDialogRef = this.dialog.open(UpdateKnowledgeLevelDialogComponent, {
      width: "40%",
      height: "calc(72vh)"
    });
    this.uklDialogRef.disableClose = true;
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
