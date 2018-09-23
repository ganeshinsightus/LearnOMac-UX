import { Component } from '@angular/core';

@Component({
  selector: 'home-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['../dashboard.component.scss']
})
export class CalendarComponent {
  selectedDate:any;
  selectedChange:any;
  yearSelected:any;
  monthSelected:any;
  userSelection:any;
  cdkAutofill:any;
}
