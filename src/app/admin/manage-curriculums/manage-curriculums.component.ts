import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "manage-curriculums",
  templateUrl: "./manage-curriculums.component.html",
  styleUrls: ["./manage-curriculums.component.scss"]
})
export class ManageCurriculumsComponent {
  constructor(private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(76vh)";
  }

  data: any[] = [
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
    {
      curriculumname: "Stateboard",
      country: "India",
      state: "Tamilnadu",
      createdby: "Insightus Technologies",
      status: "published"
    },
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
    {
      curriculumname: "Stateboard",
      country: "India",
      state: "Tamilnadu",
      createdby: "Insightus Technologies",
      status: "published"
    },
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
    {
      curriculumname: "Stateboard",
      country: "India",
      state: "Tamilnadu",
      createdby: "Insightus Technologies",
      status: "published"
    },
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
    {
      curriculumname: "Stateboard",
      country: "India",
      state: "Tamilnadu",
      createdby: "Insightus Technologies",
      status: "published"
    },
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
    {
      curriculumname: "Stateboard",
      country: "India",
      state: "Tamilnadu",
      createdby: "Insightus Technologies",
      status: "published"
    },
    {
      curriculumname: "CBSE",
      country: "India",
      state: "Telangana",
      createdby: "Insightus Technologies",
      status: "draft"
    },
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "curriculumname", type: "string" },
      { name: "country", type: "string" },
      { name: "state", type: "string" },
      { name: "createdby", type: "string" },
      { name: "status", type: "string" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Curriculum Name",
      dataField: "curriculumname",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Country",
      dataField: "country",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "State",
      dataField: "state",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Created by",
      dataField: "createdby",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Status",
      dataField: "status",
      align: "center",
      cellsAlign: "center",
      width: 250
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
      cellsRenderer: (
        row: number,
        column: any,
        value: any,
        rowData
      ): string => {
        return (rowData.status === "draft")
          ? `<div data-row='` +
              row +
              `' class='viewButton' style='color:white;background-color:skyblue;margin-left: 108px;'></div>
          <div data-row='` +
              row +
              `' class='editButton' style='color:white;background-color:green;margin-left: 108px;
          margin-top: 2px;'></div><div data-row='` +
              row +
              `' class='deleteButton' style='color:white;background-color:red;margin-left: 108px;'></div><div data-row='` +
              row +
              `' class='publishButton' style='color:white;background-color:#0d47a1;margin-left: 100px;
          margin-top: 2px;'></div>`
          : `<div data-row='` +
              row +
              `' class='viewButton' style='color:white;background-color:skyblue;margin-left: 108px;'></div>
          <div data-row='` +
              row +
              `' class='editButton' style='color:white;background-color:green;margin-left: 108px;
          margin-top: 2px;'></div><div data-row='` +
              row +
              `' class='deleteButton' style='color:white;background-color:red;margin-left: 108px;'></div><div data-row='` +
              row +
              `' class='affiliationsButton' style='color:white;background-color:#0d47a1;margin-left: 68px;
          margin-top: 2px;'></div>`;
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
      width: 60,
      height: 24,
      value: "View"
    });
    let uglyeditButtons = jqwidgets.createInstance(".editButton", "jqxButton", {
      width: 60,
      height: 24,
      value: "Edit"
    });
    let uglydeleteButtons = jqwidgets.createInstance(
      ".deleteButton",
      "jqxButton",
      {
        width: 60,
        height: 24,
        value: "Delete"
      }
    );
    let uglypublishButtons = jqwidgets.createInstance(
      ".publishButton",
      "jqxButton",
      {
        width: 80,
        height: 24,
        value: "Publish"
      }
    );
    let uglyaffiliationsButtons = jqwidgets.createInstance(
      ".affiliationsButton",
      "jqxButton",
      {
        width: 146,
        height: 24,
        value: "View Affiliations"
      }
    );
    let flattenviewButtons = flatten(uglyviewButtons);
    let flatteneditButtons = flatten(uglyeditButtons);
    let flattendeleteButtons = flatten(uglydeleteButtons);
    let flattenpublishButtons = flatten(uglypublishButtons);
    let flattenaffiliationsButtons = flatten(uglyaffiliationsButtons);

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
    if (flattenpublishButtons) {
      for (let i = 0; i < flattenpublishButtons.length; i++) {
        flattenpublishButtons[i].addEventHandler(
          "click",
          (event: any): void => {
            this.editClick(event);
          }
        );
      }
    }
    if (flattenaffiliationsButtons) {
      for (let i = 0; i < flattenaffiliationsButtons.length; i++) {
        flattenaffiliationsButtons[i].addEventHandler(
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
    if (value === "View Affiliations") {
      this.openViewAffiliations()
    }
    if (value === "Reply") {
    }
  }

  openViewAffiliations(){
    this.routes.navigateByUrl('manage-curriculums/view-affiliations');
  }

  openNewCurriculum(){
    this.routes.navigateByUrl('create-curriculum');
  }

  onBack() {
    this.routes.navigateByUrl("/class-dashboard");
  }
}
