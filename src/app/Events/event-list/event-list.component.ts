import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  constructor() { }

  events: Event[] = [
    new Event("Visit JS Event", "...", "20/12/2020", "https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png"),
    new Event("Course Work ITSTEP", "...", "15/10/2020", "https://i.ytimg.com/vi/0M-eCdRZ0lo/maxresdefault.jpg"),
    new Event("Buy new laptop", "...", "12/12/2020", "https://c.s-microsoft.com/ru-ru/CMSImages/1920_Panel1_Hero_Laptop.jpg?version=090f3049-8032-1102-e65b-498904a634e1")
  ];

  ngOnInit() {
  }

}
