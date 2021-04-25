import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UtilService} from './util.service';
import {OfferEvent} from '../model/offer-event';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  // private offerUrl = 'api/offers';
  private offerUrl = `${this.utilService.backendUrl}/api/offer`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) { }

  public getOffers(): Observable<OfferEvent[]> {
    return this.http.get<OfferEvent[]>(this.offerUrl)
      .pipe(
        tap(_ => this.utilService.log('OfferService', 'fetched offers')),
        catchError(this.utilService.handleError<OfferEvent[]>('OfferService', 'getOffers', []))
      );
  }

  public getOffer(id: number): Observable<OfferEvent> {
    const url = `${this.offerUrl}/${id}`;
    return this.http.get<OfferEvent>(url)
      .pipe(
        tap(_ => this.utilService.log('OfferService', 'fetched offer id=${id}')),
        catchError(this.utilService.handleError<OfferEvent>('OfferService', 'getOffer id=${id}'))
      );
  }

  public offerEvent(offerEvent: OfferEvent): Observable<any> {
    const url = `${this.offerUrl}?streamingServiceShortName=${offerEvent.streamingServiceShortName}&eventName=${offerEvent.eventName}&eventYear=${offerEvent.eventYear}&viewingPrice=${offerEvent.viewingPrice}`;
    console.log(offerEvent);
    return this.http.post(url, offerEvent, this.utilService.httpOptions).pipe(
      tap(_ => this.utilService.log('OfferService', 'updated offer offerId=${offer.offerId}')),
      catchError(this.utilService.handleError<any>('OfferService', 'offerEvent'))
    );
  }

  public save(offer: OfferEvent): Observable<OfferEvent> {
    return this.http.post<OfferEvent>(this.offerUrl, offer);
  }
}
