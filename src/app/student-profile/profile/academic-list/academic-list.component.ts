import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { AcademicDialogComponent } from "../academic-dialog/academic-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "academic-list",
  templateUrl: "./academic-list.component.html",
  styleUrls: ["./academic-list.component.scss"]
})
export class AcademicListComponent {
  public academicDialogRef: MatDialogRef<AcademicDialogComponent>;

  tabLinks = [
    { path: 'student/profile/academic', label: 'Academic' },
    { path: 'student/profile/sports', label: 'Sports' },
    { path: 'student/profile/awards', label: 'Awards' }
  ];

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
      { name: "topic", type: "string" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Badge",
      dataField: "badge",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Awarded on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "awardedon",
      width: 178
    },
    {
      text: "Awarded by",
      dataField: "awardedby",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Role",
      dataField: "role",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Subject",
      dataField: "subject",
      align: "center",
      cellsAlign: "center",
      width: 178
    },
    {
      text: "Topic",
      dataField: "topic",
      align: "center",
      cellsAlign: "center",
      width: 178
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
          `' class='editButton' style='color:white;background-color:skyblue;margin-left: 50px;'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:red;margin-left: 50px;
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
    let uglyeditButtons = jqwidgets.createInstance(
      ".editButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Edit"
      }
    );
    let uglydeleteButtons = jqwidgets.createInstance(
      ".deleteButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Delete"
      }
    );
    let flatteneditButtons = flatten(uglyeditButtons);
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
    if (flatteneditButtons) {
      for (let i = 0; i < flatteneditButtons.length; i++) {
        flatteneditButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
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
  };

  rowKey: number = -1;
  cellClick(event: any): void {
    this.rowKey = event.args.key;
  }
  editClick(event: any): void {
    let value = event.target.innerText;
    if (value === "Edit") {
       this.openAcademicDialog();
    }
    if (value === "Delete") {
      alert("Data Deleted Successfully")
   }
  }

  openAcademicDialog() {
    this.academicDialogRef = this.dialog.open(AcademicDialogComponent, {
      width: "50%",
      height: "calc(70vh)"
    });
    this.academicDialogRef.disableClose = true;
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
