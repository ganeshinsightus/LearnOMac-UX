import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { AwardsDialogComponent } from "../awards-dialog/awards-dialog.component";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";

@Component({
  selector: "awards-list",
  templateUrl: "./awards-list.component.html",
  styleUrls: ["./awards-list.component.scss"]
})
export class AwardsListComponent {
  public academicDialogRef: MatDialogRef<AwardsDialogComponent>;
  constructor(public dialog: MatDialog, private routes: Router) {}

  @ViewChild("TreeGrid")
  treeGrid: jqxTreeGridComponent;

  data: any[] = [
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "General",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Sports",
      award: "Best Batsman Award",
      awardedon: "30-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    },
    {
      category: "Academic",
      award: "Achiever Award",
      awardedon: "29-11-2018",
      
    }
  ];
   

  getWidth(): any {
    return "100%";
  }

  getHeight(): any {
    return "calc(67vh)";
  }
  
    source: any = {
    dataType: "json",
    dataFields: [
      { name: "category", type: "string" },
      { name: "award", type: "string" },
      { name: "awardedon", type: "date" },
    ],
    localData: this.data,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    {
      text: "Category",
      dataField: "category",
      align: "center",
      cellsAlign: "center",
      width: 312
    },
    {
      text: "Awarded Title",
      dataField: "award",
      align: "center",
      cellsAlign: "center",
      width: 312
    },
    {
      text: "Awarded on",
      align: "center",
      cellsAlign: "center",
      cellsFormat: "d",
      dataField: "awardedon",
      width: 312
    },
    {
      text: "Actions",
      cellsAlign: "center",
      align: "center",
      width: 312,
      columnType: "none",
      editable: false,
      sortable: false,
      dataField: null,
      cellsRenderer: (row: number, column: any, value: any): string => {
        return (
          `<div data-row='` +
          row +
          `' class='editButton' style='color:white;background-color:skyblue;margin-left: 108px;'></div>
          <div data-row='` +
          row +
          `' class='deleteButton' style='color:white;background-color:red;margin-left: 108px;
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
       this.openAwardsDialog();
    }
    if (value === "Delete") {
     alert("Data Deleted Successfully");
   }
  }

  openAwardsDialog() {
    this.academicDialogRef = this.dialog.open(AwardsDialogComponent, {
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
