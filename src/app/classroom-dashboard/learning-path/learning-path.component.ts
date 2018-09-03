import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['../classroom-dashboard.component.scss']
})
export class LearningPathComponent {


  constructor(private routes:Router) { }
 
  openLearningPathsList(){
    this.routes.navigateByUrl('/learning-paths-list')
  }

}
