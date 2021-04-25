import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../service/event.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-retract-movie',
  templateUrl: './retract-movie.component.html',
  styleUrls: ['./retract-movie.component.css']
})
export class RetractMovieComponent implements OnInit {

  event?: Event;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.deleteEvent(eventId).subscribe(_ => this.router.navigate(['/events']));
  }

}
