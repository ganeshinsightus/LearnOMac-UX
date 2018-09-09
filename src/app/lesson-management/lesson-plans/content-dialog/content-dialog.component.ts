import { Component, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";


@Component({
  templateUrl: "./content-dialog.component.html",
  styleUrls: ["./content-dialog.component.scss"]
})
export class ContentDialogComponent {
  @Input() content:boolean;
  @Input() resources:boolean;
  constructor(public dialogref: MatDialogRef<ContentDialogComponent>) {}
  closeDialog() {
    this.dialogref.close();
  }
}
