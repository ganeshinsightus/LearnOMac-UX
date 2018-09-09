import { Component, ViewChild, ElementRef } from "@angular/core";
import Chart from "../../../../node_modules/chart.js";

@Component({
  selector: "doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.scss"]
})
export class DoughnutChartComponent {
  @ViewChild("donut")
  donut: ElementRef;

  constructor() {}

  ngOnInit() {
    let donutCtx = this.donut.nativeElement.getContext("2d");

    var data = {
      labels: ["New", "In progress", "Pending", "Completed"],
      datasets: [
        {
          data: [8, 10, 3, 15],
          backgroundColor: ["#1fc8f8", "yellow", "red", "#76a346"]
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
          animateRotate: false
        },
        responsive: true,
        legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: "#333",
                fontSize: 12,
            }
        }
      }
    });
  }
}
