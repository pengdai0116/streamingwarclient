import {Component, OnInit} from '@angular/core';
import {StreamService} from '../../../service/stream.service';
import {FormBuilder} from '@angular/forms';
import {Stream} from '../../../model/stream';
import {Event} from '../../../model/event';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {OfferService} from '../../../service/offer.service';
import {EventService} from '../../../service/event.service';

@Component({
  selector: 'app-offer-event',
  templateUrl: './offer-event.component.html',
  styleUrls: ['./offer-event.component.css']
})
export class OfferEventComponent implements OnInit {

  stream?: Stream;
  events: Event[] = [];

  offerEventForm = this.fb.group({
    streamingServiceShortName: [''],
    eventName: [''],
    eventYear: [''],
    viewingPrice: [0],
  });

  constructor(private fb: FormBuilder,
              private streamService: StreamService,
              private offerService: OfferService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getStream();
    this.getEvents();
  }

  getStream(): void {
    const streamId = Number(this.route.snapshot.paramMap.get('id'));
    this.streamService.getStream(streamId).subscribe(stream =>
      this.stream = stream
    );
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events =>
      this.events = events
    );
  }

  onSubmit(): void {
    if (this.stream) {
      this.offerEventForm.patchValue({streamingServiceShortName: this.stream.streamShortName});
    }
    this.offerService.offerEvent(this.offerEventForm.value).subscribe(_ =>
      this.gotoStreamList()
    );
  }

  gotoStreamList(): void {
    this.router.navigate(['/streams']);
  }

  cancel(): void {
    this.location.back();
  }

}
