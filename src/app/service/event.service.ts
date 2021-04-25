import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UtilService} from './util.service';
import {Event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // private eventsUrl = 'api/events';
  private eventsUrl = `${this.utilService.backendUrl}/api/event`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
      .pipe(
        tap(_ => this.utilService.log('EventService', 'fetched events')),
        catchError(this.utilService.handleError<Event[]>('EventService', 'getEvents', []))
      );
  }

  public getEvent(id: number): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url)
      .pipe(
        tap(_ => this.utilService.log('EventService', 'fetched event id=${id}')),
        catchError(this.utilService.handleError<Event>('EventService', 'getEvent id=${id}'))
      );
  }

  public updateEvent(event: Event): Observable<any> {
    const url = `${this.eventsUrl}?eventName=${event.eventName}&eventYear=${event.eventYear}&duration=${event.eventDuration}&licenseFee=${event.eventLicenseFee}`;
    return this.http.put(url, event, this.utilService.httpOptions).pipe(
      tap(_ => this.utilService.log('EventService', 'updated event eventId=${event.eventId}')),
      catchError(this.utilService.handleError<any>('updateEvent'))
    );
  }

  save(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event);
  }

  deleteEvent(eventId: number): Observable<any> {
    console.log(eventId);
    const url = `${this.eventsUrl}/${eventId}`;
    return this.http.delete(url).pipe(
      tap(_ => this.utilService.log('EventService', 'delete event eventId=${event.eventId}')),
      catchError(this.utilService.handleError<any>('deleteEvent'))
    );
  }
}
