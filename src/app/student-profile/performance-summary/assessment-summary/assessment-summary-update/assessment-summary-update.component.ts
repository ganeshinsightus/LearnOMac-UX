import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./assessment-summary-update.component.html",
  styleUrls: ["./assessment-summary-update.component.scss"]
})
export class AssessmentSummaryUpdateComponent {

  constructor(private routes: Router) {}

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
      editable:false,
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Curriculum Mapping",
      dataField: "mapping",
      align: "center",
      editable:false,
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Knowledge Level",
      dataField: "knowledge",
      width: 200,
      cellsAlign: "center",
      align: "center",
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let newknowledgelevels = [
          "Low Performing",
          "Satisfactory",
          "Above Average",
          "Mastered"
        ];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: newknowledgelevels,
          width: "100%",
          height: "100%"
        });
      },
      initEditor: (row, cellvalue, editor, celltext, width, height) => {
        // set the editor's current value. The callback is called each time the editor is displayed.
        editor.jqxDropDownList("selectItem", cellvalue);
      },
      getEditorValue: (row, cellvalue, editor) => {
        // return the editor's value.
        return editor.val();
      }
    },
    {
      text: "Updated on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      editable:false,
      dataField: "updatedon",
      columnType:"datetimeinput",
      width: 150
    },
    {
      text: "Updated by",
      dataField: "updatedby",
      align: "center",
      editable:false,
      cellsAlign: "center",
      width: 150
    },
    {
      text: "Learning Method",
      dataField: "lmethods",
      width: 200,
      cellsAlign: "center",
      align: "center",
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let learningMethods = [
          "Special one to one session",
          "Independent Study",
          "Learned from peers",
          "Classroom presentation by Student",
          "Revision by Teacher"
        ];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: learningMethods,
          width: "100%",
          height: "100%"
        });
      },
      initEditor: (row, cellvalue, editor, celltext, width, height) => {
        // set the editor's current value. The callback is called each time the editor is displayed.
        editor.jqxDropDownList("selectItem", cellvalue);
      },
      getEditorValue: (row, cellvalue, editor) => {
        // return the editor's value.
        return editor.val();
      }
    },
    {
      text: "Remarks",
      dataField: "remarks",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      columnType: "none",
      width:200,
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='margin-left: 5em; float: left ; background-color:#512da8; color:white'></div>
                    <div data-row='` +
          row +
          `' class='cancelButton' style='display: none; float: left; margin-left: 1em ;background-color:red; color:white'></div>`
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
    let uglyEditButtons = jqwidgets.createInstance(".editButton", "jqxButton", {
      width: 60,
      height: 24,
      value: "Edit"
    });
    let flattenEditButtons = flatten(uglyEditButtons);
    let uglyCancelButtons = jqwidgets.createInstance(
      ".cancelButton",
      "jqxButton",
      { width: 60, height: 24, value: "Cancel" }
    );
    let flattenCancelButtons = flatten(uglyCancelButtons);
    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattenEditButtons) {
      for (let i = 0; i < flattenEditButtons.length; i++) {
        flattenEditButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattenCancelButtons) {
      for (let i = 0; i < flattenCancelButtons.length; i++) {
        flattenCancelButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            let rowKey = event.target.getAttribute("data-row");
            this.treeGrid.endRowEdit(rowKey, true);
          }
        );
      }
    }
  };
  
  rowKey: number = -1;
  rowClick(event: any): void {
    this.rowKey = event.args.key;
  }
  
  editClick(event: any): void {
    let editButtonsContainers = document.getElementsByClassName("editButton");
    let cancelButtonsContainers = document.getElementsByClassName(
      "cancelButton"
    );
    let value = event.target.innerText;
    if (value === "Edit") {
      this.treeGrid.beginRowEdit(this.rowKey.toString());
      for (let i = 0; i < editButtonsContainers.length; i++) {
        (<HTMLElement>editButtonsContainers[i]).style.marginLeft = "5em";
        (<HTMLElement>cancelButtonsContainers[i]).style.display = "none";
      }
      (<HTMLElement>editButtonsContainers[this.rowKey]).innerText = "Save";
      (<HTMLElement>editButtonsContainers[this.rowKey]).style.marginLeft =
        "1em";
      (<HTMLElement>cancelButtonsContainers[this.rowKey]).style.display =
        "inline-block";
    } else {
      (<HTMLElement>editButtonsContainers[this.rowKey]).innerText = "Edit";
      (<HTMLElement>editButtonsContainers[this.rowKey]).style.marginLeft =
        "5em";
      (<HTMLElement>cancelButtonsContainers[this.rowKey]).style.display =
        "none";
      this.treeGrid.endRowEdit(this.rowKey.toString());
    }
  }

  onBack() {
    this.routes.navigateByUrl("/student/performance");
  }
}
