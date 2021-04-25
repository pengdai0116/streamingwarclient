import {Component, OnInit} from '@angular/core';
import {Event} from '../../../model/event';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {EventService} from '../../../service/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  event?: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(eventId).subscribe(event =>
      this.event = event
    );
  }

  updateEvent(): void {
    if (this.event) {
      console.log(this.event);
      this.eventService.updateEvent(this.event).subscribe(() => this.goBack());
    }
  }

  cancel(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
