import { Component, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  templateUrl: "./collection-grid-dialog.component.html",
  styleUrls: ["./collection-grid-dialog.component.scss"]
})
export class CollectionDialogComponent {
  
  constructor(private dialogRef: MatDialogRef<CollectionDialogComponent>){

  }

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return "90%";
    }

    return 850;
  }
  data: any[] = [
    {
      id: "1",
      collection: "Maths Collection",
      createdon: "-",
      children: [
        {
          id: "2",
          collection: "Probability",
          createdon: "10-10-18"
        },
        {
          id: "3",
          collection: "Real Numbers",
          createdon: "10-10-18"
        },

        {
          id: "4",
          collection: "Sets",
          createdon: "10-10-18"
        }
      ]
    },
    {
        id: "5",
        collection: "Science Collection",
        createdon: "-",
        children: [
          {
            id: "6",
            collection: "Measurements",
            createdon: "10-10-18"
          },
          {
            id: "7",
            collection: "Solid State",
            createdon: "10-10-18"
          },
  
          {
            id: "8",
            collection: "Gaseous State",
            createdon: "10-10-18"
          }
        ]
      }
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "collection", type: "string" },
      { name: "createdon", type: "date" },
      { name: "id", type: "number" },
      { name: "children", type: "array" }
    ],
    hierarchy: {
      root: "children"
    },
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Collection Name",
      align: "center",
      dataField: "collection",
      width: 350
    },
    {
      text: "Created on",
      dataField: "createdon",
      align: 'right', 
      cellsFormat: 'd',
      cellsAlign: 'right',
      width: 300
    },
    {
        text: "Actions",
        dataField: "actions",
        align: 'right', 
        cellsFormat: 'd',
        cellsAlign: 'right',
        width: 300
      },
  ];
  ready(): void {
    this.treeGrid.expandRow(1);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
