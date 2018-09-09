import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

export interface PeriodicElement {
  prerequisite: string;
  curiculummap: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
  {
    prerequisite: "Grade 4 - Maths",
    curiculummap: "Unit 4 - Probability"
  },
];

@Component({
  selector: "stacked-bar-table",
  styleUrls: ["stacked-bar-table.component.scss"],
  templateUrl: "stacked-bar-table.component.html"
})
export class StackedBarTable {
  displayedColumns: string[] = ["prerequisite", "curiculummap"];
  dataSource = ELEMENT_DATA;

  constructor(private dialog:MatDialogRef<StackedBarTable>){}
  onClose(){
    this.dialog.close();
  }
}
