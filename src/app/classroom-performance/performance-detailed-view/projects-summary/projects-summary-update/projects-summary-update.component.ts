import { Component, ViewChild } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./projects-summary-update.component.html",
  styleUrls: ["./projects-summary-update.component.scss"]
})
export class ProjectSummaryUpdateComponent {
  @ViewChild("myTreeGrid")
  myTreeGrid: jqxTreeGridComponent;

  constructor(public dialog: MatDialog, private routes: Router) {}
 

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }

  data: any[] = [
    {
      student: "Ganesh",
      preknowledgelevel: "Assessment Pending",
      updatedon: "20/08/18",
      updatedby: "System",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "-",
      updatedon: "20/08/18",
      updatedby: "System",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Ganesh",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    },
    {
      student: "Raj",
      preknowledgelevel: "Low Performing",
      updatedon: "20/08/18",
      updatedby: "Teacher",
      newknowledgelevel: "Above Average",
      methods: "Special one to one session",
      remarks: "-"
    }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "student", type: "string" },
      { name: "preknowledgelevel", type: "string" },
      { name: "updatedon", type: "date" },
      { name: "updatedby", type: "string" },
      { name: "newknowledgelevel", type: "string" },
      { name: "methods", type: "string" },
      { name: "remarks", type: "string" }
    ],
    localData: this.data
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Student Name",
      editable: false,
      dataField: "student",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Preknowledge Level",
      editable: false,
      dataField: "preknowledgelevel",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Updated on",
      editable: false,
      dataField: "updatedon",
      cellsFormat: "d",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Updated by",
      editable: false,
      dataField: "updatedby",
      width: 200,
      align: "center",
      cellsAlign: "center"
    },
    {
      text: "Next Knowledge Level",
      dataField: "newknowledgelevel",
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
      text: "Learning Method",
      dataField: "methods",
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
          `' class='editButton' style='margin-left: 5em; float: left ; background-color:#0d47a1; color:white'></div>
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
            this.myTreeGrid.endRowEdit(rowKey, true);
          }
        );
      }
    }
  };
  
  ready = (): void => {
    this.myTreeGrid.expandAll();
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
      this.myTreeGrid.beginRowEdit(this.rowKey.toString());
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
      this.myTreeGrid.endRowEdit(this.rowKey.toString());
    }
  }
 

  onBack() {
    this.routes.navigateByUrl("class-performance/detailed-view");
  }
}
