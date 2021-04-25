import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfferService} from '../../service/offer.service';
import {OfferEvent} from '../../model/offer-event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  offerEvent?: OfferEvent;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private location: Location) { }

  ngOnInit(): void {
    this.getOfferEvent();
  }

  getOfferEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.offerService.getOffer(id)
      .subscribe(offerEvent => {
        this.offerEvent = offerEvent;
      });
  }

  goBack(): void {
    this.location.back();
  }
}

