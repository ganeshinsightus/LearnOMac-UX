import { Component } from '@angular/core';
import { Coordinates } from '../../classroom/peformance-summary/stacked-bar-chart/stacked-bar-chart';
import { PerformanceFilterComponent } from '../../dynamic-component/performance-filter/performance-filter.component';
import { MatDialog, MatDialogRef } from '../../../../node_modules/@angular/material';


@Component({
  selector: 'profile-performance',
  templateUrl: './performance-summary.component.html',
  styleUrls: ['../student-profile.component.scss']
})
export class ProfilePerformanceComponent {

  showScroll:boolean;
  showAssignment:boolean;
  
  courses1: Coordinates[] = [
    { title: "New", value: 10},
    { title: "In progress", value:30},
    { title: "Pending", value:3 },
    { title: "Completed", value: 20 }
  ];

  courses2: Coordinates[] = [
    { title: "New", value: 30},
    { title: "In progress", value:20},
    { title: "Pending", value:4 },
    { title: "Completed", value: 10 }
  ];

  courses3: Coordinates[] = [
    { title: "New", value: 4},
    { title: "In progress", value:17},
    { title: "Pending", value:8},
    { title: "Completed", value: 15 }
  ];

  values1: Coordinates[] = [
    { title: "At Risk", value: 9},
    { title: "Below Average", value:40},
    { title: "Averge", value: 21 },
    { title: "Above Average", value: 54 },
    { title: "Master", value: 9 }
  ];

  values2: Coordinates[] = [
    { title: "At Risk", value: 10},
    { title: "Below Average", value:25},
    { title: "Averge", value: 30 },
    { title: "Above Average", value: 12 },
    { title: "Master", value: 3 }
  ];

  values3: Coordinates[] = [
    { title: "At Risk", value: 19},
    { title: "Below Average", value:60},
    { title: "Averge", value: 29},
    { title: "Above Average", value: 44 },
    { title: "Master", value: 10}
  ];

  values4: Coordinates[] = [
    { title: "At Risk", value: 12},
    { title: "Below Average", value:22},
    { title: "Averge", value: 4},
    { title: "Above Average", value: 12 },
    { title: "Master", value: 40}
  ];

  performanceFilterDialogRef:MatDialogRef<PerformanceFilterComponent>;

  constructor(private dialog:MatDialog){}
  openDialog() {
    this.performanceFilterDialogRef = this.dialog.open(PerformanceFilterComponent, {
      width: "30%",
      height: "71vh"
    });
    this.performanceFilterDialogRef.disableClose = true;
  }

  ngOnInit(){
    this.openDialog();
  }

  
}
