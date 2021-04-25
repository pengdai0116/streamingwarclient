import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {OfferService} from '../../service/offer.service';
import {OfferEvent} from '../../model/offer-event';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferEventListComponent implements OnInit {

  offerEvents: OfferEvent[] = [];
  selectedOfferEvent?: OfferEvent;

  constructor(
    private offerService: OfferService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(
      offerEvents => this.offerEvents = offerEvents
    );
  }

  onSelect(offer: OfferEvent): void {
    this.selectedOfferEvent = offer;
  }

  goBack(): void {
    this.location.back();
  }

}
