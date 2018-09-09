import { Component, ViewChild, ElementRef } from "@angular/core";
import Chart from "../../../../node_modules/chart.js";

@Component({
  selector: "doughnut-chart-level5",
  templateUrl: "./doughnut-chart-level5.component.html",
  styleUrls: ["./doughnut-chart-level5.component.scss"]
})
export class DoughnutChartLevel5Component {
  @ViewChild("donut")
  donut: ElementRef;

  constructor() {}

  ngOnInit() {
    let donutCtx = this.donut.nativeElement.getContext("2d");

    var data = {
      labels: [
        "Low performing",
        "Satisfactory",
        "Above average",
        "Mastered"
      ],
      datasets: [
        {
          data: [10, 23, 42, 78],
          backgroundColor: ["red", "yellow", "#1fc8f8", "#76a346"]
        }
      ]
    };

    var chart = new Chart(donutCtx, {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 85,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        responsive: true,
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: "#333",
            fontSize: 12
          }
        }
      }
    });
  }
}
