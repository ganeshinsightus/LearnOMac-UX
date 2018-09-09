import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinates } from '../../dynamic-component/stacked-bar-chart/stacked-bar-chart';

@Component({
  selector: 'performance-summary',
  templateUrl: './performance-summary.component.html',
  styleUrls: ['../classroom-dashboard.component.scss']
})
export class PerformanceSummaryComponent {

  showScroll:boolean;
  
  values1: Coordinates[] = [
    { title: "Low Performing", value:40},
    { title: "Satisfactory", value: 21 },
    { title: "Above Average", value: 54 },
    { title: "Mastered", value: 9 }
  ];

  values2: Coordinates[] = [
    { title: "Low Performing", value:25},
    { title: "Satisfactory", value: 30 },
    { title: "Above Average", value: 12 },
    { title: "Mastered", value: 3 }
  ];

  values3: Coordinates[] = [
    { title: "Low Performing", value:60},
    { title: "Satisfactory", value: 29},
    { title: "Above Average", value: 44 },
    { title: "Mastered", value: 10}
  ];

  values4: Coordinates[] = [
    { title: "Low Performing", value:22},
    { title: "Satisfactory", value: 4},
    { title: "Above Average", value: 12 },
    { title: "Mastered", value: 40}
  ];

  constructor(private routes:Router){

  }
  openPerformanceList(){
    this.routes.navigateByUrl('/performance-summary-list');
  }
}
