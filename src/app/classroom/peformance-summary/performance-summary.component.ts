import { Component } from '@angular/core';
import { Coordiantes } from './stacked-bar-chart/stacked-bar-chart';

@Component({
  selector: 'performance-summary',
  templateUrl: './performance-summary.component.html',
  styleUrls: ['../classroom-dashboard.component.scss']
})
export class PerformanceSummaryComponent {

  showScroll:boolean;
  
  values1: Coordiantes[] = [
    { title: "At Risk", value: 9},
    { title: "Below Average", value:40},
    { title: "Averge", value: 21 },
    { title: "Above Average", value: 54 },
    { title: "Master", value: 9 }
  ];

  values2: Coordiantes[] = [
    { title: "At Risk", value: 10},
    { title: "Below Average", value:25},
    { title: "Averge", value: 30 },
    { title: "Above Average", value: 12 },
    { title: "Master", value: 3 }
  ];

  values3: Coordiantes[] = [
    { title: "At Risk", value: 19},
    { title: "Below Average", value:60},
    { title: "Averge", value: 29},
    { title: "Above Average", value: 44 },
    { title: "Master", value: 10}
  ];

  values4: Coordiantes[] = [
    { title: "At Risk", value: 12},
    { title: "Below Average", value:22},
    { title: "Averge", value: 4},
    { title: "Above Average", value: 12 },
    { title: "Master", value: 40}
  ];

  
}
