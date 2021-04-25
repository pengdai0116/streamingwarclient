import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../service/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  addEventForm = new FormGroup({
    eventType: new FormControl(''),
    eventName: new FormControl(''),
    eventYear: new FormControl(''),
    eventDuration: new FormControl(''),
    studioShortName: new FormControl(''),
    eventLicenseFee: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService) { }

  gotoEventList(): void {
    this.router.navigate(['/events']);
  }

  onSubmit(): void {
    this.eventService.save(this.addEventForm.value).subscribe(_ =>
      this.gotoEventList()
    );
  }
}
