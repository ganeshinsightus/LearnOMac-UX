import { Component, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "Ajith" },
  { name: "Vijay" },
  { name: "Arya" },
  { name: "Surya" },
  { name: "Ganesh" }
];

@Component({
  templateUrl: "./absence-dialog.component.html",
  styleUrls: ["./absence-dialog.component.scss"]
})
export class AbsenceDialogComponent {
  displayedColumns: string[] = ["name"];
  dataSource = ELEMENT_DATA;

  constructor(public dialogref: MatDialogRef<AbsenceDialogComponent>) {}
  closeDialog() {
    this.dialogref.close();
  }
}
