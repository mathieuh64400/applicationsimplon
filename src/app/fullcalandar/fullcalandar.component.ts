import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core'; // include this line
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-fullcalandar',
  templateUrl: './fullcalandar.component.html',
  styleUrls: ['./fullcalandar.component.css']
})
export class FullcalandarComponent implements OnInit {

  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth'
  };
  constructor() {  const name = Calendar.name; }

  ngOnInit(): void {
  }
  calendarPlugins = [dayGridPlugin]; // important!
}
