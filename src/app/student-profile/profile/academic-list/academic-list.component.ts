import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "academic-list",
  templateUrl: "./academic-list.component.html",
  styleUrls: ["./academic-list.component.scss"]
})
export class AcademicListComponent {

  tabLinks = [
    { path: "student/profile/academic", label: "Academic" },
    { path: "student/profile/sports", label: "Sports" },
    { path: "student/profile/awards", label: "Awards" }
  ];

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
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Guru",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      grade: "9",
      badge: "Guru",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Teacher",
      subject: "Mathematics",
      topic: "Probability",
      action: "view"
    },
    {
      badge: "Mastered",
      awardedon: "29/01/18",
      awardedby: "Rajendra",
      role: "Principal",
      subject: "Mathematics",
      topic: "Probability",
      action: "edit"
    }
  ];

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "badge", type: "string" },
      { name: "awardedon", type: "date" },
      { name: "awardedby", type: "string" },
      { name: "role", type: "string" },
      { name: "subject", type: "string" },
      { name: "topic", type: "string" }
    ],
    localData: this.data
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Badge",
      dataField: "badge",
      align: "center",
      cellsAlign: "center",
      width: 178,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let badges = ["Mastered", "Guru"];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: badges,
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
      text: "Awarded on",
      dataField: "awardedon",
      cellsformat: "dd-MMMM-yyyy",
      editable: false,
      align: "center",
      cellsAlign: "center",
      columnType:"datetimeinput",
      width: 178,
    },
    {
      text: "Awarded by",
      dataField: "awardedby",
      editable: false,
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Role",
      dataField: "role",
      align: "center",
      editable: false,
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Subject",
      dataField: "subject",
      align: "center",
      cellsAlign: "center",
      width: 178,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let subjects = ["Mathematics", "Science", "Social Science", "English"];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: subjects,
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
      text: "Topic",
      dataField: "topic",
      align: "center",
      cellsAlign: "center",
      width: 178,
      columnType: "template",
      createEditor: (row, cellvalue, editor, cellText, width, height) => {
        // construct the editor.
        let topics = ["Probability", "Real Numbers", "Algebra", "Trignometry"];
        editor.jqxDropDownList({
          autoDropDownHeight: true,
          source: topics,
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
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 178,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='margin-left: 5em;background-color:#004d73; color:white;float:left'></div>
                    <div data-row='` +
          row +
          `' class='cancelButton' style='display: none; float: left; margin-left: 1em ;background-color:red; color:white'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:red;margin-left: 5em;
          margin-top: 2px;'></div>`
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

    let uglydeleteButtons = jqwidgets.createInstance(
      ".deleteButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Delete"
      }
    );
    let flattendeleteButtons = flatten(uglydeleteButtons);

    function flatten(arr: any[]): any[] {
      if (arr.length) {
        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          );
        }, []);
      }
    }
    if (flattendeleteButtons) {
      for (let i = 0; i < flattendeleteButtons.length; i++) {
        flattendeleteButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
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
    if (value === "Delete") {
      alert("Data Deleted Successfully");
    }
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

  onNavigation(value) {
    if (value) {
      this.routes.navigate([value]);
    }
    return false;
  }

  onBack() {
    this.routes.navigateByUrl("/student/profile");
  }
}
