import { Component, ViewChild } from "@angular/core";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { Router } from "@angular/router";

@Component({
  selector: "otherresources-content",
  templateUrl: "./otherresources-content.component.html",
  styleUrls: ["./otherresources-content.component.scss"]
})
export class OtherResourcesContentComponent {
  showFileUpload: boolean;
  showWebURL: boolean;
  resourceTypevalue: string;

  constructor(private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(27vh)";
  }

  data: any[] = [
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    },
    {
      resourcename: "Probability",
      addedon: "10/08/2018",
      updatedon: "18/08/2018"
    }
  ];

  source: any = {
    dataType: "json",
    dataFields: [
      { name: "resourcename", type: "string" },
      { name: "addedon", type: "date" },
      { name: "updatedon", type: "date" }
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Resource Name",
      dataField: "resourcename",
      align: "center",
      cellsAlign: "center",
      width: 300
    },
    {
      text: "Added on",
      dataField: "addedon",
      align: "center",
      cellsFormat: "d",
      cellsAlign: "center",
      width: 300
    },
    {
      text: "Updated on",
      dataField: "updatedon",
      align: "center",
      cellsFormat: "d",
      cellsAlign: "center",
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
      cellsRenderer: (
        row: number,
        column: any,
        value: any,
        rowData
      ): string => {
        return `<div data-row='` +
              row +
              `' class='viewButton' style='color:white;background-color:skyblue;margin-left: 108px;'></div>
            <div data-row='` +
              row +
              `' class='editButton' style='color:white;background-color:green;margin-left: 108px;
            margin-top: 2px;'></div><div data-row='` +
              row +
              `' class='deleteButton' style='color:white;background-color:red;margin-left: 108px;'></div>` 
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
  
  
    let flattenviewButtons = flatten(uglyviewButtons);
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
  };

  rowKey: number = -1;
  cellClick(event: any): void {
    this.rowKey = event.args.key;
  }
  editClick(event: any): void {
    let value = event.target.innerText;
  
  }

 
  onResourceType(event: any) {
    this.resourceTypevalue = event.target.value;
    if (this.resourceTypevalue === "1") {
      this.showFileUpload = true;
      this.showWebURL = false;
    } else {
      this.showFileUpload = false;
      this.showWebURL = true;
    }
  }

  onBack() {
    this.routes.navigateByUrl("/manage-contents");
  }
}
