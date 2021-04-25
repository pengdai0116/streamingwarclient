import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventService } from '../../service/event.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  selectedEvent?: Event;

  constructor(private eventService: EventService,
              private location: Location) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      data => {
        console.log(data);
        this.events = data;
      });
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  goBack(): void {
    this.location.back();
  }

}
