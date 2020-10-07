import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../event.model';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  constructor() { }
  // currentEvent = new Event("JS Event in Kiev", "...", "20/10/2020", "https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png");

  @Input() currentEvent: Event;
  @Input() index: number;
  isPriority: boolean = true;

  setPriority() {
    this.isPriority = !this.isPriority;
  }

  ngOnInit() {
  }

}
