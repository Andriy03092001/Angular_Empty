import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../Event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Event[];

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
    this.eventService.refreshList.subscribe((newEvents: Event[]) => {
      this.events = newEvents;
    })
  }

}
