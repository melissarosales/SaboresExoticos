import { Component, OnInit } from '@angular/core';
import allLocales from '@fullcalendar/core/locales-all';
import { CalendarOptions, Calendar } from '@fullcalendar/angular'; // useful for typechecking
import esLocale from '@fullcalendar/core/locales/es'; 
@Component({
  selector: 'app-calendar-activities',
  templateUrl: './calendar-activities.component.html',
  styleUrls: ['./calendar-activities.component.scss']
})
export class CalendarActivitiesComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    locales: allLocales,
    locale: 'es', // the initial locale
    initialView: 'dayGridMonth',  
    themeSystem: 'bootstrap',
  eventColor: '#DAA640',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Eventos', date: '2020-09-01' },
      { title: 'Eventos', date: '2020-09-15' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }


}
