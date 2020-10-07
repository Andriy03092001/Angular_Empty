import { Component, OnInit } from '@angular/core';
import { EventService } from '../Event.service';
import { Event } from '../event.model';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  newTitle: string;
  newDescription: string;
  newImageURL: string;
  newDate: string;

  sendNewEvent() {
    const event = new Event(this.newTitle, this.newDescription, this.newDate, this.newImageURL);
    this.eventService.addNewEvent(event);
  }

  ngOnInit() {
  }

}
