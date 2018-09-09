import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { MatDialogRef, MatDialog } from '@angular/material';
import { StackedBarTable } from '../stacked-bar-table/stacked-bar-table.component';

export class Coordinates {
  public title: string = "";
  public value: number = 0;
}

@Component({
  selector: 'stacked-bar-chart',
  templateUrl: './stacked-bar-chart.html',
  styleUrls: ['./stacked-bar-chart.scss']
})
export class StackedBarChartComponent {

  @ViewChild("progresscontainer") progresscontainer: ElementRef;

  @Input() values: Coordinates[] = [];

  stackedTableDialog:MatDialogRef<StackedBarTable>;

  constructor(private dialog:MatDialog){

  }
  ngOnInit() {

    const total = this.values.reduce((acc, value) => {
      return acc + value.value;
    }, 0);

    var values = this.values.map((val: Coordinates) => {
        return (val.value / total) * 100;
    });

    var spans = this.progresscontainer.nativeElement.querySelectorAll("span");

    for (var i = 0; i < values.length; i++) {
      spans[i].style.width = values[i] + "%";
    }

  }
  openAtRiskDialog(){
      this.stackedTableDialog = this.dialog.open(StackedBarTable, {
        width: "100%",
        height: "66vh",
      });
      this.stackedTableDialog.disableClose = true;
  }
}
