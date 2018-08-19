import { Component, Input, ViewChild, ElementRef } from '@angular/core';

export class Coordiantes {
  public title: string = "";
  public value: number = 0;
}

@Component({
  selector: 'stacked-bar-chart',
  templateUrl: './stacked-bar-chart.html',
  styleUrls: ['./stacked-bar-chart.scss']
})
export class StackedBarChartComponent {

  @ViewChild("progresscontainer") progresscontainer: ElementRef;zz

  @Input() values: Coordiantes[] = [];

  ngOnInit() {

    const total = this.values.reduce((acc, value) => {
      return acc + value.value;
    }, 0);

    var values = this.values.map((val: Coordiantes) => {
        return (val.value / total) * 100;
    });

    var spans = this.progresscontainer.nativeElement.querySelectorAll("span");

    for (var i = 0; i < values.length; i++) {
      spans[i].style.width = values[i] + "%";
    }

  }

}
