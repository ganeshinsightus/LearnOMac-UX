import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { jqxCalendarComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar";

@Component({
    selector: "jqx-calendar",
    templateUrl: "./calendar-jqx.component.html",
    styleUrls: ["./calendar-jqx.component.scss"]
  })
  export class CalendarjqxComponent implements AfterViewInit{
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;
    ngAfterViewInit(): void {
        let date1 = new Date();
        let date2 = new Date();
        let date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(16);
        // Add special dates by invoking the addSpecialDate method.
        this.myCalendar.addSpecialDate(date1, '', 'Teachers Day ');
        this.myCalendar.addSpecialDate(date2, '', 'Photography Day');
        this.myCalendar.addSpecialDate(date3, '', 'Sports Day');
    }
  }

