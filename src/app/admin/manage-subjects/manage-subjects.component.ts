import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "manage-subjects",
  templateUrl: "./manage-subjects.component.html",
  styleUrls: ["./manage-subjects.component.scss"]
})
export class ManageSubjectsComponent {
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
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Science",
      description: "Measurements ..",
      status: "published",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Science",
      description: "Measurements ..",
      status: "published",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Science",
      description: "Measurements ..",
      status: "published",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Science",
      description: "Measurements ..",
      status: "published",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Science",
      description: "Measurements ..",
      status: "published",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
    {
      subject: "Mathematics",
      description: "Probability ..",
      status: "draft",
      createdon: "19/08/2018",
      updatedon:"24/08/2018",
      updatedby:"System"
    },
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "subject", type: "string" },
      { name: "description", type: "string" },
      { name: "status", type: "string" },
      { name: "createdon", type: "date" },
      { name: "updatedon", type: "date" },
      { name: "updatedby", type: "string" },
    ],
    localData: this.data,
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Subject Title",
      dataField: "subject",
      align: "center",
      cellsAlign: "center",
      width: 250
    },
    {
      text: "Description",
      dataField: "description",
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
      text: "Created on",
      dataField: "createdon",
      align: "center",
      cellsAlign: "center",
      cellsFormat:"d",
      width: 250
    },
    {
      text: "Last updated on",
      dataField: "updatedon",
      align: "center",
      cellsAlign: "center",
      cellsFormat:"d",
      width: 250
    },
    {
      text: "Last updated by",
      dataField: "updatedby",
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
              `' class='editButton' style='color:white;background-color:green;margin-left: 108px;
          margin-top: 2px;'></div><div data-row='` +
              row +
              `' class='deleteButton' style='color:white;background-color:red;margin-left: 108px;'></div><div data-row='` +
              row +
              `' class='publishButton' style='color:white;background-color:#0d47a1;margin-left: 100px;
          margin-top: 2px;'></div>`
          : `<div data-row='` +
              row +
              `' class='editButton' style='color:white;background-color:green;margin-left: 108px;'></div>`;
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

    let flatteneditButtons = flatten(uglyeditButtons);
    let flattendeleteButtons = flatten(uglydeleteButtons);
    let flattenpublishButtons = flatten(uglypublishButtons);

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
  };

  rowKey: number = -1;
  cellClick(event: any): void {
    this.rowKey = event.args.key;
  }
  editClick(event: any): void {
    let value = event.target.innerText;
   
  }

  openNewCurriculum(){
    this.routes.navigateByUrl('create-subject');
  }

}
