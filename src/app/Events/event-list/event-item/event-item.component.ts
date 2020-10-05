import { Component, OnInit } from '@angular/core';
import { Event } from '../../event.model';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  constructor() { }

  // title: string = "JS Event in Kiev";
  // image_url: string = "https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png";
  // dateStart: string = "20/10/2020";

  currentEvent = new Event("JS Event in Kiev", "...", "20/10/2020", "https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png");

  ngOnInit() {
  }

}
